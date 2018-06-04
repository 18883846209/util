import 'babel-polyfill';
import '../static/flexible';
import '../css/index.scss';
// import { getQueryValue, play } from '../static/helper';
// import '../static/vconsole.min';

// const qr = 'https://qiniu.image.cq-wnl.com/content/201805315a71351fb9684f72bfd3448f19cdaf4b.jpg';


window.onload = function() {
  console.log('test');
  let body = document.querySelector('body');
  function longPress(el, fn, ms = 800) {
    let timer = null;
    el.addEventListener('touchstart', () => {
      timer = setTimeout(fn, ms);
    }, false);
    el.addEventListener('touchmove', (e) => {
      e.preventDefault();
    }, false);
    el.addEventListener('touchend', () => {
      clearTimeout(timer);
    }, false);
  }
  longPress(body, () => {
    console.log('aa');
  });
  // body.addEventListener('touchstart', (e) => {
  //   console.log(e.type);
  // }, false);
};
