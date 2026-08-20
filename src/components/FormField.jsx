import { useState } from 'react';

export default function FormField({ label, id, type = 'text', placeholder, value, onChange, error, rows }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const inputClasses = `bg-surface border-2 border-on-background p-4 rounded-lg neubrutalist-shadow-sm transition-all ${isFocused ? 'translate-x-[1px] translate-y-[1px] shadow-none' : ''}`;

  return (
    <div className="flex flex-col gap-2">
      <label className="font-label-bold text-label-bold text-on-surface-variant uppercase" htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={rows}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={inputClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      )}
      {error && <p className="text-error text-sm mt-1">{error}</p>}
    </div>
  );
}
