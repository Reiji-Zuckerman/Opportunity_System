import { useState } from 'react';
import Modal, { FormField, FormInput, FormTextarea, NoteBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function JobModal({ isOpen, onClose, dealName, dealId, companyName, companyId, dept }) {
  const { upsertJob } = useData();
  const [jobs, setJobs] = useState([{ title: '', count: '', detail: '' }]);

  const addJob = () => {
    setJobs([...jobs, { title: '', count: '', detail: '' }]);
  };

  const updateJob = (index, field, value) => {
    const updated = [...jobs];
    updated[index] = { ...updated[index], [field]: value };
    setJobs(updated);
  };

  const handleSubmit = () => {
    const today = new Date().toLocaleDateString('ja-JP');
    jobs.forEach((job) => {
      if (!job.title) return;
      upsertJob({
        id: Date.now() + Math.random(),
        dealId: dealId || null,
        companyId: companyId || null,
        title: job.title,
        dept: dept || '',
        count: Number(job.count) || 1,
        date: today,
        company: companyName || '',
        businessDept: dept || '',
        dealName: dealName || '',
        status: '予定',
      });
    });

    setJobs([{ title: '', count: '', detail: '' }]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="求人登録" onSubmit={handleSubmit}>
      <div className="text-sm text-gray-700">
        <span className="font-medium">紐づく商談:</span> {dealName || '未設定'}
      </div>

      {jobs.map((job, i) => (
        <div key={i} className="space-y-3 p-3 border border-gray-200 rounded-lg">
          {jobs.length > 1 && (
            <div className="text-xs font-medium text-gray-500">求人 {i + 1}</div>
          )}
          <FormField label="職種" required>
            <FormInput value={job.title} onChange={(e) => updateJob(i, 'title', e.target.value)} placeholder="職種を入力" />
          </FormField>
          <FormField label="募集人数" required>
            <FormInput type="number" value={job.count} onChange={(e) => updateJob(i, 'count', e.target.value)} placeholder="人数" min="1" />
          </FormField>
          <FormField label="求人詳細">
            <FormTextarea value={job.detail} onChange={(e) => updateJob(i, 'detail', e.target.value)} placeholder="求人詳細を入力" />
          </FormField>
        </div>
      ))}

      <button
        type="button"
        onClick={addJob}
        className="text-sm text-accent hover:text-accent/80 font-medium"
      >
        + さらに求人を追加する
      </button>

      <NoteBox color="blue">既存CRM求人テーブルのカラムに合わせてエンジニアが項目を確定します</NoteBox>
    </Modal>
  );
}
