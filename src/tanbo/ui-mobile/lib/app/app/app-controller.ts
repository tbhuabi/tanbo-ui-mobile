import { BrowserENV } from '../../helper';

export function getDeviceType(): BrowserENV {
  const u = navigator.userAgent;
  // android终端
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  // ios终端
  const isIOS = /\(i[^;]+;( U;)? CPU.+Mac OS X/.test(u);

  if (isAndroid) {
    return BrowserENV.android;
  }
  if (isIOS) {
    const screen = window.screen;
    if (screen.width === 375 && screen.height === 812 ||
      screen.height === 375 && screen.width === 812 ||
      screen.width === 414 && screen.height === 896 ||
      screen.height === 414 && screen.width === 896) {
      return BrowserENV.iphoneX;
    }
    return BrowserENV.iphone;
  }
  return BrowserENV.default;
}
