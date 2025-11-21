import { Component, Input } from '@angular/core';

export interface MPillData {
  readonly name: string; // `mpill-${name}.svg` tiene que existir en public
  readonly description: string;
  readonly tech: Min1Max4<string>;
  readonly url?: string;
}

@Component({
  selector: 'app-mpill',
  templateUrl: './mpill.html',
  styleUrls: ['./mpill.css'],
})
export class MPill {
  @Input() public data!: MPillData;
  protected showDetails = false;

  protected get path(): string {
    return this.data ? `mpill-${this.data.name}.svg` : '';
  }

  protected get url(): string | undefined {
    return this.data?.url;
  }

  onClick() {
    this.showDetails = !this.showDetails;
  }

  openUrl(event: MouseEvent) {
    event.stopPropagation();
    if (this.url) {
      window.open(this.url, '_blank');
    }
  }
}
