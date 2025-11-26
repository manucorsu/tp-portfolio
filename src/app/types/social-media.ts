export type SocialMediaIconType =
  | 'GitHub'
  | 'LinkedIn'
  | 'email'
  | 'instagramP'
  | 'githubP'
  | 'linkedinP'
  | 'mailP';

export interface SocialMediaIcon {
  readonly sm: SocialMediaIconType;
  readonly href: string;
}
