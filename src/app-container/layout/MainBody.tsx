import MainContentApp from './MainContent';
import { MainContentArea } from './MainContent';
import { LeftSideContainer } from './LeftSide';
import LeftSideApp from './LeftSide';
import RightSide from './RightSide';
import { RightSideArea } from './RightSide';

function MainBody() {
  return (
    <div className="flex flex-row">
      <LeftSideApp SideVariant={LeftSideContainer.LEFTCOLUMN}>
        Left Menu Section!
      </LeftSideApp>
      <MainContentApp MainContent={MainContentArea.THREECOLUMN}>
        Main Body Section!
      </MainContentApp>
      <RightSide RightSideArea={RightSideArea.RIGHTCOLUMN}>
        Right Side Section!
      </RightSide>
    </div>
  );
}

export default MainBody;
