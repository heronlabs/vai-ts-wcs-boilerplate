import {WcsTextDto} from '../dtos/wcs-text-dto';
import {I18n} from '../interfaces/i18n';

export class EnUsRepository implements I18n {
  translate(): WcsTextDto {
    return {
      languages: {
        english: 'English',
        portuguese: 'Portuguese',
      },
    };
  }
}
