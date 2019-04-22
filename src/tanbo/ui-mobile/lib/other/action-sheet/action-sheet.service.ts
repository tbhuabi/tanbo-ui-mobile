import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ActionSheetService {
  onInit: Observable<HTMLElement>;
  private initEvent = new Subject<HTMLElement>();

  constructor() {
    this.onInit = this.initEvent.asObservable();
  }

  push(el: HTMLElement) {
    this.initEvent.next(el);
  }
}