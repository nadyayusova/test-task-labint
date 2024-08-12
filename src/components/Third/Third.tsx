import {FC} from 'react';
import styles from './Third.module.scss';
import {Container} from '../Container/Container';
import {ResponsiveImage} from '../ResponsiveImage/ResponsiveImage';

const Third: FC = () => {
  return (
    <section className={styles.Third}>
      <Container className={styles.ThirdContainer}>
        <div className={styles.TextBlock}>
          <h2 className={styles.SectionTitle}>Круто, ты&nbsp;дошел до&nbsp;третьего блока</h2>
          <p className={styles.Text}>
            63% опрошенных пользовались кредитами из-за того, что не&nbsp;могли покрыть
            непредвиденные расходы свыше 15&nbsp;000&nbsp;₽.
          </p>
          <p className={styles.Text}>
            Доступ к&nbsp;заработанным деньгам помогает отказаться от&nbsp;кредитов и&nbsp;экономить
            деньги на&nbsp;процентах и&nbsp;штрафах.
          </p>
        </div>
        <ResponsiveImage
          url="driver"
          width={952}
          height={448}
          alt="Мультяшный водитель на фоне грузовика"
          className={styles.IntroBg}
        />
      </Container>
    </section>
  );
};

export {Third};
