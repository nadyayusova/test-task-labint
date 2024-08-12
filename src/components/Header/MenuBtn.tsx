import {forwardRef, DetailedHTMLProps, HTMLAttributes, ForwardedRef} from 'react';
import styles from './MenuBtn.module.scss';
import classNames from 'classnames';

interface MenuBtnProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
  onClick?: () => void;
}

const MenuBtn = forwardRef((props: MenuBtnProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const {className = '', onClick, ...rest} = props;

  return (
    <button
      className={classNames([styles.MenuBtn, className])}
      onClick={onClick}
      ref={ref}
      aria-pressed="false"
      aria-label="Открыть меню"
      {...rest}
    ></button>
  );
});

export {MenuBtn};
