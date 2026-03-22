import { useEffect, useState, useRef } from 'react';
import { X, ChevronDown } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, submitLabel = '登録', onSubmit, submitColor = 'bg-accent' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (onSubmit) onSubmit();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-xl mx-4 max-h-[85vh] flex flex-col animate-modal-in">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {children}
        </div>
        <div className="flex justify-end gap-3 p-5 border-t">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            キャンセル
          </button>
          <button onClick={handleSubmit} className={`px-4 py-2 text-sm font-medium text-white ${submitColor} rounded-lg hover:opacity-90 transition-colors`}>
            {submitLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export function FormField({ label, required, children }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

export function FormInput({ ...props }) {
  return <input {...props} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />;
}

export function FormTextarea({ ...props }) {
  return <textarea {...props} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent" />;
}

export function FormSelect({ options, ...props }) {
  return (
    <select {...props} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent bg-white">
      <option value="">選択してください</option>
      {options.map(o => <option key={o} value={o}>{o}</option>)}
    </select>
  );
}

export function ToggleGroup({ options, value, onChange }) {
  return (
    <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`flex-1 px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${value === opt ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export function ChipSelect({ options, selected, onChange, allowCustom = false }) {
  const [customInput, setCustomInput] = useState('');
  const toggle = (opt) => {
    if (selected.includes(opt)) {
      onChange(selected.filter(s => s !== opt));
    } else {
      onChange([...selected, opt]);
    }
  };
  const addCustom = () => {
    const trimmed = customInput.trim();
    if (trimmed && !selected.includes(trimmed)) {
      onChange([...selected, trimmed]);
    }
    setCustomInput('');
  };
  // Show all options + any selected values that aren't in options (custom values)
  const allOptions = [...options, ...selected.filter(s => !options.includes(s))];
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {allOptions.map(opt => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`px-3 py-1.5 text-sm rounded-full border transition-colors ${selected.includes(opt) ? 'bg-accent text-white border-accent' : 'bg-white text-gray-600 border-gray-300 hover:border-accent'}`}
          >
            {opt}
          </button>
        ))}
      </div>
      {allowCustom && (
        <div className="flex items-center gap-2 mt-2">
          <input
            className="flex-1 px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
            value={customInput}
            onChange={e => setCustomInput(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addCustom(); } }}
            placeholder="新しい項目を入力"
          />
          <button
            type="button"
            onClick={addCustom}
            className="px-3 py-1.5 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent/5 transition-colors"
          >
            追加
          </button>
        </div>
      )}
    </div>
  );
}

export function ComboBox({ options, value, onChange, placeholder = '選択または入力' }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const filtered = options.filter(o => o.toLowerCase().includes(query.toLowerCase()));
  const showNew = query && !options.some(o => o === query);

  return (
    <div ref={ref} className="relative">
      <div
        className="w-full flex items-center px-3 py-2 border border-gray-300 rounded-lg text-sm focus-within:ring-2 focus-within:ring-accent/50 focus-within:border-accent cursor-text"
        onClick={() => setOpen(true)}
      >
        <input
          className="flex-1 outline-none bg-transparent"
          value={open ? query : value}
          placeholder={value || placeholder}
          onChange={(e) => { setQuery(e.target.value); if (!open) setOpen(true); }}
          onFocus={() => { setOpen(true); setQuery(value || ''); }}
        />
        <ChevronDown className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </div>
      {open && (
        <div className="absolute z-50 mt-1 w-full max-h-48 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
          {filtered.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`w-full text-left px-3 py-2 text-sm hover:bg-blue-50 transition-colors ${opt === value ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700'}`}
              onClick={() => { onChange(opt); setQuery(''); setOpen(false); }}
            >
              {opt}
            </button>
          ))}
          {showNew && (
            <button
              type="button"
              className="w-full text-left px-3 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 border-t border-gray-100"
              onClick={() => { onChange(query); setQuery(''); setOpen(false); }}
            >
              + 「{query}」を新規追加
            </button>
          )}
          {filtered.length === 0 && !showNew && (
            <div className="px-3 py-2 text-sm text-gray-400">候補がありません</div>
          )}
        </div>
      )}
    </div>
  );
}

export function ConfirmDialog({ isOpen, onClose, onConfirm, title = '削除確認', message }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-sm mx-4 animate-modal-in">
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={20} className="text-gray-500" />
          </button>
        </div>
        <div className="p-5">
          <p className="text-sm text-gray-700">{message}</p>
        </div>
        <div className="flex justify-end gap-3 p-5 border-t">
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            キャンセル
          </button>
          <button onClick={() => { onConfirm(); onClose(); }} className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
            削除
          </button>
        </div>
      </div>
    </div>
  );
}

export function NoteBox({ children, color = 'blue' }) {
  const colors = {
    blue: 'bg-blue-50 border-blue-200 text-blue-700',
    green: 'bg-green-50 border-green-200 text-green-700',
    orange: 'bg-orange-50 border-orange-200 text-orange-700',
  };
  return (
    <div className={`p-3 rounded-lg border text-sm ${colors[color]}`}>
      {children}
    </div>
  );
}
