import {translate, useTranslate} from 'react-polyglot';

import * as S from './style';

const Home = () => {
  const t = useTranslate();

  return (
    <S.Home>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <S.ProjectName>{t('welcome.title')}</S.ProjectName>
    </S.Home>
  );
};

export default translate()(Home);
