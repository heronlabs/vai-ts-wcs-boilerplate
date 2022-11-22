import './style.scss';

import {translate} from 'react-polyglot';

import * as S from './style';

const Home = () => {
  return (
    <div className="home">
      <S.ProjectName>my-project</S.ProjectName>
    </div>
  );
};

export default translate()(Home);
