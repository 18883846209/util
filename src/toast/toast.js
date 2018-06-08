import './toast.css';
import './lib';


const keys = {
  37: 1, 38: 1, 39: 1, 40: 1
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}
function preventDefaultForScrollKeys(e) { // eslint-disable-line
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}
let oldonwheel, oldonmousewheel1, oldonmousewheel2, oldontouchmove, oldonkeydown, isDisabled; // eslint-disable-line
function disableScroll() { // eslint-disable-line
  if (window.addEventListener) window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  oldonwheel = window.onwheel;
  window.onwheel = preventDefault; // modern standard
  oldonmousewheel1 = window.onmousewheel;
  window.onmousewheel = preventDefault; // older browsers, IE
  oldonmousewheel2 = document.onmousewheel;
  document.onmousewheel = preventDefault; // older browsers, IE
  // oldontouchmove = window.ontouchmove;

  // window.ontouchmove = preventDefault; // mobile
  // document.body.addEventListener('touchmove', (event) => {
  //   // 判断默认行为是否可以被禁用
  //   // if (event.cancelable) {
  //   //   // 判断默认行为是否已经被禁用
  //   //   if (!event.defaultPrevented) {
  //   //     event.preventDefault();
  //   //   }
  //   // }
  //   event.preventDefault();
  // }, false);

  oldonkeydown = document.onkeydown;
  document.onkeydown = preventDefaultForScrollKeys;
  isDisabled = true;
}
function enableScroll() { // eslint-disable-line
  if (!isDisabled) return;
  if (window.removeEventListener) window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = oldonwheel; // modern standard
  window.onmousewheel = oldonmousewheel1; // older browsers, IE
  document.onmousewheel = oldonmousewheel2; // older browsers, IE
  window.ontouchmove = oldontouchmove; // mobile
  document.onkeydown = oldonkeydown;
  isDisabled = false;
}
window.scrollHanlder = {
  disableScroll,
  enableScroll
};
export default class Toast {
  constructor() {
    this.toastwrap = document.createElement('div');
    this.toasttext = document.createElement('div');
    this.modal_mask = document.createElement('div');
    this.toastwrap.className = 'toast_wrap';
    this.toasttext.className = 'toast_text';
    this.modal_mask.className = 'modal_mask';
    document.body.appendChild(this.toastwrap);
    // this.show(text, options);
  }
  show(text, options) {
    if (document.querySelector('.toast_text')) return;
    this.toastwrap.appendChild(this.toasttext);
    this.toasttext.innerHTML = text.length > 0 ? text : '';
    // document.body.appendChild(this.toastwrap);
    let ms = options && options.ms || 950; // eslint-disable-line
    // 如果传入样式，则按传入的样式显示(不传默认居中显示)
    if (options && options.top_center) {
      this.toastwrap.classList.add('top_center');
    }
    if (options && options.bottom_center) {
      this.toastwrap.classList.add('bottom_center');
    }
    if (options && (options.top || options.left || options.right || options.bottom)) {
      this.toastwrap.style.width = 'auto';
      this.toastwrap.style.top = options.top + 'px';
      this.toastwrap.style.left = options.left + 'px';
      this.toastwrap.style.right = options.right + 'px';
      this.toastwrap.style.bottom = options.bottom + 'px';
    }
    if (options && options.isModal) {
      document.body.appendChild(this.modal_mask);
      document.querySelector('.modal_mask').addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, false);
      disableScroll();
    }
    this.toastwrap.classList.add('vshow');
    let timer1 = setTimeout(() => {
      if (options && options.isModal) {
        document.body.removeChild(this.modal_mask);
        enableScroll();
      }
      this.toastwrap.classList.remove('vshow');
    }, ms);
    let timer2 = setTimeout(() => {
      if (document.querySelector('.toast_text')) {
        this.toastwrap.removeChild(this.toasttext);
      }
    }, ms + 300);
    if (options && options.alwaysShow) {
      document.body.appendChild(this.modal_mask);
      document.querySelector('.modal_mask').addEventListener('touchmove', (e) => {
        e.preventDefault();
      }, false);
      disableScroll();
      clearTimeout(timer1);
      clearTimeout(timer2);
    }
  }
  hide() {
    if (document.querySelector('.toast_text')) {
      this.toastwrap.classList.remove('vshow');
      this.toastwrap.removeChild(this.toasttext);
    }
    if (document.querySelector('.modal_mask')) {
      document.body.removeChild(this.modal_mask);
    }
  }
}