import { FunctionComponent, ReactNode } from 'react';

enum TopBar {
  REGULAR,
  EXTENDED,
}

const TopAppBar_MAPS: Record<TopBar, string> = {
  [TopBar.REGULAR]: 'flex items-center flex-wrap h-14 px-6 bg-[teal] text-[white]',
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
