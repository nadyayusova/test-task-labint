import {FC} from 'react';
import styles from './Work.module.scss';
import {Container} from '../Container/Container';
import {Waiting} from '../Icons/waiting';
import {DeliveryTruck} from '../Icons/delivery-truck';
import {Secure} from '../Icons/secure';
import {MoneyBags} from '../Icons/money-bags';

const Work: FC = () => {
  return (
    <section className={styles.Work}>
      <Container>
        <h2 className={styles.SectionTitle}>Как это работает</h2>
        <ul className={styles.List}>
          <li className={styles.Item}>
            <div className={styles.IconWrapper}>
              <Waiting />
            </div>
            <h3 className={styles.Title}>Прочитай задание внимательно</h3>
            <p className={styles.Text}>
              Думаю у&nbsp;тебя не&nbsp;займет это больше двух-трех минут
            </p>
          </li>
          <li className={styles.Item}>
            <div className={styles.IconWrapper}>
              <DeliveryTruck />
            </div>
            <h3 className={styles.Title}>Изучи весь макет заранее</h3>
            <p className={styles.Text}>
              Подумай как это будет работать на&nbsp;разных разрешениях и&nbsp;при скролле
            </p>
          </li>
          <li className={styles.Item}>
            <div className={styles.IconWrapper}>
              <Secure />
            </div>
            <h3 className={styles.Title}>Сделай хорошо</h3>
            <p className={styles.Text}>
              Чтобы мы&nbsp;могли тебе доверить подобные задачи в&nbsp;будущем
            </p>
          </li>
          <li className={styles.Item}>
            <div className={styles.IconWrapper}>
              <MoneyBags />
            </div>
            <h3 className={styles.Title}>Получи предложение</h3>
            <p className={styles.Text}>
              Ну&nbsp;тут все просто, не&nbsp;я&nbsp;придумал правила, но&nbsp;думаю так
              и&nbsp;будет)))
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export {Work};
