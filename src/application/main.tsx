import {I18n} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {I18nFactory} from '../infrastructure/i18n/factories/i18n-factory';
import {RootState} from '../infrastructure/redux/store';
import Home from './wcs/pages/Home';

function Main() {
  const locale = useSelector(
    (state: RootState) => state.locale.currentLanguage
  );

  return (
    <div className="content">
      <I18n locale={locale} messages={I18nFactory.make(locale)}>
        <Home />
      </I18n>
    </div>
  );
}

export default Main;
