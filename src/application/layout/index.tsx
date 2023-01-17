import {I18n} from 'react-polyglot';
import {useSelector} from 'react-redux';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import {WcsLabelFactory} from '../../infrastructure/i18n/repositories/wcs-label-factory';
import {RootState} from '../../infrastructure/redux/store';
import Home from '../pages/home';
import * as S from './style';

const Layout = () => {
  const locale = useSelector(
    (state: RootState) => state.locale.currentLanguage
  );

  return (
    <S.Content>
      <I18n locale={locale} messages={WcsLabelFactory.make(locale)}>
        <Router>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Redirect from="*" to="/" />
          </Switch>
        </Router>
      </I18n>
    </S.Content>
  );
};

export default Layout;
