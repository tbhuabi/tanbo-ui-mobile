import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UIMobileModule } from '../../tanbo/ui-mobile/public_api';

import { routes } from './lazy.routing';

import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
    UIMobileModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    TestComponent
  ]
})
export class LazyModule {

}
