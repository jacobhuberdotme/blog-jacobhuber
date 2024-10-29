// src/components/custom-table.tsx
import React from 'react';

interface CustomTableProps {
  children: React.ReactNode;
}

export function CustomTable({ children }: CustomTableProps) {
  return (
    <table className="w-full border-collapse">
      <tbody>{children}</tbody>
    </table>
  );
}

interface TableRowProps {
  children: React.ReactNode;
}

export function TableRow({ children }: TableRowProps) {
  return <tr className="border-b border-gray-700">{children}</tr>;
}

interface TableCellProps {
  firstColumn?: boolean;
  children: React.ReactNode;
}

export function TableCell({ firstColumn = false, children }: TableCellProps) {
  return (
    <td className={`p-4 ${firstColumn ? 'pl-6 pr-4' : 'px-4'} text-gray-200`}>
      {children}
    </td>
  );
}