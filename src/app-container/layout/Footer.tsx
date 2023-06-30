import { FunctionComponent, ReactNode } from 'react';

enum FooterBar {
  REGULAR,
  EXTENDED,
}

const FooterAppBar_MAPS: Record<FooterBar, string> = {
  [FooterBar.REGULAR]:
    'flex items-center justify-between flex-wrap h-14 px-6 bg-teal-500',
  [FooterBar.EXTENDED]: 'flex items-center justify-between flex-wrap h-full',
};

type FooterAppProps = {
  variant: FooterBar;
  children?: ReactNode;
};

const FooterAppBar: FunctionComponent<FooterAppProps> = function TopBar({
  variant,
  children,
}: FooterAppProps) {
  //const TopBarLayout = 'max-auto max-w-7xl px-3';
  const FinalFooterBarClasses = ` ${FooterAppBar_MAPS[variant]} `;

  return <nav className={FinalFooterBarClasses}>{children}</nav>;
};

export default FooterAppBar;

export { FooterBar };
