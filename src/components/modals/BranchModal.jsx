import { useState, useMemo } from 'react';
import Modal, { FormField, FormInput, FormTextarea, ToggleGroup, ChipSelect, NoteBox, ComboBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function BranchModal({ isOpen, onClose, parentDeal, dealId }) {
  const { MEMBERS, DIVISIONS, COMPANIES, COMPANY_DETAILS, DEAL_DETAILS, upsertDeal } = useData();

  // Get parent deal info for company context
  const parentDetail = dealId ? DEAL_DETAILS[dealId] : null;
  const parentCompanyName = parentDetail?.basicInfo?.company || parentDeal?.company || '';

  const { deptOptions, personOptions } = useMemo(() => {
    const matched = COMPANIES.find(c => c.name === parentCompanyName);
    if (!matched) return { deptOptions: [], personOptions: [] };
    const detail = COMPANY_DETAILS[matched.id];
    if (!detail) return { deptOptions: [], personOptions: [] };
    const depts = (detail.whitelist || []).map(w => w.dept);
    const persons = (detail.whitelist || []).flatMap(w => (w.contacts || []).map(c => c.name));
    return { deptOptions: [...new Set(depts)], personOptions: [...new Set(persons)] };
  }, [parentCompanyName, COMPANIES, COMPANY_DETAILS]);

  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [status, setStatus] = useState('予定');
  const [divisions, setDivisions] = useState([]);
  const [dealers, setDealers] = useState([]);
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!name) return;
    const matchedCompany = COMPANIES.find(c => c.name === parentCompanyName);
    const today = new Date().toLocaleDateString('ja-JP');

    const deal = {
      companyId: matchedCompany?.id || parentDeal?.companyId || null,
      name,
      company: parentCompanyName,
      assignee: dealers.join('、'),
      dept: divisions[0] || '',
      lastMeeting: datetime ? new Date(datetime).toLocaleDateString('ja-JP') : today,
      status,
    };

    const dealDetail = {
      basicInfo: {
        company: parentCompanyName,
        dept: departmentName,
        clientPerson: personName,
        ourPerson: dealers.join('、'),
        businessDept: divisions.join('、'),
        channel: '',
        acquiredBy: '',
        status,
      },
      tree: { parent: parentDeal?.name || null, current: name, next: null, branches: [] },
      _linkType: 'branch',
      meetings: datetime ? [{
        date: new Date(datetime).toLocaleDateString('ja-JP'),
        round: 1,
        attendees: personName,
        content: content || '',
      }] : [],
      tasks: [],
      jobs: [],
    };

    upsertDeal(deal, dealDetail);

    // Reset
    setName('');
    setDatetime('');
    setStatus('予定');
    setDivisions([]);
    setDealers([]);
    setDepartmentName('');
    setPersonName('');
    setContent('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="担当分岐" onSubmit={handleSubmit} submitLabel="分岐作成" submitColor="bg-orange-500">
      <NoteBox color="orange">起点商談: {parentDeal?.name}</NoteBox>

      <div className="inline-block px-2 py-1 text-xs font-medium text-orange-700 bg-orange-100 rounded">
        子商談として生成されます
      </div>

      <FormField label="新しい商談名" required>
        <FormInput value={name} onChange={(e) => setName(e.target.value)} placeholder="新しい商談名を入力" />
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

      <FormField label="事業部名">
        <ComboBox
          options={deptOptions}
          value={departmentName}
          onChange={setDepartmentName}
          placeholder="事業部を選択または新規入力"
        />
      </FormField>

      <FormField label="人物名">
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

      <div className="text-xs text-gray-500">企業名は親商談から自動引き継ぎ: {parentCompanyName}</div>
    </Modal>
  );
}
