import { Component, HostListener, Inject, Input, OnInit, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { BrowserENV, UI_BROWSER_ENV } from '../../helper';
import { ListActivatedService } from '../../list/index';
import { PullDownRefreshController, PullUpLoadController } from '../../scroll/index';
import { ActionSheetService } from '../../other/index';

@Component({
  selector: 'ui-app',
  templateUrl: './app.component.html',
  providers: [
    PullDownRefreshController,
    PullUpLoadController,
    ActionSheetService
  ]
})
export class AppComponent implements OnInit {
  /**
   * 根据不同的屏幕宽度，设置 html 元素的 font-size
   * 主要用于 rem 布局，默认为 10
   */
  @Input() baseFontSize: number = 10;
  /**
   * 屏幕 X 轴默认逻辑像素
   */
  @Input() screenWidth = 375;

  // 根据不同环境，需要把页面头部增高相对尺寸，以显示时间，电池电量等信息，这里通过样式来控制
  @HostBinding('class.ui-iphone')
  get isIphone() {
    return this.env === BrowserENV.iphone;
  }

  @HostBinding('class.ui-iphone-x')
  get isIphoneX() {
    return this.env === BrowserENV.iphoneX;
  }

  @HostBinding('class.ui-android')
  get isAndroid() {
    return this.env === BrowserENV.android;
  }

  @HostBinding('class.ui-default')
  get isDefault() {
    return this.env === BrowserENV.default;
  }

  private htmlElement: HTMLElement;

  constructor(@Inject(DOCUMENT) private document: any,
              @Inject(UI_BROWSER_ENV) private env: BrowserENV,
              private listActivatedService: ListActivatedService) {
  }

  ngOnInit() {
    this.htmlElement = this.document.querySelector('html');
    this.resize();
  }

  @HostListener('window:resize')
  resize() {
    // 通过当前视口的宽度，动态设置 css rem 值的大小
    if (!this.htmlElement) {
      return;
    }
    const docWidth = this.htmlElement.getBoundingClientRect().width;
    const scale = docWidth / this.screenWidth;
    this.htmlElement.style.fontSize = `${scale * this.baseFontSize}px`;
  }

  @HostListener('document:touchstart')
  documentTouchStart() {
    // 当页面有 list 组件时，如果其中某一项已打开 sliding，当用户点击其它地方时，需要发布全局事件，来收起 sliding
    this.listActivatedService.publish();
  }
}
