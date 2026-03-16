import { useState } from 'react';
import Modal, { FormField, FormInput, FormTextarea, ToggleGroup, ChipSelect, NoteBox } from '../Modal';
import { MEMBERS, DIVISIONS } from '../../data/dummy';

export default function BranchModal({ isOpen, onClose, parentDeal }) {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [status, setStatus] = useState('予定');
  const [divisions, setDivisions] = useState([]);
  const [dealers, setDealers] = useState([]);
  const [departmentName, setDepartmentName] = useState('');
  const [personName, setPersonName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
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
        <FormInput value={departmentName} onChange={(e) => setDepartmentName(e.target.value)} placeholder="事業部名を入力" />
      </FormField>

      <FormField label="人物名">
        <FormInput value={personName} onChange={(e) => setPersonName(e.target.value)} placeholder="人物名を入力" />
      </FormField>

      <FormField label="商談内容">
        <FormTextarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="商談内容を入力" />
      </FormField>

      <div className="text-xs text-gray-500">企業名は親商談から自動引き継ぎ</div>
    </Modal>
  );
}
