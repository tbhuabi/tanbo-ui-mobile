import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIModalModule } from '../modal/modal.module';
import { UIImageViewerModule } from '../image-viewer/image-viewer.module';
import { UIOtherModule } from '../other/other.module';

import { AppComponent } from './app/app.component';

@NgModule({
  imports: [
    UIModalModule,
    CommonModule,
    UIImageViewerModule,
    UIOtherModule
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ]
})
export class UIAppModule {
}
