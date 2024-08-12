import {FC} from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  theme?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  disabled = undefined,
  className = '',
  theme = 'blue',
  onClick,
}) => {
  const btnTheme = theme === 'blue' ? styles.Blue : styles.Gray;

  return (
    <button
      className={classNames([styles.Button, className, btnTheme])}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export {Button};
