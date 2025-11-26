import { Component } from '@angular/core';
import { SmIcosContainer } from '../../components/sm-icos-container/sm-icos-container';
import { SocialMediaIcon } from '../../types/social-media';

@Component({
  selector: 'poe-page',
  templateUrl: './poe-page.html',
  styleUrl: './poe-page.css',
  imports: [SmIcosContainer],
})
export class PoePage {
  protected readonly smIcons: SocialMediaIcon[] = [
    {
      sm: 'instagramP',
      href: 'https://www.instagram.com/palermo_poema',
    },
    {
      sm: 'mailP',
      href: 'mailto:palermopoema@gmail.com',
    },
    {
      sm: 'githubP',
      href: 'https://github.com/PoemaPalermo',
    },
    {
      sm: 'linkedinP',
      href: 'https://ar.linkedin.com/in/lucia-poema-palermo-a34aa6336',
    },
  ];

  scrollTo(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
