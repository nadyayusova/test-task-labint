import {DetailedHTMLProps, ForwardedRef, forwardRef, HTMLAttributes} from 'react';
import styles from './HeaderNav.module.scss';
import classNames from 'classnames';
import {MenuLink} from './MenuLink';
import {SwiperArrow} from '../Icons/swiper-arrow';

const headerLinks = [
  {
    text: 'Как это работает',
    href: '#work',
  },
  {
    text: '3-й блок',
    href: '#third',
  },
  {
    text: 'Вопросы и ответы',
    href: '#questions',
  },
  {
    text: 'Форма',
    href: '#feedback',
  },
];

interface HeaderNavProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
}

const HeaderNav = forwardRef((props: HeaderNavProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {className = '', ...rest} = props;

  return (
    <nav
      ref={ref}
      className={classNames([styles.HeaderNav, className])}
      {...rest}
    >
      <ul className={styles.NavList}>
        {headerLinks.map((item) => {
          return (
            <li
              key={item.href}
              className={styles.Item}
            >
              <MenuLink href={item.href}>
                <span>{item.text}</span>
                <SwiperArrow />
              </MenuLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
});

export {HeaderNav};
