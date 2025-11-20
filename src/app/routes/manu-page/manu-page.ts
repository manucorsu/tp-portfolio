import { Component } from '@angular/core';
import { SmIcosContainer } from '../../components/sm-icos-container/sm-icos-container';

@Component({
  selector: 'manu-page',
  templateUrl: './manu-page.html',
  styleUrl: './manu-page.css',
  imports: [SmIcosContainer],
})
export class ManuPage {
  protected readonly icons: {
    readonly sm: 'email' | 'LinkedIn' | 'GitHub';
    readonly href: string;
  }[] = [
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
}
