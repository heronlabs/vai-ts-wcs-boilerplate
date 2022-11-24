import './style.scss';

import {translate, useTranslate} from 'react-polyglot';

import * as S from './style';

const Home = () => {
  const t = useTranslate();

  return (
    <div className="home">
      <S.ProjectName>{t('welcome.title')}</S.ProjectName>
    </div>
  );
};

export default translate()(Home);
