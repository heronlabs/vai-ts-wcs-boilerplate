import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faPinterest,
  faTwitter,
  faWhatsapp,
  faYoutube,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';
import {faGlobe} from '@fortawesome/free-solid-svg-icons';

import {SocialMediaNames} from '../enums/social-media-names';

export const filterSocialMedias = (
  givenSocialMedia: SocialMediaNames
): IconDefinition => {
  return [
    {
      name: SocialMediaNames.FACEBOOK,
      icon: faFacebook,
    },
    {
      name: SocialMediaNames.TWITTER,
      icon: faTwitter,
    },
    {
      name: SocialMediaNames.YOUTUBE,
      icon: faYoutube,
    },
    {
      name: SocialMediaNames.WHATSAPP,
      icon: faWhatsapp,
    },
    {
      name: SocialMediaNames.LINKEDIN,
      icon: faLinkedin,
    },
    {
      name: SocialMediaNames.INSTAGRAM,
      icon: faInstagram,
    },
    {
      name: SocialMediaNames.MEDIUM,
      icon: faMedium,
    },
    {
      name: SocialMediaNames.GITHUB,
      icon: faGithub,
    },
    {
      name: SocialMediaNames.DISCORD,
      icon: faDiscord,
    },
    {
      name: SocialMediaNames.WEBSITE,
      icon: faGlobe,
    },
    {
      name: SocialMediaNames.PINTEREST,
      icon: faPinterest,
    },
  ].filter(socialMedia => socialMedia.name === givenSocialMedia)[0].icon;
};
