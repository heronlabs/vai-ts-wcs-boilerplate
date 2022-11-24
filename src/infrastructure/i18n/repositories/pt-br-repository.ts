import {WcsTextDto} from '../dtos/wcs-text-dto';
import {I18n} from '../interfaces/i18n';

export class PtBrRepository implements I18n {
  translate(): WcsTextDto {
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
