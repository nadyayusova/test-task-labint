import {FC} from 'react';
import styles from './Intro.module.scss';
import {ResponsiveImage} from '../ResponsiveImage/ResponsiveImage';
import {Container} from '../Container/Container';
import {Button} from '../Button/Button';

const Intro: FC = () => {
  return (
    <div className={styles.Intro}>
      <ResponsiveImage
        url="intro"
        width={1920}
        height={960}
        ariaHidden={true}
        className={styles.IntroBg}
      />
      <div className={styles.BgOverlay}></div>
      <Container className={styles.IntroContainer}>
        <div className={styles.IntroWrapper}>
          <p className={styles.Title}>Говорят, никогда не&nbsp;поздно сменить профессию</p>
          <p className={styles.Subtitle}>
            Сделай круто тестовое задание и&nbsp;у&nbsp;тебя получится
          </p>
          <Button theme="gray">Проще простого!</Button>
        </div>
      </Container>
    </div>
  );
};

export {Intro};
