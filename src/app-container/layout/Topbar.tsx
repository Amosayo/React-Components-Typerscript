import { FunctionComponent, ReactNode } from 'react';

enum TopBar {
  REGULAR,
  EXTENDED,
}

const TopAppBar_MAPS: Record<TopBar, string> = {
  [TopBar.REGULAR]:
    'flex items-center flex-wrap bg-[white] text-[black] shadow-[rgba(65,_105,_225,_0.25)_0px_4px_4px_0px]',
  [TopBar.EXTENDED]:
    'flex items-center justify-between flex-wrap bg-teal-500 h-screen',
};

type TopAppProps = {
  variant: TopBar;
  children?: ReactNode;
};

const TopAppBar: FunctionComponent<TopAppProps> = function TopBar({
  variant,
  children,
}: TopAppProps) {
  const TopBarLayout = 'justify-center';
  const FinalTopBarClasses = `${TopBarLayout} ${TopAppBar_MAPS[variant]} `;

  return <nav className={FinalTopBarClasses}>{children}</nav>;
};

export default TopAppBar;

export { TopBar };
