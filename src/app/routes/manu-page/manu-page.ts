import { Component } from '@angular/core';
import { SmIcosContainer } from '../../components/sm-icos-container/sm-icos-container';
import { SocialMediaIcon } from '../../types/social-media';
import { MPill, MPillData } from '../../components/mpill/mpill';

@Component({
  selector: 'manu-page',
  templateUrl: './manu-page.html',
  styleUrl: './manu-page.css',
  imports: [SmIcosContainer, MPill],
})
export class ManuPage {
  protected readonly icons: SocialMediaIcon[] = [
    {
      sm: 'email',
      href: 'mailto:manuelcorsunsky@gmail.com',
    },
    {
      sm: 'GitHub',
      href: 'https://github.com/manucorsu',
    },
    {
      sm: 'LinkedIn',
      href: 'https://linkedin.com/in/manucorsu',
    },
  ];
  public readonly projects: MPillData[] = [
    {
      name: 'We-Play',
      description: 'Creador de juegos (crucigramas, quizzes y similar Wordle)',
      tech: ['.NET C#', 'Windows Forms', 'C#'],
    },
    {
      name: 'ApocalipTIC',
      description: 'Videojuego 2D tower defense inspirado en Bloons TD 6',
      tech: ['Unity', 'C#'],
      url: 'https://github.com/manucorsu/ApocalipTIC',
    },
    {
      name: 'Statill',
      description: 'Aplicación para digitalizar pequeños comercios',
      tech: ['Python', 'SQLAlchemy', 'FastAPI', 'Angular'],
      url: 'https://github.com/manucorsu/statill/blob/main/README.md',
    },
  ];
}
