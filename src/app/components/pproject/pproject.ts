import { Component, Input } from '@angular/core';
import { StackPill } from '../stack-pill/stack-pill';

export interface PProjectData {
  readonly time: string; // "2023", "2024-Actualidad", "Próximamente"
  readonly name: string;
  readonly subtitle?: string; // "Proyecto escolar - no completado"
  readonly description: string;
  readonly tech: readonly string[];
}

@Component({
  selector: 'app-pproject',
  templateUrl: './pproject.html',
  styleUrls: ['./pproject.css'],
  imports: [StackPill],
})
export class PProject {
  @Input() public data!: PProjectData;
}
