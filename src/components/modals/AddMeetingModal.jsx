import { useState, useMemo } from 'react';
import Modal, { FormField, FormInput, FormTextarea, ToggleGroup, ChipSelect, NoteBox, ComboBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function AddMeetingModal({ isOpen, onClose, dealName, dealId, meetingCount, companyName, companyId, dept }) {
  const { MEMBERS, DIVISIONS, COMPANIES, COMPANY_DETAILS, upsertDeal, upsertJob } = useData();

  const { deptOptions, personOptions } = useMemo(() => {
    const matched = COMPANIES.find(c => c.name === companyName);
    if (!matched) return { deptOptions: [], personOptions: [] };
    const detail = COMPANY_DETAILS[matched.id];
    if (!detail) return { deptOptions: [], personOptions: [] };
    const depts = (detail.whitelist || []).map(w => w.dept);
    const persons = (detail.whitelist || []).flatMap(w => (w.contacts || []).map(c => c.name));
    return { deptOptions: [...new Set(depts)], personOptions: [...new Set(persons)] };
  }, [companyName, COMPANIES, COMPANY_DETAILS]);

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [status, setStatus] = useState('予定');
  const [divisions, setDivisions] = useState([]);
  const [dealers, setDealers] = useState([]);
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [content, setContent] = useState('');
  const [showJobs, setShowJobs] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobCount, setJobCount] = useState('');

  const handleSubmit = () => {
    if (!name) return;
    const today = new Date().toLocaleDateString('ja-JP');

    const deal = {
      companyId: companyId || null,
      name,
      company: companyName || '',
      assignee: dealers.join('、'),
      dept: divisions[0] || dept || '',
      lastMeeting: datetime ? new Date(datetime).toLocaleDateString('ja-JP') : today,
      status,
    };

    const dealDetail = {
      basicInfo: {
        company: companyName || '',
        dept: departmentName,
        clientPerson: personName,
        ourPerson: dealers.join('、'),
        businessDept: divisions.join('、') || dept || '',
        channel: '',
        acquiredBy: '',
        status,
      },
      tree: { parent: dealName, current: name, next: null, branches: [] },
      meetings: datetime ? [{
        date: new Date(datetime).toLocaleDateString('ja-JP'),
        round: 1,
        attendees: personName,
        content: content || '',
      }] : [],
      tasks: [],
      jobs: [],
      _linkType: 'next', // This tells upsertDeal to set parent's tree.next
    };

    const newDealId = upsertDeal(deal, dealDetail);

    // If job was added inline
    if (showJobs && jobTitle) {
      upsertJob({
        id: Date.now(),
        dealId: newDealId,
        companyId: companyId || null,
        title: jobTitle,
        dept: dept || '',
        count: Number(jobCount) || 1,
        date: today,
        company: companyName || '',
        businessDept: dept || '',
        dealName: name,
        status: '予定',
      });
    }

    // Reset
    setName('');
    setDatetime('');
    setStatus('予定');
    setDivisions([]);
    setDealers([]);
    setDepartmentName('');
    setPersonName('');
    setContent('');
    setShowJobs(false);
    setJobTitle('');
    setJobCount('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="商談追記" onSubmit={handleSubmit}>
      <NoteBox color="blue">「{dealName}」の続きの商談を追記します（ツリー上で横に繋がります）</NoteBox>

      <FormField label="商談名" required>
        <FormInput value={name} onChange={(e) => setName(e.target.value)} placeholder="続きの商談名を入力" />
      </FormField>

      <FormField label="商談日時">
        <FormInput type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
      </FormField>

      <FormField label="ステータス">
        <ToggleGroup options={['予定', '実施済']} value={status} onChange={setStatus} />
      </FormField>

      <FormField label="商談事業部">
        <ChipSelect options={DIVISIONS} selected={divisions} onChange={setDivisions} />
      </FormField>

      <FormField label="商談者">
        <ChipSelect options={MEMBERS} selected={dealers} onChange={setDealers} />
      </FormField>

      <FormField label="先方部署">
        <ComboBox
          options={deptOptions}
          value={departmentName}
          onChange={setDepartmentName}
          placeholder="部署を選択または新規入力"
        />
      </FormField>

      <FormField label="先方担当者">
        <ComboBox
          options={personOptions}
          value={personName}
          onChange={setPersonName}
          placeholder="人物を選択または新規入力"
        />
      </FormField>

      <FormField label="商談内容">
        <FormTextarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="商談内容を入力" />
      </FormField>

      {!showJobs ? (
        <button
          type="button"
          onClick={() => setShowJobs(true)}
          className="text-sm text-accent hover:text-accent/80 font-medium"
        >
          + 求人を追加する
        </button>
      ) : (
        <div className="space-y-3 p-3 border border-gray-200 rounded-lg">
          <FormField label="職種">
            <FormInput value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="職種を入力" />
          </FormField>
          <FormField label="募集人数">
            <FormInput type="number" value={jobCount} onChange={(e) => setJobCount(e.target.value)} placeholder="人数" min="1" />
          </FormField>
        </div>
      )}

      <div className="text-xs text-gray-500">企業名は親商談から自動引き継ぎ: {companyName}</div>
    </Modal>
  );
}
