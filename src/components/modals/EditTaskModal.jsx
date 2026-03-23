import { useState, useMemo } from 'react';
import Modal, { FormField, FormInput, FormSelect, ToggleGroup, ChipSelect, ComboBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

const STATUS_MAP = { pending: '未実施', in_progress: '実施中', done: '完了' };
const STATUS_REVERSE = { '未実施': 'pending', '実施中': 'in_progress', '完了': 'done' };

export default function EditTaskModal({ isOpen, onClose, task }) {
  const { MEMBERS, TASK_CATEGORIES, CONTACT_METHODS, COMPANIES, COMPANY_DETAILS, DEALS, upsertTask } = useData();

  const companyOptions = useMemo(() => COMPANIES.map(c => c.name), [COMPANIES]);
  const dealOptions = useMemo(() => DEALS.map(d => d.name), [DEALS]);

  const linkedDealName = useMemo(() => {
    if (task.dealId) {
      const d = DEALS.find(dl => dl.id === task.dealId);
      return d?.name || '';
    }
    return '';
  }, [task.dealId, DEALS]);

  const [taskName, setTaskName] = useState(task.name || '');
  const [deadline, setDeadline] = useState(task.due || '');
  const [status, setStatus] = useState(STATUS_MAP[task.status] || '未実施');
  const [categories, setCategories] = useState(task.category ? [task.category] : []);
  const [contactMethod, setContactMethod] = useState(task.method || 'メール');
  const [companyName, setCompanyName] = useState(task.company || '');
  const [dealLink, setDealLink] = useState(linkedDealName);
  const [assignee, setAssignee] = useState(task.assignee || '');

  const handleSubmit = () => {
    const matchedDeal = DEALS.find(d => d.name === dealLink);
    upsertTask({
      ...task,
      name: taskName || task.name,
      company: companyName,
      category: categories[0] || '',
      due: deadline,
      assignee,
      method: contactMethod,
      status: STATUS_REVERSE[status] || 'pending',
      dealId: matchedDeal?.id || task.dealId || null,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${task.type || 'Task'}編集`} onSubmit={handleSubmit} submitLabel="保存">
      <FormField label={task.type === 'Activity' ? '内容' : 'Task名'}>
        <FormInput value={taskName} onChange={(e) => setTaskName(e.target.value)} placeholder="内容を入力" />
      </FormField>

      <FormField label={task.type === 'Activity' ? '実施日' : '期日'}>
        <FormInput type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
      </FormField>

      <FormField label="ステータス">
        <ToggleGroup options={['未実施', '実施中', '完了']} value={status} onChange={setStatus} />
      </FormField>

      <FormField label="種別">
        <ChipSelect options={TASK_CATEGORIES} selected={categories} onChange={setCategories} allowCustom />
      </FormField>

      <FormField label="連絡方法">
        <ToggleGroup options={CONTACT_METHODS} value={contactMethod} onChange={setContactMethod} />
      </FormField>

      <FormField label="企業名">
        <ComboBox options={companyOptions} value={companyName} onChange={setCompanyName} placeholder="企業名を選択" />
      </FormField>

      <FormField label="商談紐づけ">
        <ComboBox options={dealOptions} value={dealLink} onChange={setDealLink} placeholder="商談を選択" />
      </FormField>

      <FormField label="担当者">
        <FormSelect options={MEMBERS} value={assignee} onChange={(e) => setAssignee(e.target.value)} />
      </FormField>
    </Modal>
  );
}
