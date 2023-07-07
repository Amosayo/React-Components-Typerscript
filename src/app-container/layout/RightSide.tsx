import { FunctionComponent, ReactNode } from 'react';

enum RightSideArea {
  RIGHTCOLUMN,
}

const RIGHTSIDEAREA_MAPS: Record<RightSideArea, string> = {
  [RightSideArea.RIGHTCOLUMN]: 'bg-[green] flex flex-col w-1/3 h-screen',
};

type RightSideAreaProps = {
  RightSideArea: RightSideArea;
  children?: ReactNode;
};

const RightSide: FunctionComponent<RightSideAreaProps> = function MainBody({
  RightSideArea,
  children,
}: RightSideAreaProps) {
  const SideBarLayoutClasses =
    'bg-white flex flex-col justify-center space-y-4 md:flex-row md:space-x-4 md:space-y-0';

  const FinalRightSideClasses = `${SideBarLayoutClasses} ${RIGHTSIDEAREA_MAPS[RightSideArea]}`;

  return <div className={FinalRightSideClasses}>{children}</div>;
};

export default RightSide;

//RightSide.RightSideArea =
export { RightSideArea };
