import { FunctionComponent, ReactNode } from 'react';

enum Columns {
  ONECOLUMN,
  TWOCOLUMNS,
  THREECOLUMNS,
  FOURCOLUMNS,
  FIVECOLUMNS,
}

const COLUMNS_MAPS: Record<Columns, string> = {
  [Columns.ONECOLUMN]: 'bg-[#F2E9E9] columns-1',
  [Columns.TWOCOLUMNS]: 'bg-orange-500 columns-2',
  [Columns.THREECOLUMNS]: 'columns-3 space-x-2 mx-2',
  [Columns.FOURCOLUMNS]: 'bg-[white] columns-4',
  [Columns.FIVECOLUMNS]: 'bg-[white] columns-5',
};

type ColumnSelectionProps = {
  Column: Columns;
  children?: ReactNode;
};

const ColumnSelection: FunctionComponent<ColumnSelectionProps> =
  function ColumnArea({ Column, children }: ColumnSelectionProps) {
    //const MainContentLayoutClasses ='';

    const FinalColumnClasses = `${COLUMNS_MAPS[Column]}`;

    return <div className={FinalColumnClasses}>{children}</div>;
  };

export default ColumnSelection;

export { Columns };
