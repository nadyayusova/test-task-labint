import {FC} from 'react';
import styles from './Questions.module.scss';
import {Container} from '../Container/Container';
import {questionsData} from './questions-data';
import {AccordionItem} from './AccordionItem';

const Questions: FC = () => {
  return (
    <section className={styles.Questions}>
      <Container>
        <h2 className={styles.SectionTitle}>Вопросы и ответы</h2>
        <div className={styles.Accordion}>
          {questionsData.map((item) => {
            return (
              <AccordionItem
                key={item.id}
                title={item.question}
                text={item.answer}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export {Questions};
