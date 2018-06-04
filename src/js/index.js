import 'babel-polyfill';
import '../static/flexible';
import '../css/index.scss';
import utils from '../static/helper';
// import '../static/vconsole.min';

// const qr = 'https://qiniu.image.cq-wnl.com/content/201805315a71351fb9684f72bfd3448f19cdaf4b.jpg';


window.onload = function() {
  // let body = document.querySelector('body');
  const long = document.querySelector('#long');
  utils.longPress(long, () => {
    console.log('aa'); // eslint-disable-line
  });
  // console.log(utils.getParam('name', 'http://baidu.com?name=44'));
  // let ua = navigator.userAgent.toLowerCase();
  // let ua = navigator.appVersion;
  // let match = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
  // console.log(utils.getIOSVersion());
  // console.log(utils.getAndroidVersion());
  // alert(ua);
};
