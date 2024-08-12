import {FC} from 'react';
import styles from './MenuLink.module.scss';
import classNames from 'classnames';

interface MenuLinkProps {
  href?: string;
  className?: string;
  isExternal?: boolean;
  children?: React.ReactNode;
}

const MenuLink: FC<MenuLinkProps> = ({
  href = '#',
  className = '',
  isExternal = false,
  children,
}) => {
  const target = isExternal ? '_blank' : undefined;
  const rel = isExternal ? 'noopener, nofollow, noreferrer' : undefined;

  return (
    <a
      className={classNames([styles.MenuLink, className])}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export {MenuLink};
