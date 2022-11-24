import {WcsTextDto} from '../dtos/wcs-text-dto';
import {Languages} from '../enums/languages';
import {PtBrRepository} from '../repositories/pt-br-repository';

export class I18nFactory {
  private static makePtBr(): WcsTextDto {
    return new PtBrRepository().translate();
  }

  static make(language: Languages): WcsTextDto {
    const languages = {
      [Languages.PT_BR]: I18nFactory.makePtBr(),
    };

    return languages[language];
  }
}
