// function play(el) {
//   let firstTouch = true
//   // --创建页面监听，等待微信端页面加载完毕 触发音频播放
//   document.addEventListener('DOMContentLoaded', function () {
//     function audioAutoPlay () {
//       // var audio = document.getElementById('audio')
//       el.play()
//       document.addEventListener('WeixinJSBridgeReady', function () {
//         el.play()
//       }, false)
//     }
//     audioAutoPlay()
//   })
//   // --创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
//   document.addEventListener('touchstart', function () {
//     function audioAutoPlay () {
//       if (firstTouch) {
//         el.play()
//       }else {
//         return
//       }
//       firstTouch = false
//     }
//     audioAutoPlay()
//   })
// }
function addEventHandler(dom, eventname, eventhandler) {
  if (document.attachEvent) { //ie浏览器
    dom.attachEvent('on' + eventname, eventhandler);
  } else if (document.addEventListener) {
    dom.addEventListener(eventname, eventhandler, false);
  }
}
/**
 * [addClickState 添加元素点击态]
 * @param  {String} el [需要添加点击态的元素]
 * @param  {String} activeclass   [点击状态的class]
 */
function addClickState(el, activeclass) { // 添加元素点击态
  el = typeof el === 'string' ? document.querySelectorAll(el) : el;
  let addstr = new RegExp('\\s' + activeclass + '$', '');
  console.log(el.length);
  // function addEventHandler(dom, eventname, eventhandler) {
  //   if (document.attachEvent) { //ie浏览器
  //     dom.attachEvent('on' + eventname, eventhandler);
  //   } else if (document.addEventListener) {
  //     dom.addEventListener(eventname, eventhandler, false);
  //   }
  // }
  function removeclass(elclass, element) {
    elclass.currentTarget.className = element.className.replace(addstr, '');
  }
  el.forEach((item) => {
    addEventHandler(item, 'touchstart', (e) => {
      e.currentTarget.className += ' ' + activeclass;
    }, false);
    addEventHandler(item, 'touchmove', (e) => {
      // addstr = eval('/\\s' + activeclass + '\$/');
      removeclass(e, item);
    }, false);
    addEventHandler(item, 'touchend', (e) => {
      // addstr = new RegExp('\\s' + activeclass + '\$', '');
      removeclass(e, item);
    }, false);
    addEventHandler(item, 'touchcancel', (e) => {
      // e.currentTarget.className = item.className.replace(addstr, '');
      removeclass(e, item);
    }, false);
  });
}

/**
 * [getParam 获取单个url参数]
 * @param  {String} name [参数名称]
 * @param  {String} url   [default:location.href]
 * @return {String|Boolean}
 */
function getParam(name, url) {
  if (typeof name !== 'string') return false;
  if (!url) url = window.location.href;
  // 当遇到name[xx]时，对括号做一下转义为 name\[xxx\]，因为下面还需要使用name做正则
  name = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  const results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

/**
 * [getParamJson url参数转json对象]
 * @param  {String} url   [default:location.href]
 * @return {Object}
 */
function getParamJson(url) {
  if (!url) url = window.location.href;
  let pos = url.indexOf('?');
  if (pos <= -1) {
    return null;
  }
  pos += 1;
  const urlarr = url.substring(pos).split('&');
  let json = {};
  let keyarr;
  urlarr.forEach((item) => {
    keyarr = item.split('=');
    if (!json[keyarr[0]]) {
      json[keyarr[0]] = decodeURIComponent(keyarr[1]);
    }
  });
  // console.log(json);
  return json;
}

/**
 * [longPress 长按事件]
 * @param {*} el [dom对象]
 * @param {function} fn [回调函数]
 * @param {number} [ms=800] [长按时间]
 */
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

function getIOSVersion() {
  if (window.MSStream) {
    return false;
  }
  let match = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
  if (match !== undefined && match !== null) {
    let version = [parseInt(match[1], 10), parseInt(match[2], 10), parseInt(match[3] || 0, 10)];
    // return parseFloat(version.join('.'));
    return version.join('.');
  }
  return false;
}

function getAndroidVersion() {
  let match = navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/); // eslint-disable-line
  // return match ? parseFloat(match[1]) : false;
  return match ? match[1] : false;
}

function jsonToParams(json) {
  return ('?' + Object.keys(json).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&'));
}

function getcss(o, key) { // 获取元素css样式
  o = typeof o !== 'string' ? o : document.querySelector(o);
  return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key];
}

function setCss(o, key, str) {
  o = typeof o !== 'string' ? o : document.querySelector(o);
  o.style[key] = str;
}

function int2str(n) {
  return parseInt(n) < 10 ? '0' + parseInt(n) : parseInt(n);
}

function getAddDayDate(AddDay, date) {
  let nowDate = date ? new Date(date.toString()) : new Date();
  // if (AddDay && !isNumber(AddDay)) {
  //   console.log('请传入一个数字');
  //   return;
  // }
  nowDate.setDate(nowDate.getDate() + (AddDay ? parseInt(AddDay) : 0)); // 获取AddDay天后的日期
  let y1 = nowDate.getFullYear();
  let m1 = nowDate.getMonth() + 1; // 获取月份
  let d1 = nowDate.getDate();
  // let h1 = nowDate.getHours();
  // let min1 = nowDate.getMinutes();
  // let s1 = nowDate.getSeconds();
  // let ms1 = nowDate.getMilliseconds();
  // console.log(nowDate);
  // return [y1, m1, d1, h1, min1, s1, ms1];
  return [y1, m1, d1];
}

const ua = navigator.userAgent.toLowerCase();
// const isWnl = /wnl/i.test(ua);
// const appVersion = parseInt(ua.substr(ua.indexOf('wnl ') + 4, 5).replace(/\./g, ''));
// const appVersionString = ua.substr(ua.indexOf('wnl ') + 4, 5);
// const isIphoneX = isIPhone && window.innerWidth === 375 && window.devicePixelRatio === 3;
// const isIE = /msie/i.test(ua);
// const isSafari = /afari/.test(ua);
const isWx = /micromessenger/i.test(ua);
const isQQ = /\sqq|mqqbrowser/i.test(ua);
const iOSVersion = getIOSVersion();
const androidVersion = getAndroidVersion();
const isAndroid = /android|htc/i.test(ua) || (window.navigator.platform + '').match(/linux/i);
const isIPad = !isAndroid && /ipad/i.test(ua);
const isIPhone = !isAndroid && /ipod|iphone/i.test(ua);
const isIOS = isIPad || isIPhone;

const utils = {
  getParam,
  longPress,
  getIOSVersion,
  getAndroidVersion,
  jsonToParams,
  iOSVersion,
  androidVersion,
  isAndroid,
  isIOS,
  isWx,
  isQQ,
  getcss,
  setCss,
  addEventHandler,
  getAddDayDate,
  addClickState,
  int2str,
  getParamJson
};

export default utils;
