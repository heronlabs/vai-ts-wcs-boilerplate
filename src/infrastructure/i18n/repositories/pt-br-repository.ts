import {I18n} from '../interfaces/i18n';
import {WcsLabelDto} from './wcs-label-dto';

export class PtBrRepository implements I18n {
  translate(): WcsLabelDto {
    return {
      languages: {
        portuguese: 'Português',
      },
      welcome: {
        title: 'Meu Projeto',
      },
    };
  }
}
