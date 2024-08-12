import {FC} from 'react';
import styles from './Footer.module.scss';
import {Container} from '../Container/Container';

const Footer: FC = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <p className={styles.Text}>© 2021 Лаборатория интернет</p>
      </Container>
    </footer>
  );
};

export {Footer};
