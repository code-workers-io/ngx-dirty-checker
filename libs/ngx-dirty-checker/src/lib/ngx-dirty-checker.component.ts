import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-dirty-checker',
  template: `{{label}} <span>{{dirtyCheck()}}</span>`,
  styles: [
    `
      :host {
        border: 1px solid green;
        border-radius: 100%;
        width: 40px;
        height: 40px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
      }

    `,
  ],
})
export class NgxDirtyCheckerComponent {
  @Input() label: string = '';
  private dirtyCheckCount = 0;

  constructor() {}


  dirtyCheck(): number {
    this.dirtyCheckCount++;
    return this.dirtyCheckCount;
  }
}
