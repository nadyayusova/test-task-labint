import {FC} from 'react';
import {Intro} from '../Intro/Intro';
import {Work} from '../Work/Work';
import {Third} from '../Third/Third';
import {Reviews} from '../Reviews/Reviews';
import {Questions} from '../Questions/Questions';
import {Notes} from '../Notes/Notes';
import {Feedback} from '../Feedback/Feedback';

const Main: FC = () => {
  return (
    <main>
      <h1 className="visually-hidden">Тестовое задание компании Лаборатория Интернет</h1>
      <Intro />
      <Work />
      <Third />
      <Reviews />
      <Questions />
      <Notes />
      <Feedback />
    </main>
  );
};

export {Main};
