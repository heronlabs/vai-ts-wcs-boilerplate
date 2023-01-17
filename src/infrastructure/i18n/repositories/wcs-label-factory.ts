import {Languages} from '../../../core/enums/languages';
import {PtBrRepository} from './pt-br-repository';
import {WcsLabelDto} from './wcs-label-dto';

export class WcsLabelFactory {
  private static makePtBr(): WcsLabelDto {
    return new PtBrRepository().translate();
  }

  static make(language: Languages): WcsLabelDto {
    const languages = {
      [Languages.PT_BR]: WcsLabelFactory.makePtBr(),
    };

    return languages[language];
  }
}
