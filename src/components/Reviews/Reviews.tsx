import {FC} from 'react';
import styles from './Reviews.module.scss';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import {swiperOptions} from './swiper-options';
import {reviewsData} from './reviews-data';
import {Container} from '../Container/Container';
import {SwiperArrow} from '../Icons/swiper-arrow';
import {Avatar} from './Avatar';

const Reviews: FC = () => {
  return (
    <section className={styles.Reviews}>
      <Container>
        <h2 className={styles.SectionTitle}>Отзывы</h2>
        <div className={styles.ReviewsCarousel}>
          <Swiper {...swiperOptions}>
            {reviewsData.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  {/* <div className=""> */}
                  <div className={styles.Header}>
                    <Avatar
                      url={item.image}
                      width={44}
                      height={44}
                      alt="Мультяшный водитель на фоне грузовика"
                      className={styles.Avatar}
                    />
                    <h3 className={styles.Title}>{item.name}</h3>
                    <p className={styles.City}>{item.city}</p>
                  </div>
                  <p className={styles.Text}>{item.text}</p>
                  {/* </div> */}
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div data-reviews-navigation>
            <div
              className="swiper-button-prev"
              data-reviews-arrow
              data-reviews-arrow-left
            >
              <SwiperArrow />
            </div>
            <div
              className="swiper-button-next"
              data-reviews-arrow
              data-reviews-arrow-right
            >
              <SwiperArrow />
            </div>
          </div>
          <div data-reviews-pagination></div>
        </div>
      </Container>
    </section>
  );
};

export {Reviews};
