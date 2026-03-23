import { useState } from 'react';
import Modal, { FormField, FormInput, FormSelect } from '../Modal';

const TIER_OPTIONS = ['Enterprise', 'Mid', 'SMB'];
const CATEGORY_OPTIONS = ['SIer', 'SES派遣', 'コンサル', 'Web系', '一般事業'];

export default function EditCompanyModal({ isOpen, onClose, company, companyDetail, onSubmit }) {
  const info = companyDetail?.info || {};

  const [name, setName] = useState(company?.name || '');
  const [tier, setTier] = useState(info.tier || '');
  const [category, setCategory] = useState(info.category || '');
  const [address, setAddress] = useState(companyDetail?.address || '');

  const handleSubmit = () => {
    if (!name.trim()) return false;
    onSubmit({
      name: name.trim(),
      tier,
      category,
      address,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="企業情報編集" onSubmit={handleSubmit} submitLabel="保存">
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
