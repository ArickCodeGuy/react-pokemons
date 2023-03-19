import { ReactNode } from 'react';

export type UITableHeadItem = {
  key: string;
  text: string;
};

export type UITableHead = UITableHeadItem[];

export type UITableBodyCell = {
  text?: string;
  children?: ReactNode;
  cellStyle?: React.CSSProperties;
};

export type UITableBodyRow = {
  cells: Record<string, UITableBodyCell>;
};

export type UITableBody = {
  rows: UITableBodyRow[];
};

export type UITableProps = {
  head: UITableHead;
  body?: UITableBody;
};
