import {
  Component,
  HostListener,
  Inject,
  Input
} from '@angular/core';
import { Location } from '@angular/common';

import { UI_BACK_ICON_CLASSNAME } from '../helper';

@Component({
  selector: 'ui-back',
  templateUrl: './back.component.html'
})
export class BackComponent {
  @Input() icon: string = '';

  constructor(@Inject(UI_BACK_ICON_CLASSNAME) iconName: string,
              private location: Location) {
    this.icon = iconName || '';
  }

  @HostListener('click')
  click() {
    this.location.back();
  }
}
