import { useState } from 'react';
import Modal, { FormField, FormInput, FormSelect } from '../Modal';

const TIER_OPTIONS = ['Enterprise', 'Mid', 'SMB'];
const CATEGORY_OPTIONS = ['SIer', 'SES派遣', 'コンサル', 'Web系', '一般事業'];

export default function NewCompanyModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [tier, setTier] = useState('');
  const [category, setCategory] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) return;
    onSubmit({
      name: name.trim(),
      tier: tier || 'SMB',
      category: category || '一般事業',
      address,
    });
    setName('');
    setTier('');
    setCategory('');
    setAddress('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="新規企業追加" onSubmit={handleSubmit}>
      <FormField label="企業名" required>
        <FormInput value={name} onChange={(e) => setName(e.target.value)} placeholder="企業名を入力" />
      </FormField>

      <FormField label="Tier">
        <FormSelect options={TIER_OPTIONS} value={tier} onChange={(e) => setTier(e.target.value)} />
      </FormField>

      <FormField label="事業分類">
        <FormSelect options={CATEGORY_OPTIONS} value={category} onChange={(e) => setCategory(e.target.value)} />
      </FormField>

      <FormField label="住所">
        <FormInput value={address} onChange={(e) => setAddress(e.target.value)} placeholder="住所を入力" />
      </FormField>
    </Modal>
  );
}
