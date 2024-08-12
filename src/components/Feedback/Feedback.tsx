import {FC} from 'react';
import styles from './Feedback.module.scss';
import classNames from 'classnames';
import {useForm} from 'react-hook-form';
import {Container} from '../Container/Container';
import {Button} from '../Button/Button';
import {Unchecked} from '../Icons/unchecked';
import {Checked} from '../Icons/checked';
import {Valid} from '../Icons/valid';
import {Invalid} from '../Icons/invalid';

const Feedback: FC = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
    reset,
    watch,
  } = useForm({mode: 'onBlur'});

  const phoneRegex = new RegExp(/^(8|\+7)[\d]{10}$/);

  const watchValues = watch();

  const onSubmit = (data: any) => {
    alert('Форма отправлена с данными: ' + JSON.stringify(data));
    reset();
  };

  return (
    <section className={styles.Feedback}>
      <Container>
        <h2 className={styles.SectionTitle}>Отправь форму</h2>
        <div className={styles.Form}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.Content}>
              <div className={classNames([styles.Element, styles.Input])}>
                <label>
                  <input
                    type="text"
                    data-value={watchValues['userName'] || 0}
                    data-invalid={errors?.userName ? 'true' : undefined}
                    {...register('userName', {required: true})}
                  />
                  <span className={styles.Text}>Имя</span>
                  <span className={styles.Icon}>
                    <Invalid />
                    <Valid />
                  </span>
                </label>
                {errors?.userName && (
                  <p className={styles.Error}>Поле обязательно для заполнения</p>
                )}
              </div>
              <div className={classNames([styles.Element, styles.Input])}>
                <label>
                  <input
                    type="tel"
                    data-value={watchValues['phone'] || 0}
                    data-invalid={errors?.phone ? 'true' : undefined}
                    {...register('phone', {
                      required: 'Поле обязательно для заполнения',
                      pattern: {
                        value: phoneRegex,
                        message: 'Введите +7 и еще 10 цифр',
                      },
                    })}
                  />
                  <span className={styles.Text}>Телефон</span>
                  <span className={styles.Icon}>
                    <Invalid />
                    <Valid />
                  </span>
                </label>
                {errors?.phone && (
                  <p className={styles.Error}>{errors?.phone?.message as string}</p>
                )}
              </div>
              <div className={classNames([styles.Element, styles.Toggle])}>
                <label>
                  <input
                    type="checkbox"
                    data-invalid={errors?.agree ? 'true' : undefined}
                    {...register('agree', {
                      required: true,
                    })}
                  />
                  <span className={styles.IconCheck}>
                    <Unchecked />
                    <Checked />
                  </span>
                  <span className={styles.AgreeText}>Согласен, отказываюсь</span>
                </label>
                {errors?.agree && <p className={styles.Error}>Согласие обязательно</p>}
              </div>
              <div className={classNames([styles.Element, styles.Button])}>
                <Button
                  type="submit"
                  className={styles.Button}
                >
                  Отправить
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export {Feedback};
