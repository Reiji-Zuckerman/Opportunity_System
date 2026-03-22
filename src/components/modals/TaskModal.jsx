import { useState, useMemo } from 'react';
import Modal, { FormField, FormInput, FormSelect, ToggleGroup, ChipSelect, ComboBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function TaskModal({ isOpen, onClose, dealName, dealId, companyId }) {
  const { MEMBERS, TASK_CATEGORIES, CONTACT_METHODS, COMPANIES, COMPANY_DETAILS, DEALS, upsertTask } = useData();

  const companyOptions = useMemo(() => COMPANIES.map(c => c.name), [COMPANIES]);
  const dealOptions = useMemo(() => DEALS.map(d => d.name), [DEALS]);

  const presetCompanyName = useMemo(() => {
    if (companyId) {
      const c = COMPANIES.find(co => co.id === Number(companyId));
      return c?.name || '';
    }
    return '';
  }, [companyId, COMPANIES]);

  const [taskName, setTaskName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('未実施');
  const [categories, setCategories] = useState([]);
  const [contactMethod, setContactMethod] = useState('メール');
  const [companyName, setCompanyName] = useState(presetCompanyName);
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [dealLink, setDealLink] = useState(dealName || '');
  const [assignee, setAssignee] = useState('');

  const { deptOptions, personOptions } = useMemo(() => {
    const matched = COMPANIES.find(c => c.name === companyName);
    if (!matched) return { deptOptions: [], personOptions: [] };
    const detail = COMPANY_DETAILS[matched.id];
    if (!detail) return { deptOptions: [], personOptions: [] };
    const depts = (detail.whitelist || []).map(w => w.dept);
    const persons = (detail.whitelist || []).flatMap(w => (w.contacts || []).map(c => c.name));
    return { deptOptions: [...new Set(depts)], personOptions: [...new Set(persons)] };
  }, [companyName, COMPANIES, COMPANY_DETAILS]);

  const handleCompanyChange = (val) => {
    setCompanyName(val);
    setDepartmentName('');
    setPersonName('');
  };

  const handleSubmit = () => {
    if (!taskName && !deadline) return;
    const matchedDeal = DEALS.find(d => d.name === dealLink);
    const task = {
      id: Date.now(),
      type: 'Task',
      name: taskName || `${categories.join('・') || 'Task'} - ${companyName || '未設定'}`,
      company: companyName,
      category: categories[0] || '',
      due: deadline,
      assignee,
      method: contactMethod,
      status: status === '完了' ? 'done' : status === '実施中' ? 'in_progress' : 'pending',
      dealId: dealId || matchedDeal?.id || null,
    };

    upsertTask(task);

    // Reset
    setTaskName('');
    setDeadline('');
    setStatus('未実施');
    setCategories([]);
    setContactMethod('メール');
    if (!companyId) setCompanyName('');
    setDepartmentName('');
    setPersonName('');
    if (!dealName) setDealLink('');
    setAssignee('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Task登録" onSubmit={handleSubmit}>
      <FormField label="Task名" required>
        <FormInput value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="タスク内容を入力" />
      </FormField>

      <FormField label="期日" required>
        <FormInput type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </FormField>

      <FormField label="ステータス">
        <ToggleGroup options={['未実施', '実施中', '完了']} value={status} onChange={setStatus} />
      </FormField>

      <FormField label="種別">
        <ChipSelect options={TASK_CATEGORIES} selected={categories} onChange={setCategories} />
      </FormField>

      <FormField label="連絡方法">
        <ToggleGroup options={CONTACT_METHODS} value={contactMethod} onChange={setContactMethod} />
      </FormField>

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
          options={personOptions}
          value={personName}
          onChange={setPersonName}
          placeholder={companyName ? '人物を選択または新規入力' : '先に企業を選択してください'}
        />
      </FormField>

      <FormField label="商談紐づけ">
        {dealName ? (
          <div className="px-3 py-2 text-sm border-2 border-blue-300 bg-blue-50 rounded-lg text-blue-800">
            {dealName}
          </div>
        ) : (
          <ComboBox
            options={dealOptions}
            value={dealLink}
            onChange={setDealLink}
            placeholder="商談を選択"
          />
        )}
      </FormField>

      <FormField label="担当者">
        <FormSelect options={MEMBERS} value={assignee} onChange={(e) => setAssignee(e.target.value)} />
      </FormField>
    </Modal>
  );
}
