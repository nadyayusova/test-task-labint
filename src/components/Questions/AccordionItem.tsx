import {FC, useRef, useState} from 'react';
import styles from './AccordionItem.module.scss';
import {Plus} from '../Icons/plus';

export interface AccordionItemProps {
  title: string;
  text: string;
}

const AccordionItem: FC<AccordionItemProps> = (props) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const child = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpened((prev) => !prev);
  };

  return (
    <div className={styles.Item}>
      <button
        type="button"
        className={styles.Button}
        onClick={handleClick}
      >
        <h3 className={styles.Title}>{props.title}</h3>
        <span
          className={styles.Icon}
          style={{
            transform: isOpened ? 'translateZ(0) rotate(-45deg)' : undefined,
          }}
        >
          <Plus />
        </span>
      </button>
      <div
        className={styles.Content}
        style={{height: isOpened ? child.current?.offsetHeight || 0 : 0}}
      >
        <div ref={child}>
          <p className={styles.Text}>{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export {AccordionItem};
