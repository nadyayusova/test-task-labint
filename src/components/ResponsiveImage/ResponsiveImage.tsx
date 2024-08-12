import {FC} from 'react';
import styles from './ResponsiveImage.module.scss';
import classNames from 'classnames';

export interface ResponsiveImageProps {
  url: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  ariaHidden?: boolean;
}

const ResponsiveImage: FC<ResponsiveImageProps> = ({
  url,
  width,
  height,
  alt = '',
  className = '',
  ariaHidden,
}) => {
  return (
    <div className={classNames([styles.ResponsiveImageWrapper, className])}>
      <picture>
        <source
          type="image/webp"
          media="(max-width: 1023px)"
          srcSet={`/images/${url}-mobile.webp, /images/${url}-mobile@2x.webp 2x`}
        />
        <source
          media="(max-width: 1023px)"
          srcSet={`/images/${url}-mobile.jpg, /images/${url}-mobile@2x.jpg 2x`}
        />
        <source
          type="image/webp"
          srcSet={`/images/${url}.webp, /images/${url}@2x.webp 2x`}
        />
        <img
          loading="lazy"
          src={`/images/${url}.jpg`}
          srcSet={`/images/${url}@2x.jpg`}
          width={width}
          height={height}
          alt={ariaHidden ? undefined : alt}
          aria-hidden={ariaHidden}
        />
      </picture>
    </div>
  );
};

export {ResponsiveImage};
