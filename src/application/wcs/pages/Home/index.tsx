import './style.scss';

import {translate} from 'react-polyglot';

import * as S from './style';

const Home = () => {
  return (
    <div className="home">
      <div className="App">
        <header className="App-header">
          <S.ProjectName>my-project</S.ProjectName>
        </header>
      </div>
    </div>
  );
};

export default translate()(Home);
