import { useState } from 'react';
import Modal, { FormField, FormInput, FormTextarea, ToggleGroup, ChipSelect, NoteBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function AddMeetingModal({ isOpen, onClose, dealName, dealId, meetingCount, companyName, companyId, dept }) {
  const { MEMBERS, addMeeting, upsertJob } = useData();
  const [datetime, setDatetime] = useState('');
  const [status, setStatus] = useState('予定');
  const [clientAttendees, setClientAttendees] = useState(['']);
  const [ownAttendees, setOwnAttendees] = useState([]);
  const [content, setContent] = useState('');
  const [showJobs, setShowJobs] = useState(false);
  const [jobTitle, setJobTitle] = useState('');
  const [jobCount, setJobCount] = useState('');

  const addClientAttendee = () => setClientAttendees([...clientAttendees, '']);
  const updateClientAttendee = (index, value) => {
    const updated = [...clientAttendees];
    updated[index] = value;
    setClientAttendees(updated);
  };

  const handleSubmit = () => {
    if (!dealId) return;
    const round = (meetingCount || 0) + 1;
    const attendeeNames = clientAttendees.filter(a => a.trim());

    const meeting = {
      date: datetime ? new Date(datetime).toLocaleDateString('ja-JP') : new Date().toLocaleDateString('ja-JP'),
      round,
      attendees: [...attendeeNames, ...ownAttendees].join('、'),
      content: content || '',
    };

    addMeeting(dealId, meeting);

    // If job was added inline
    if (showJobs && jobTitle) {
      upsertJob({
        id: Date.now(),
        dealId,
        companyId: companyId || null,
        title: jobTitle,
        dept: dept || '',
        count: Number(jobCount) || 1,
        date: new Date().toLocaleDateString('ja-JP'),
        company: companyName || '',
        businessDept: dept || '',
        dealName: dealName || '',
        status: '予定',
      });
    }

    // Reset
    setDatetime('');
    setStatus('予定');
    setClientAttendees(['']);
    setOwnAttendees([]);
    setContent('');
    setShowJobs(false);
    setJobTitle('');
    setJobCount('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="面談追記" onSubmit={handleSubmit}>
      <div className="text-sm font-medium text-gray-900">
        {dealName} <span className="text-accent">(第{(meetingCount || 0) + 1}回)</span>
      </div>

      <FormField label="面談日時">
        <FormInput type="datetime-local" value={datetime} onChange={(e) => setDatetime(e.target.value)} />
        <NoteBox color="green">日時が過ぎると自動で実施済に変更</NoteBox>
      </FormField>

      <FormField label="ステータス">
        <ToggleGroup options={['予定', '実施済']} value={status} onChange={setStatus} />
      </FormField>

      <FormField label="参加者先方">
        {clientAttendees.map((attendee, i) => (
          <div key={i} className="mb-2">
            <FormInput
              value={attendee}
              onChange={(e) => updateClientAttendee(i, e.target.value)}
              placeholder="先方参加者名を入力"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addClientAttendee}
          className="text-sm text-accent hover:text-accent/80 font-medium"
        >
          + 参加者を追加
        </button>
      </FormField>

      <FormField label="参加者自社">
        <ChipSelect options={MEMBERS} selected={ownAttendees} onChange={setOwnAttendees} />
      </FormField>

      <FormField label="面談内容">
        <FormTextarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="面談内容を入力" />
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
