import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDirtyCheckerComponent } from './ngx-dirty-checker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NgxDirtyCheckerComponent],
  exports: [
    NgxDirtyCheckerComponent
  ]
})
export class NgxDirtyCheckerModule {}
