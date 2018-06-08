import './toast.css';

// export default function toast(text, options) {
//   let toastwrap;
//   let toasttext;
//   console.log([...document.querySelector('.toast_wrap')].length);
//   if (document.querySelector('.toast_wrap')) return;
//   toastwrap = document.createElement('div');
//   toasttext = document.createElement('div');
//   toasttext.innerHTML = text.length > 0 ? text : '';
//   toastwrap.className = 'toast_wrap';
//   toasttext.className = 'toast_text';
//   toastwrap.appendChild(toasttext);
//   document.body.appendChild(toastwrap);
//   if (options) {
//     toastwrap.classList.add('vshow');
//   }
//   toastwrap.classList.add('vshow');
//   setTimeout(() => {
//     toastwrap.classList.remove('vshow');
//   }, 800);
// }
export default class toast {
  constructor() {
    this.toastwrap = document.createElement('div');
    this.toasttext = document.createElement('div');
    this.toastwrap.className = 'toast_wrap';
    this.toasttext.className = 'toast_text';
    // this.show(text, options);
  }
  show(text, options) {
    if (document.querySelector('.toast_wrap')) return;
    this.toastwrap.appendChild(this.toasttext);
    document.body.appendChild(this.toastwrap);
    this.toasttext.innerHTML = text.length > 0 ? text : '';
    let ms = options.ms || 800;
    if (options.top_center) {
      this.toastwrap.classList.add('top_center');
    }
    if (options.bottom_center) {
      this.toastwrap.classList.add('bottom_center');
    }
    this.toastwrap.classList.add('vshow');
    setTimeout(() => {
      this.toastwrap.classList.remove('vshow');
      setTimeout(() => {
        document.body.removeChild(this.toastwrap);
      }, 300);
    }, ms);
  }
  hide() {
    this.toastwrap.classList.remove('vshow');
    document.body.removeChild(this.toastwrap);
  }
}