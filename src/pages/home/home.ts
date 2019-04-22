import { Component, TemplateRef, ViewChild, OnInit, ComponentRef } from '@angular/core';

import { ModalController, DialogController, AlertController } from '../../tanbo/ui-mobile/public_api';
import { SelectComponent } from '../../tanbo/ui-mobile/lib/forms/select/select.component';

@Component({
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  value: number = 1;
}
