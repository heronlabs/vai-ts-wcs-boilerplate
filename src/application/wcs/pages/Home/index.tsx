import './style.scss';

import {translate} from 'react-polyglot';

const Home = () => {
  return (
    <div className="home">
      <div className="App">
        <header className="App-header">
          <p>my-project</p>
        </header>
      </div>
    </div>
  );
};

export default translate()(Home);
