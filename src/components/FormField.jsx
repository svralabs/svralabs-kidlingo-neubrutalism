import React from 'react';

export default function FormField({ label, id, type = 'text', placeholder, value, onChange, error, rows }) {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';

  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-bold text-label-bold text-on-surface-variant uppercase" htmlFor={id}>
        {label}
      </label>
      <InputComponent
        className={`bg-surface border-2 border-on-background p-4 rounded-lg neubrutalist-shadow-sm transition-all focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none ${error ? 'border-error' : ''}`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
      {error && <p className="text-error text-sm">{error}</p>}
    </div>
  );
}
