import React from 'react';

export default function Table({
  columns,
  data,
  striped = true,
  hover = true,
  className = '',
  ...props
}) {
  return (
    <div className={`overflow-x-auto ${className}`} {...props}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary-container text-on-primary-container">
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-lg py-sm text-left font-label-bold text-label-bold uppercase tracking-tight border-b-2 border-black"
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`${striped && index % 2 === 0 ? 'bg-surface' : 'bg-surface-variant'} ${
                hover ? 'hover:bg-primary-container/10' : ''
              }`}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className="px-lg py-sm border-b border-black"
                >
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
