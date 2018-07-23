import 'babel-polyfill';
// import { wxShare } from '@wnl/ui';
import '../static/flexible';
import '../css/index.scss';
import utils from '../static/helper';
import Toast from '../toast/toast';
import drag from '../static/drag';
// import '../static/vconsole.min';

// const THREE = require('three');

window.onload = function() {
  // let body = document.querySelector('body');
  const press = document.querySelector('.press');
  utils.longPress(press, () => {
    let toast = new Toast();
    toast.show('触发长按事件'); // eslint-disable-line
  }, 1500);
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
  $('.show').on('touchstart', () => {
    let toast1 = new Toast();
    toast1.show('this is a toast', {
      top: '100',
      left: '40'
    });
  });
  $('.show1').click(() => {
    // setTimeout(() => {
    //   $('.toast_wrap').removeClass('vshow');
    // }, 800);
    let toast2 = new Toast();
    toast2.show('this is a toast1', {
      bottom_center: 'bottom_center'
    });
  });
  $('.loading').click(() => {
    let toast = new Toast();
    toast.show('加载中...', {
      alwaysShow: true
    });
  });
  let n = 1;
  let time1;
  let time2;
  let dis;
  $('.double').on('touchstart', () => { // 双击事件
    if (n === 1) {
      n += 1;
      time1 = new Date().getTime();
    } else if (n >= 2) {
      time2 = new Date().getTime();
      dis = time2 - time1;
      console.log(dis, time1, time2);
      if (dis <= 500) {
        n = 1;
        let toast = new Toast();
        toast.show('双击');
      } else {
        time1 = new Date().getTime();
      }
    }
  });
  drag('.drag');
  console.log(utils.getcss('.drag', 'left'));
  console.log(utils.getAddDayDate(12));
  console.log(utils.getParamJson());
  // let x0;
  // $('.slide').on('touchstart', (e) => {
  //   // x0 = e.targetTouches[0].clientX;
  //   // if ($('.slide').hasClass('left')) {
  //   //   $('.slide').removeClass('left');
  //   // } else {
  //   //   $('.slide').addClass('left');
  //   // }
  //   // let x0;
  //   // if (e.type === 'touchstart') {
  //   //   x0 = e.targetTouches[0].clientX;
  //   // }
  //   // if (e.type === 'touchmove') {
  //   //   let x1 = e.targetTouches[0].clientX;
  //   //   $('.slide1').css('transform', `translate3d(${x1}, 0, 0)`);
  //   //   console.log(x1, x0);
  //   // }
  //   // console.log(e.type);
  // });
  // (function() { // eslint-disable-line
  //   let lastTime = 0;
  //   let vendors = ['webkit', 'moz'];
  //   for (let x = 0; x < vendors.length && !window.requestAnimationFrame; x += 1) {
  //     window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
  //     window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || // Webkit中此取消方法的名字变了
  //                                     window[vendors[x] + 'CancelRequestAnimationFrame'];
  //   }

  //   if (!window.requestAnimationFrame) {
  //     window.requestAnimationFrame = function(callback, element) { // eslint-disable-line
  //       let currTime = new Date().getTime();
  //       let timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
  //       let id = window.setTimeout(function() { // eslint-disable-line
  //         callback(currTime + timeToCall);
  //       }, timeToCall);
  //       lastTime = currTime + timeToCall;
  //       return id;
  //     };
  //   }
  //   if (!window.cancelAnimationFrame) {
  //     window.cancelAnimationFrame = function(id) {
  //       clearTimeout(id);
  //     };
  //   }
  // }());
  // let i = 0;
  // function lide() {
  //   i -= 1;
  //   $('.slide').css('transform', `translate3d(${i}px, 0, 0)`);
  //   window.requestAnimationFrame(lide);
  // }
  // window.requestAnimationFrame(lide);
  $('.slide').on('click', () => {
    // let x1 = e.targetTouches[0].clientX;
    $('.slide').css('transform', `translate3d(-20px, 0, 0)`);
  });
  let keys = {
    37: 1, 38: 1, 39: 1, 40: 1
  };

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false;
  }
  window.onwheel = preventDefault;
  document.onkeydown = (e) => {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
    return true;
  };
  // let test = ' tes'.replace(/\s/g, '');
  let test = ' tes';
  let ss = test.substring(test.indexOf('tes') - 1, test.indexOf('tes') + 3);
  console.log(test.replace(ss, '').length);
  // console.log(new Date());
  // console.log(new Date('2017-10-19').setDate(10));
  // console.log(navigator.connection);
  // console.log(Object.prototype.toString.call(() => {}));
};
