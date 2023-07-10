import {SocialMediaDto} from './social-media-dto';

export type CompanyDto = {
  name: string;
  shortDescription: string;
  url: string;
  socialMedias?: SocialMediaDto[];
};
