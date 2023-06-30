import TopAppBar from './app-container/layout/Topbar';
import { TopBar } from './app-container/layout/Topbar';
import FooterAppBar from './app-container/layout/Footer';
import { FooterBar } from './app-container/layout/Footer';
import MainBody from './app-container/layout/MainBody';
function App() {
  return (
    <div>
      <TopAppBar variant={TopBar.REGULAR}>Header top Section</TopAppBar>
      <MainBody />
      <FooterAppBar variant={FooterBar.REGULAR}>Footer Section</FooterAppBar>
    </div>
  );
}

export default App;
