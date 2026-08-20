import React from 'react';
import styles from './Table.module.css';

const Table = ({ columns, data, striped = false }) => {
  const tableClasses = [
    styles.table,
    striped ? styles.striped : '',
  ].join(' ');

  return (
    <div className={styles.tableContainer}>
      <table className={tableClasses}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={styles.th}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className={styles.tr}>
              {columns.map((column, colIndex) => (
                <td key={colIndex} className={styles.td}>
                  {row[column.accessor]}
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
