import { useState } from 'react';
import Modal, { FormField, FormTextarea, ToggleGroup } from '../Modal.jsx';
import { CONTRACT_STATUSES } from '../../data/dummy.js';

export default function ContractStatusModal({ isOpen, onClose, companyName }) {
  const [itss, setItss] = useState('未接触');
  const [perm, setPerm] = useState('未接触');
  const [dsl, setDsl] = useState('未接触');
  const [remarks, setRemarks] = useState('');

  const handleSubmit = () => {
    setItss('未接触');
    setPerm('未接触');
    setDsl('未接触');
    setRemarks('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="契約ステータス更新" onSubmit={handleSubmit}>
      <div className="text-sm text-gray-700">
        <span className="font-medium">対象企業:</span> {companyName}
      </div>

      <FormField label="ITSS">
        <ToggleGroup options={CONTRACT_STATUSES} value={itss} onChange={setItss} />
      </FormField>

      <FormField label="PERM">
        <ToggleGroup options={CONTRACT_STATUSES} value={perm} onChange={setPerm} />
      </FormField>

      <FormField label="DSL">
        <ToggleGroup options={CONTRACT_STATUSES} value={dsl} onChange={setDsl} />
      </FormField>

      <FormField label="備考">
        <FormTextarea value={remarks} onChange={e => setRemarks(e.target.value)} placeholder="備考を入力" />
      </FormField>
    </Modal>
  );
}
