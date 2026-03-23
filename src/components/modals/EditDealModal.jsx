import { useState, useMemo } from 'react';
import Modal, { FormField, FormInput, FormSelect, ToggleGroup, ChipSelect, ComboBox } from '../Modal';
import { useData } from '../../contexts/DataContext';

export default function EditDealModal({ isOpen, onClose, dealId }) {
  const { DEALS, DEAL_DETAILS, MEMBERS, DIVISIONS, DEAL_ROUTES, COMPANIES, COMPANY_DETAILS, upsertDeal } = useData();

  const deal = DEALS.find(d => d.id === Number(dealId));
  const detail = DEAL_DETAILS[dealId];
  const info = detail?.basicInfo || {};

  const companyOptions = useMemo(() => COMPANIES.map(c => c.name), [COMPANIES]);

  const [name, setName] = useState(deal?.name || '');
  const [status, setStatus] = useState(info.status || '予定');
  const [companyName, setCompanyName] = useState(info.company || '');
  const [divisions, setDivisions] = useState(info.businessDept ? info.businessDept.split('、').filter(Boolean) : []);
  const [dealers, setDealers] = useState(info.ourPerson ? info.ourPerson.split('、').filter(Boolean) : []);
  const [acquirer, setAcquirer] = useState(info.acquiredBy || '');
  const [route, setRoute] = useState(info.channel || '');
  const [departmentName, setDepartmentName] = useState(info.dept || '');
  const [personName, setPersonName] = useState(info.clientPerson || '');

  const { deptOptions, personOptions } = useMemo(() => {
    const matched = COMPANIES.find(c => c.name === companyName);
    if (!matched) return { deptOptions: [], personOptions: [] };
    const cd = COMPANY_DETAILS[matched.id];
    if (!cd) return { deptOptions: [], personOptions: [] };
    const depts = (cd.whitelist || []).map(w => w.dept);
    const persons = (cd.whitelist || []).flatMap(w => (w.contacts || []).map(c => c.name));
    return { deptOptions: [...new Set(depts)], personOptions: [...new Set(persons)] };
  }, [companyName, COMPANIES, COMPANY_DETAILS]);

  const handleSubmit = () => {
    if (!name) return false;
    const matchedCompany = COMPANIES.find(c => c.name === companyName);

    const updatedDeal = {
      ...deal,
      id: Number(dealId),
      companyId: matchedCompany?.id || deal?.companyId || null,
      name,
      company: companyName,
      assignee: dealers.join('、') || acquirer,
      dept: divisions[0] || '',
      status,
    };

    const updatedDetail = {
      ...detail,
      basicInfo: {
        company: companyName,
        dept: departmentName,
        clientPerson: personName,
        ourPerson: dealers.join('、'),
        businessDept: divisions.join('、'),
        channel: route,
        acquiredBy: acquirer,
        status,
      },
      tree: {
        ...detail?.tree,
        current: name,
      },
    };

    upsertDeal(updatedDeal, updatedDetail);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="商談情報編集" onSubmit={handleSubmit} submitLabel="保存">
      <FormField label="商談名" required>
        <FormInput value={name} onChange={(e) => setName(e.target.value)} placeholder="商談名を入力" />
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

      <FormField label="商談獲得者">
        <FormSelect options={MEMBERS} value={acquirer} onChange={(e) => setAcquirer(e.target.value)} />
      </FormField>

      <FormField label="商談経路">
        <FormSelect options={DEAL_ROUTES} value={route} onChange={(e) => setRoute(e.target.value)} />
      </FormField>

      <FormField label="企業名">
        <ComboBox options={companyOptions} value={companyName} onChange={setCompanyName} placeholder="企業名を選択" />
      </FormField>

      <FormField label="先方事業部名">
        <ComboBox options={deptOptions} value={departmentName} onChange={setDepartmentName} placeholder="事業部を選択" />
      </FormField>

      <FormField label="先方担当者">
        <ComboBox options={personOptions} value={personName} onChange={setPersonName} placeholder="人物を選択" />
      </FormField>
    </Modal>
  );
}
