import BlogSelections from '../app-container/cards/BlogSelections';
import AboutSelection from '../app-container/cards/AboutSelection';
import HeroSelection from '../app-container/heroSelection/HeroSelection';

function HomePages() {
  return (
    <div>
      <HeroSelection />
      <AboutSelection />
      <BlogSelections />
    </div>
  );
}

export default HomePages;
