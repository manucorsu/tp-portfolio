import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sm-ico',
  templateUrl: './sm-ico.html',
  styleUrl: './sm-ico.css',
})
export class SmIco {
  readonly alt_Path = {
    GitHub: 'ico-github.svg',
    LinkedIn: 'ico-linkedin.svg',
    email: 'ico-mail.svg',
  };
  @Input() public icon!: 'GitHub' | 'LinkedIn' | 'email';
  @Input() public href!: string;
}
