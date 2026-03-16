import { useState } from 'react';
import Modal, { FormField, FormInput, FormSelect, FormTextarea, ToggleGroup, ChipSelect } from '../Modal';
import { MEMBERS, TASK_CATEGORIES, CONTACT_METHODS } from '../../data/dummy';

export default function TaskModal({ isOpen, onClose, dealName }) {
  const [deadline, setDeadline] = useState('');
  const [status, setStatus] = useState('未実施');
  const [categories, setCategories] = useState([]);
  const [contactMethod, setContactMethod] = useState('メール');
  const [companyName, setCompanyName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [dealLink, setDealLink] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = () => {
    setDeadline('');
    setStatus('未実施');
    setCategories([]);
    setContactMethod('メール');
    setCompanyName('');
    setDepartmentName('');
    setPersonName('');
    setDealLink('');
    setAssignee('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Task登録" onSubmit={handleSubmit}>
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
        <FormInput value={companyName} onChange={(e) => setCompanyName(e.target.value)} placeholder="企業名を入力" />
      </FormField>

      <FormField label="事業部名">
        <FormInput value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} placeholder="事業部名を入力" />
      </FormField>

      <FormField label="人物名">
        <FormInput value={personName} onChange={(e) => setPersonName(e.target.value)} placeholder="人物名を入力" />
      </FormField>

      <FormField label="商談紐づけ">
        {dealName ? (
          <div className="px-3 py-2 text-sm border-2 border-blue-300 bg-blue-50 rounded-lg text-blue-800">
            {dealName}
          </div>
        ) : (
          <FormInput value={dealLink} onChange={(e) => setDealLink(e.target.value)} placeholder="商談名を入力" />
        )}
      </FormField>

      <FormField label="担当者">
        <FormSelect options={MEMBERS} value={assignee} onChange={(e) => setAssignee(e.target.value)} />
      </FormField>
    </Modal>
  );
}
