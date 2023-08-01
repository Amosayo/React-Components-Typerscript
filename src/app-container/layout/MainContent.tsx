import { FunctionComponent, ReactNode } from 'react';

enum MainContentArea {
  FULLCOLUMN,
  TWOCOLUMN,
  THREECOLUMN,
}

const CONTENTAREA_MAPS: Record<MainContentArea, string> = {
  [MainContentArea.FULLCOLUMN]: 'bg-[#F2E9E9] w-full ',
  [MainContentArea.TWOCOLUMN]: 'bg-orange-500 w-2/3 ',
  [MainContentArea.THREECOLUMN]: 'bg-[white] w-6/12 ',
};

type MainContentAreaProps = {
  MainContent: MainContentArea;
  children?: ReactNode;
};

const MainContentApp: FunctionComponent<MainContentAreaProps> =
  function MainContent({ MainContent, children }: MainContentAreaProps) {
    const MainContentLayoutClasses =
      'w-full justify-center items-center flex flex-col space-y-4 h-screen md:flex-row md:space-x-4 md:space-y-0';

    const FinalContentClasses = `${MainContentLayoutClasses} ${CONTENTAREA_MAPS[MainContent]}`;

    return <div className={FinalContentClasses}>{children}</div>;
  };

export default MainContentApp;

export { MainContentArea };
