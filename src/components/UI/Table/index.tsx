import { UITableBodyRow, UITableProps } from './types';
import './style.scss';

export function UITable(props: UITableProps) {
  const head = () => {
    const tds = props.head.map((headCell) => (
      <td key={headCell.key}>{headCell.text}</td>
    ));

    return <tr>{tds}</tr>;
  };

  const bodyCells = (cells: UITableBodyRow['cells'], rowIndex: number) =>
    props.head.map((headCell) => {
      const cell = cells[headCell.key];
      return (
        <td
          key={`body-row-${rowIndex}-cell-${headCell.key}`}
          style={cell.cellStyle}
        >
          {cell.text || cell.children || '-'}
        </td>
      );
    });

  const body = () => {
    if (!props.body) return <></>;

    return props.body.rows.map((row, i) => (
      <tr key={`body-row-${i}`}>{bodyCells(row.cells, i)}</tr>
    ));
  };

  return (
    <div className="UITable">
      <table>
        <thead>{head()}</thead>
        <tbody>{body()}</tbody>
      </table>
    </div>
  );
}
