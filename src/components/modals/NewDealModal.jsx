import { useState } from 'react';
import Modal, { FormField, FormInput, FormTextarea, FormSelect, ToggleGroup, ChipSelect, NoteBox } from '../Modal';
import { MEMBERS, DIVISIONS, DEAL_ROUTES } from '../../data/dummy';

export default function NewDealModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [status, setStatus] = useState('予定');
  const [divisions, setDivisions] = useState([]);
  const [dealers, setDealers] = useState([]);
  const [acquirer, setAcquirer] = useState('');
  const [route, setRoute] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [content, setContent] = useState('');
  const [showJobs, setShowJobs] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobCount, setJobCount] = useState('');

  const handleSubmit = () => {
    setName('');
    setDatetime('');
    setStatus('予定');
    setDivisions([]);
    setDealers([]);
    setAcquirer('');
    setRoute('');
    setCompanyName('');
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
        <FormInput value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="企業名を入力（新規作成可）" />
      </FormField>

      <FormField label="事業部名">
        <FormInput value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} placeholder="事業部名を入力" />
      </FormField>

      <FormField label="人物名">
        <FormInput value={personName} onChange={(e) => setPersonName(e.target.value)} placeholder="人物名を入力" />
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
