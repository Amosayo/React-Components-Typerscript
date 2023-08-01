import { FunctionComponent, ReactNode } from 'react';

enum Rows {
  ONEROW,
  ROWCOLUMNS,
}

const ROWS_MAPS: Record<Rows, string> = {
  [Rows.ONEROW]: 'flex flex-row',
  [Rows.ROWCOLUMNS]: 'flex flex-col space',
};

type RowSelectionProps = {
  Row: Rows;
  children?: ReactNode;
};

const RowSelection: FunctionComponent<RowSelectionProps> = function RowArea({
  Row,
  children,
}: RowSelectionProps) {
  //const MainContentLayoutClasses ='';

  const FinalRowClasses = `${ROWS_MAPS[Row]}`;

  return <div className={FinalRowClasses}>{children}</div>;
};

export default RowSelection;

export { Rows };
