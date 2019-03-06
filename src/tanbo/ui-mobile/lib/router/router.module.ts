import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIOtherModule } from '../other/other.module';

import { BackComponent } from './back/back.component';

@NgModule({
  imports: [
    CommonModule,
    UIOtherModule
  ],
  declarations: [
    BackComponent
  ],
  exports: [
    BackComponent
  ]
})
export class UIRouterModule {
}
