import { useState } from 'react';
import Modal, { FormField, FormInput, FormSelect, FormTextarea, ToggleGroup, ChipSelect } from '../Modal';
import { MEMBERS, TASK_CATEGORIES, CONTACT_METHODS } from '../../data/dummy';

export default function ActivityModal({ isOpen, onClose, dealName }) {
  const today = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(today);
  const [status, setStatus] = useState('完了');
  const [categories, setCategories] = useState([]);
  const [contactMethod, setContactMethod] = useState('メール');
  const [companyName, setCompanyName] = useState('');
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [dealLink, setDealLink] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleSubmit = () => {
    setDate(today);
    setStatus('完了');
    setCategories([]);
    setContactMethod('メール');
    setCompanyName('');
    setDepartmentName('');
    setPersonName('');
    setDealLink('');
    setAssignee('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Activity登録" onSubmit={handleSubmit}>
      <FormField label="実施日">
        <FormInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
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
