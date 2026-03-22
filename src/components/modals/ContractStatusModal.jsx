import { useState } from 'react';
import Modal, { FormField, FormTextarea, ToggleGroup, NoteBox } from '../Modal.jsx';
import { useData } from '../../contexts/DataContext';

export default function ContractStatusModal({ isOpen, onClose, companyName, companyId, currentStatus }) {
  const { CONTRACT_STATUSES, updateContractStatus } = useData();
  const [itss, setItss] = useState(currentStatus?.itss || '未接触');
  const [perm, setPerm] = useState(currentStatus?.perm || '未接触');
  const [dsl, setDsl] = useState(currentStatus?.dsl || '未接触');
  const [remarks, setRemarks] = useState('');

  const changed = currentStatus && (
    itss !== currentStatus.itss || perm !== currentStatus.perm || dsl !== currentStatus.dsl
  );

  const handleSubmit = () => {
    if (companyId) {
      updateContractStatus(companyId, { itss, perm, dsl });
    }
  };

  return (
    <Modal isOpen={true} onClose={onClose} title="契約ステータス更新" onSubmit={handleSubmit} submitLabel="更新">
      <div className="text-sm text-gray-700 mb-1">
        <span className="font-medium">対象企業:</span> {companyName}
      </div>

      {currentStatus && (
        <NoteBox color="blue">
          現在のステータス — ITSS: {currentStatus.itss} / PERM: {currentStatus.perm} / DSL: {currentStatus.dsl}
        </NoteBox>
      )}

      <FormField label="ITSS" required>
        <ToggleGroup options={CONTRACT_STATUSES} value={itss} onChange={setItss} />
      </FormField>

      <FormField label="PERM" required>
        <ToggleGroup options={CONTRACT_STATUSES} value={perm} onChange={setPerm} />
      </FormField>

      <FormField label="DSL" required>
        <ToggleGroup options={CONTRACT_STATUSES} value={dsl} onChange={setDsl} />
      </FormField>

      {changed && (
        <NoteBox color="orange">
          変更あり:{' '}
          {itss !== currentStatus.itss && `ITSS: ${currentStatus.itss} → ${itss}  `}
          {perm !== currentStatus.perm && `PERM: ${currentStatus.perm} → ${perm}  `}
          {dsl !== currentStatus.dsl && `DSL: ${currentStatus.dsl} → ${dsl}`}
        </NoteBox>
      )}

      <FormField label="備考">
        <FormTextarea value={remarks} onChange={e => setRemarks(e.target.value)} placeholder="ステータス変更の理由を入力" />
      </FormField>
    </Modal>
  );
}
