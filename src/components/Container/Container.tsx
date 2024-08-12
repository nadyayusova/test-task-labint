import {FC, ReactNode} from 'react';
import classNames from 'classnames';
import styles from './Container.module.scss';

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({className, children}) => {
  return <div className={classNames([className, styles.Container])}>{children}</div>;
};

export {Container};
