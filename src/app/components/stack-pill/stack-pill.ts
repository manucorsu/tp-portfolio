import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack-pill',
  templateUrl: './stack-pill.html',
  styleUrls: ['./stack-pill.css'],
  standalone: true,
})
export class StackPill {
  @Input() public text!: string;
  @Input() public colors: 'm' | 'p' = 'm';
}
