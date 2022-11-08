import {Languages} from '../../../core/enums/languages';
import {WcsTextDto} from '../dtos/wcs-text-dto';
import {EnUsRepository} from '../repositories/en-us-repository';
import {PtBrRepository} from '../repositories/pt-br-repository';

export class I18nFactory {
  private static makePtBr(): WcsTextDto {
    return new PtBrRepository().translate();
  }

  private static makeEnUs(): WcsTextDto {
    return new EnUsRepository().translate();
  }

  static make(language: Languages): WcsTextDto {
    const languages = {
      [Languages.PT_BR]: I18nFactory.makePtBr(),
      [Languages.EN_US]: I18nFactory.makeEnUs(),
    };

    return languages[language];
  }
}
