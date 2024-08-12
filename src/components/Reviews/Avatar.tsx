import {FC} from 'react';
import styles from './Avatar.module.scss';
import classNames from 'classnames';

export interface AvatarProps {
  url: string;
  width: number;
  height: number;
  alt?: string;
  className?: string;
  ariaHidden?: boolean;
}

const Avatar: FC<AvatarProps> = ({url, width, height, alt = '', className = '', ariaHidden}) => {
  return (
    <div className={classNames([styles.AvatarWrapper, className])}>
      <picture>
        <source
          type="image/webp"
          srcSet={`images/${url}.webp, images/${url}@2x.webp 2x`}
        />
        <img
          loading="lazy"
          src={`images/${url}.jpg`}
          srcSet={`images/${url}@2x.jpg`}
          width={width}
          height={height}
          alt={ariaHidden ? undefined : alt}
          aria-hidden={ariaHidden}
        />
      </picture>
    </div>
  );
};

export {Avatar};
