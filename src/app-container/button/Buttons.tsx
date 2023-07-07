import { FunctionComponent, ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

enum ButtonTypes {
  TEXT,
  OUTLINED,
  FILLED,
  FILLEDTONAL,
  ELEVATED,
}

const ButtonComponent_MAPS: Record<ButtonTypes, string> = {
  [ButtonTypes.TEXT]: 'text-[#5C1349] px-4',
  [ButtonTypes.OUTLINED]: 'border-[#5C1349] border text-[#5C1349]',
  [ButtonTypes.FILLED]: 'bg-[#5C1349] text-[#FFFFFF] px-2',
  [ButtonTypes.FILLEDTONAL]: 'bg-[#C5B6C5] text-[#FFFFFF] px-4 ',
  [ButtonTypes.ELEVATED]: 'bg-[#5C1349] shadow-xl text-[#FFFFFF] px-2',
};

type ButtonsProps = {
  ButtonVariant: ButtonTypes;
  children?: ReactNode;
};

const Button: FunctionComponent<ButtonsProps> = function Buttons({
  ButtonVariant,
  children,
}: ButtonsProps) {
  const ButtonDesignLayout =
    'font-[Raleway] text-center text-base font-medium uppercase align-middle rounded py-2';
  const Icon = 'pr-2';
  const FinalButtonClasses = `${ButtonDesignLayout} ${ButtonComponent_MAPS[ButtonVariant]} `;

  return (
    <button type="button" className={FinalButtonClasses}>
      <FontAwesomeIcon icon={['fas', 'user']} className={Icon} /> {children}
    </button>
  );
};

export default Button;

export { ButtonTypes };

library.add(fab, fas, far, faUser);
