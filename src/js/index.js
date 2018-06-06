import 'babel-polyfill';
import { wxShare } from '@wnl/ui';
import '../static/flexible';
import '../css/index.scss';
// import utils from '../static/helper';
// import '../static/vconsole.min';

// const qr = 'https://qiniu.image.cq-wnl.com/content/201805315a71351fb9684f72bfd3448f19cdaf4b.jpg';


window.onload = function() {
  // let body = document.querySelector('body');
  // const long = document.querySelector('#long');
  // utils.longPress(long, () => {
  //   console.log('aa'); // eslint-disable-line
  // });
  wxShare({
    title: '端午年年过，51万年历今年给你与“粽”不同！',
    text: '是时候来彰显自己独特的个性了，赶紧来领取吧！',
    imgUrl: 'https://qiniu.image.cq-wnl.com/content/20180529ca7698b1184744a481ba4f241becca7a.jpg',
    url: `${window.location.protocol}//${window.location.host + window.location.pathname}`
  });
  // console.log(utils.getParam('name', 'http://baidu.com?name=44'));
  // let ua = navigator.userAgent.toLowerCase();
  // let ua = navigator.appVersion;
  // let match = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
  // console.log(utils.getIOSVersion());
  // console.log(utils.getAndroidVersion());
  // alert(utils.isQQ);
};
