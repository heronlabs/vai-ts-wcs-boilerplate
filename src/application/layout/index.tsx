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
import Loader from '../components/loader';
import Home from '../pages/home';

const Layout = () => {
  const locale = useSelector(
    (state: RootState) => state.locale.currentLanguage
  );

  return (
    <I18n locale={locale} messages={WcsLabelFactory.make(locale)}>
      <Router>
        <Loader>
          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Redirect from="*" to="/" />
          </Switch>
        </Loader>
      </Router>
    </I18n>
  );
};

export default Layout;
