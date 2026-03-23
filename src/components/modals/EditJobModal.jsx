import { useState } from 'react';
import Modal, { FormField, FormInput, FormTextarea } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function EditJobModal({ isOpen, onClose, job }) {
  const { upsertJob } = useData();

  const [title, setTitle] = useState(job.title || '');
  const [count, setCount] = useState(String(job.count || 1));
  const [dept, setDept] = useState(job.dept || '');
  const [detail, setDetail] = useState(job.detail || '');

  const handleSubmit = () => {
    if (!title) return false;
    upsertJob({
      ...job,
      title,
      count: Number(count) || 1,
      dept,
      detail,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="求人編集" onSubmit={handleSubmit} submitLabel="保存">
      <FormField label="職種" required>
        <FormInput value={title} onChange={(e) => setTitle(e.target.value)} placeholder="職種を入力" />
      </FormField>

      <FormField label="募集人数" required>
        <FormInput type="number" value={count} onChange={(e) => setCount(e.target.value)} placeholder="人数" min="1" />
      </FormField>

      <FormField label="事業部">
        <FormInput value={dept} onChange={(e) => setDept(e.target.value)} placeholder="事業部" />
      </FormField>

      <FormField label="求人詳細">
        <FormTextarea value={detail} onChange={(e) => setDetail(e.target.value)} placeholder="求人詳細を入力" />
      </FormField>
    </Modal>
  );
}
