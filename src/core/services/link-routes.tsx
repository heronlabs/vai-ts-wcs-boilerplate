import {AnyAction, Dispatch} from '@reduxjs/toolkit';
import {History} from 'history';

import {goToPage} from '../../infrastructure/redux/slices/menu-slice';
import {MenuNames} from '../enums/menu-names';

export const redirect = (params: {
  history: History;
  dispatch: Dispatch<AnyAction>;
  route: MenuNames;
  queries?: string[];
  withDelay?: boolean;
}) => {
  const {history, dispatch, route, queries, withDelay} = params;

  dispatch(goToPage(route));

  setTimeout(
    () => {
      if (route === MenuNames.INDEX) {
        history.push('/');
      } else {
        if (queries) {
          const routeParams = queries.join('/');

          history.push(`/${route}/${routeParams}`);
        } else {
          history.push(`/${route}`);
        }
      }
    },
    withDelay ? 100 : 0
  );
};
