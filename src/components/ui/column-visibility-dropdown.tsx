"use client";

import { Table } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ColumnVisibilityDropdownProps<TData> {
  table: Table<TData>;
}

export function ColumnVisibilityDropdown<TData>({
  table,
}: ColumnVisibilityDropdownProps<TData>) {
  const allColumns = table.getAllColumns();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Manage Columns</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {allColumns.map((column) => (
          <DropdownMenuItem
            key={column.id}
            onClick={() => column.toggleVisibility(!column.getIsVisible())}
          >
            <input
              type="checkbox"
              checked={column.getIsVisible()}
              readOnly
              className="mr-2"
            />
            {column.id}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}