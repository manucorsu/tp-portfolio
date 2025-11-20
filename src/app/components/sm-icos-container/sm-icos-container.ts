import { Component, Input } from '@angular/core';
import { SmIco } from '../sm-ico/sm-ico';

@Component({
  selector: 'app-sm-icos-container',
  templateUrl: './sm-icos-container.html',
  styleUrl: './sm-icos-container.css',
  imports: [SmIco],
})
export class SmIcosContainer {
  @Input() icons!: {
    readonly sm: 'GitHub' | 'LinkedIn' | 'email';
    readonly href: string;
  }[];
}
