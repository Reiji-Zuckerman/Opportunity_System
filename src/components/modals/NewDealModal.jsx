import { useState, useMemo } from 'react';
import Modal, { FormField, FormInput, FormTextarea, FormSelect, ToggleGroup, ChipSelect, NoteBox, ComboBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function NewDealModal({ isOpen, onClose, presetCompanyId }) {
  const { MEMBERS, DIVISIONS, DEAL_ROUTES, COMPANIES, COMPANY_DETAILS } = useData();

  // Build option lists from existing data
  const companyOptions = useMemo(() => COMPANIES.map(c => c.name), [COMPANIES]);

  // When company is selected, derive department and person options from whitelist
  const [companyName, setCompanyName] = useState(() => {
    if (presetCompanyId) {
      const c = COMPANIES.find(co => co.id === Number(presetCompanyId));
      return c?.name || '';
    }
    return '';
  });

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
  const [acquirer, setAcquirer] = useState('');
  const [route, setRoute] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [content, setContent] = useState('');
  const [showJobs, setShowJobs] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobCount, setJobCount] = useState('');

  const handleCompanyChange = (val) => {
    setCompanyName(val);
    // Reset dept/person when company changes
    setDepartmentName('');
    setPersonName('');
  };

  // When department is selected, filter person options to that department
  const filteredPersonOptions = useMemo(() => {
    if (!departmentName) return personOptions;
    const matched = COMPANIES.find(c => c.name === companyName);
    if (!matched) return personOptions;
    const detail = COMPANY_DETAILS[matched.id];
    if (!detail) return personOptions;
    const dept = (detail.whitelist || []).find(w => w.dept === departmentName);
    if (!dept) return personOptions;
    const deptPersons = (dept.contacts || []).map(c => c.name);
    // Show dept persons first, then others
    return [...new Set([...deptPersons, ...personOptions])];
  }, [departmentName, personOptions, companyName, COMPANIES, COMPANY_DETAILS]);

  const handleSubmit = () => {
    setName('');
    setDatetime('');
    setStatus('予定');
    setDivisions([]);
    setDealers([]);
    setAcquirer('');
    setRoute('');
    if (!presetCompanyId) setCompanyName('');
    setDepartmentName('');
    setPersonName('');
    setContent('');
    setShowJobs(false);
    setJobTitle('');
    setJobCount('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="新規商談登録" onSubmit={handleSubmit}>
      <FormField label="商談名" required>
        <FormInput value={name} onChange={(e) => setName(e.target.value)} placeholder="商談名を入力" />
      </FormField>

      <FormField label="商談日時" required>
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

      <FormField label="商談獲得者">
        <FormSelect options={MEMBERS} value={acquirer} onChange={(e) => setAcquirer(e.target.value)} />
      </FormField>

      <FormField label="商談経路">
        <FormSelect options={DEAL_ROUTES} value={route} onChange={(e) => setRoute(e.target.value)} />
      </FormField>

      <NoteBox color="blue">商談獲得者・商談経路は初回商談のみ入力</NoteBox>

      <FormField label="企業名">
        <ComboBox
          options={companyOptions}
          value={companyName}
          onChange={handleCompanyChange}
          placeholder="企業名を選択または新規入力"
        />
      </FormField>

      <FormField label="事業部名">
        <ComboBox
          options={deptOptions}
          value={departmentName}
          onChange={setDepartmentName}
          placeholder={companyName ? '事業部を選択または新規入力' : '先に企業を選択してください'}
        />
      </FormField>

      <FormField label="人物名">
        <ComboBox
          options={filteredPersonOptions}
          value={personName}
          onChange={setPersonName}
          placeholder={companyName ? '人物を選択または新規入力' : '先に企業を選択してください'}
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
    </Modal>
  );
}
