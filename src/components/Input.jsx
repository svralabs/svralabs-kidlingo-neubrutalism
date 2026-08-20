import React from 'react';

export default function Input({
  type = 'text',
  label,
  placeholder,
  value,
  onChange,
  className = '',
  ...props
}) {
  const baseClasses = 'w-full px-lg py-sm border-2 border-black rounded-lg bg-surface text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent';

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label className="mb-xs font-label-bold text-label-bold text-on-surface">
          {label}
        </label>
      )}
      {type === 'textarea' ? (
        <textarea
          className={baseClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      ) : type === 'select' ? (
        <select
          className={baseClasses}
          value={value}
          onChange={onChange}
          {...props}
        >
          {props.options && props.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          className={baseClasses}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
}
