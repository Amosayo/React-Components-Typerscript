import { FunctionComponent, ReactNode } from 'react';

enum LeftSideContainer {
  LEFTCOLUMN,
}

const SIDEVARIANT_MAPS: Record<LeftSideContainer, string> = {
  [LeftSideContainer.LEFTCOLUMN]: 'bg-green-500 flex flex-col w-1/3 h-screen',
};

type SideVariantProps = {
  SideVariant: LeftSideContainer;
  children?: ReactNode;
};

const LeftSideApp: FunctionComponent<SideVariantProps> = function MainBody({
  SideVariant,
  children,
}: SideVariantProps) {
  const SideBarLayoutClasses =
    'bg-white flex flex-col justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0';

  const FinalLeftSideClasses = `${SideBarLayoutClasses} ${SIDEVARIANT_MAPS[SideVariant]}`;

  return <div className={FinalLeftSideClasses}>{children}</div>;
};

export default LeftSideApp;

export { LeftSideContainer };
