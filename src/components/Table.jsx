import React from 'react';

const Table = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto brutalist-card">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-primary-container border-b-2 border-black">
            {columns.map((column, index) => (
              <th
                key={index}
                className={`p-md font-label-bold text-on-primary-container uppercase ${index < columns.length - 1 ? 'border-r-2 border-black' : ''}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="font-body-md">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b-2 border-black last:border-b-0 hover:bg-background transition-colors">
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`p-md ${colIndex < columns.length - 1 ? 'border-r-2 border-black' : ''}`}
                >
                  {column.cell(row)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
