"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/ui/data-table-column-header"; // Replace with the correct path

// Define the interface for the data structure
export interface EventRow {
  date: string;
  time: string;
  experienceTitle: string;
  team: string;
  memberName: string;
  memberScore: number;
}

// Define the columns for the table
export const eventColumns: ColumnDef<EventRow>[] = [
    {
        accessorKey: "memberScore",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Score" />
        ),
        cell: ({ getValue }) => <span>{getValue<number>()}</span>,
    },
    {
    accessorKey: "memberName",
    header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Member Name" />
    ),
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
    },
  {
    accessorKey: "team",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Team" />
    ),
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  },
  {
    accessorKey: "time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
    cell: ({ getValue }) => <span>{getValue<string>()}</span>,
  }
];