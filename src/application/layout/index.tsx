import {I18n} from 'react-polyglot';
import {useSelector} from 'react-redux';

import {WcsLabelFactory} from '../../infrastructure/i18n/repositories/wcs-label-factory';
import {RootState} from '../../infrastructure/redux/store';
import Home from '../pages/Home';
import * as S from './style';

function Layout() {
  const locale = useSelector(
    (state: RootState) => state.locale.currentLanguage
  );

  return (
    <S.Content>
      <I18n locale={locale} messages={WcsLabelFactory.make(locale)}>
        <Home />
      </I18n>
    </S.Content>
  );
}

export default Layout;
