import 'babel-polyfill';
// import { wxShare } from '@wnl/ui';
import '../static/flexible';
import '../css/index.scss';
import utils from '../static/helper';
import toast from '../toast/toast';
// import '../static/vconsole.min';

// const qr = 'https://qiniu.image.cq-wnl.com/content/201805315a71351fb9684f72bfd3448f19cdaf4b.jpg';


window.onload = function() {
  // let body = document.querySelector('body');
  const press = document.querySelector('#press');
  utils.longPress(press, () => {
    alert('触发长按事件'); // eslint-disable-line
  });
  // console.log(utils.getParam('name', 'http://baidu.com?name=44'));
  // let ua = navigator.userAgent.toLowerCase();
  // let ua = navigator.appVersion;
  // let match = ua.match(/OS (\d+)_(\d+)_?(\d+)?/);
  // console.log(utils.getIOSVersion());
  // console.log(utils.getAndroidVersion());
  // alert(utils.isQQ);
  // const obj = { id: 1, name: 'alice' };
  // const { name, id } = obj;
  // console.log(name, id);
  $('.show').click(() => {
    // $('.toast_wrap').addClass('vshow');
    // setTimeout(() => {
    //   $('.toast_wrap').removeClass('vshow');
    // }, 800);
    new toast().show('this is a toast', { bottom_center: 'bottom_center' });
  });
};
