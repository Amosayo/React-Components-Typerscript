import MainContentApp from './MainContent';
import { MainContentArea } from './MainContent';
import Button from '../button/Buttons';
import { ButtonTypes } from '../button/Buttons';

function MainBody() {
  return (
    <div className="flex flex-row">
      <MainContentApp MainContent={MainContentArea.FULLCOLUMN}>
        <div className="flex flex-col space-y-3">
          <p> Common Buttons </p>
          <Button ButtonVariant={ButtonTypes.OUTLINED}>outline Button</Button>
          <Button ButtonVariant={ButtonTypes.ELEVATED}>Elevated Button</Button>
          <Button ButtonVariant={ButtonTypes.FILLED}>Filled Button</Button>
          <Button ButtonVariant={ButtonTypes.FILLEDTONAL}>
            Filled tonal Button
          </Button>
          <Button ButtonVariant={ButtonTypes.TEXT}>Text Button</Button>
        </div>
      </MainContentApp>
    </div>
  );
}

export default MainBody;
