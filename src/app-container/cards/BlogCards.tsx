import { FunctionComponent } from 'react';
import Button from '../button/Buttons';
import { ButtonTypes } from '../button/Buttons';
//import { height } from '@fortawesome/free-solid-svg-icons/faUser';

enum CardTypes {
  ELEVATED,
  FILLED,
  OUTLINE,
}

const CardsComponent_MAPS: Record<CardTypes, string> = {
  [CardTypes.ELEVATED]: 'text-[#5C1349] px-4',
  [CardTypes.OUTLINE]: 'outline outline-2',
  [CardTypes.FILLED]: '',
};

type CardProps = {
  Title: string;
  Description: string;
  image: unknown;
  imageAlt: string;
};

const BlogsCard: FunctionComponent<CardProps> = function blogscard({
  Title,
  Description,
  image,
  imageAlt,
}: CardProps) {
  return (
    <div className="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <img src={image} alt={imageAlt} />
      </div>
      <div className="px-5 py-4">
        <h2 className="text-2xl mb-2">{Title}</h2>
        <p className="text-sm mb-4 text-justify">{Description}</p>
        <div>
          <Button ButtonVariant={ButtonTypes.FILLED}>Filled Button</Button>
        </div>
      </div>
    </div>
  );
};
export default BlogsCard;
