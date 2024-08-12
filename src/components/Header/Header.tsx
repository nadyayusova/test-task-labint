import {FC, useEffect, useRef, useState} from 'react';
import styles from './Header.module.scss';
import {Container} from '../Container/Container';
import {Logo} from '../Icons/logo';
import {HeaderNav} from './HeaderNav';
import {MenuBtn} from './MenuBtn';
import useDebounce from '../../hooks/use-debounce';
import {useMediaQuery} from '../../hooks/use-media-query';

const Header: FC = () => {
  const contain = useRef<HTMLDivElement>(null);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const toggleBtn = useRef<HTMLButtonElement>(null);
  const headerMenu = useRef<HTMLDivElement>(null);
  const isDesktop = useMediaQuery('(width >= 1024px)');

  const openMenu = () => {
    setIsMenuOpened(true);
    contain.current?.classList.add(styles.IsOpened);
    headerMenu.current?.classList.add(styles.IsOpened);

    setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 300);

    if (toggleBtn.current) {
      toggleBtn.current.setAttribute('aria-label', 'Закрыть меню');
      toggleBtn.current.setAttribute('aria-pressed', 'true');
    }
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
    contain.current?.classList.remove(styles.IsOpened);
    headerMenu.current?.classList.remove(styles.IsOpened);
    document.body.style.overflow = '';

    if (toggleBtn.current) {
      toggleBtn.current.setAttribute('aria-label', 'Открыть меню');
      toggleBtn.current.setAttribute('aria-pressed', 'false');
    }
  };

  const handleResize: any = useDebounce(() => {
    if (isDesktop && isMenuOpened) {
      closeMenu();
    }
  }, 500);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  const handleToggleClick = () => {
    if (!isMenuOpened) {
      openMenu();
    } else {
      closeMenu();
    }
  };

  const handleKeyDown = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      toggleBtn.current?.click();
    }
  };

  useEffect(() => {
    if (isMenuOpened) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpened]);

  return (
    <header
      className={styles.Header}
      ref={contain}
    >
      <Container className={styles.HeaderContainer}>
        <div className={styles.HeaderLogo}>
          <Logo />
        </div>
        <HeaderNav
          className={styles.HeaderNav}
          ref={headerMenu}
        />
        <MenuBtn
          className={styles.MenuBtn}
          ref={toggleBtn}
          onClick={handleToggleClick}
        />
      </Container>
    </header>
  );
};

export {Header};
