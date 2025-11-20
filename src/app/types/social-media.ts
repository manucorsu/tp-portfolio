export type SocialMediaIconType = 'GitHub' | 'LinkedIn' | 'email';

export interface SocialMediaIcon {
  readonly sm: SocialMediaIconType;
  readonly href: string;
}
