import 'babel-polyfill';
// import { wxShare } from '@wnl/ui';
import '../static/flexible';
import '../css/index.scss';
import utils from '../static/helper';
import Toast from '../toast/toast';
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
      bottom_center: 'bottom_center'
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
  let params = { // eslint-disable-line
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
  };
  let dom = document.querySelector('.drag');
  function drag(target, callback) {
    if (utils.getcss(target, 'left') !== 'auto') {
      params.left = utils.getcss(target, 'left');
    }
    if (utils.getcss(target, 'top') !== 'auto') {
      params.top = utils.getcss(target, 'top');
    }
    target.ontouchstart = (event) => {
      params.flag = true;
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
      params.currentX = event.targetTouches[0].clientX;
      params.currentY = event.targetTouches[0].clientY;
    };
    target.ontouchend = () => {
      params.flag = false;
      if (utils.getcss(target, 'left') !== 'auto') {
        params.left = utils.getcss(target, 'left');
      }
      if (utils.getcss(target, 'top') !== 'auto') {
        params.top = utils.getcss(target, 'top');
      }
    };
    target.ontouchmove = (event) => {
      let e = event || window.event;
      if (params.flag) {
        // let nowX = e.clientX;
        // let nowY = e.clientY;
        let disX = e.targetTouches[0].clientX - params.currentX;
        let disY = e.targetTouches[0].clientY - params.currentY;
        target.style.left = parseInt(params.left) + disX + 'px';
        target.style.top = parseInt(params.left) + disY + 'px';
        console.log(disX);
      }
      callback(params);
    };
  }
  drag(dom, () => {
    // console.log(t);
    // console.log(utils.getcss(dom, 'left'));
  });
  console.log(utils.getAddDayDate());
  utils.getParamJson();
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
  // console.log(new Date());
  // console.log(new Date('2017-10-19').setDate(10));
  // console.log(navigator.connection);
  // console.log(Object.prototype.toString.call(() => {}));
  // let scene = new THREE.Scene();
  // let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.5, 1000);
  // let renderer = new THREE.WebGLRenderer();
  // renderer.setSize(window.innerWidth, window.innerHeight, false);
  // document.body.appendChild(renderer.domElement);
  // let geometry = new THREE.BoxGeometry(1, 1, 1);
  // let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  // let cube = new THREE.Mesh(geometry, material);
  // scene.add(cube);
  // camera.position.z = 20;
  // let animate = function() {
  //   requestAnimationFrame(animate);
  //   cube.rotation.x += 0.1;
  //   cube.rotation.y += 0.1;
  //   renderer.render(scene, camera);
  // };
  // animate();
  // let renderer;
  // let camera;
  // let scene;
  // let width;
  // let height;
  // function initThree() {
  //   width = document.querySelector('#canvas-frame').offsetWidth;
  //   height = document.querySelector('#canvas-frame').offsetHeight;
  //   renderer = new THREE.WebGLRenderer();
  //   renderer.setSize(width, height);
  //   document.getElementById('canvas-frame').appendChild(renderer.domElement);
  //   renderer.setClearColor(0xFFFFFF, 1.0);
  // }
  // function initCamera() {
  //   camera = new THREE.PerspectiveCamera(75, width / height, 1, 10000);
  //   camera.position.x = 0;
  //   camera.position.y = 0;
  //   camera.position.z = 600;
  //   camera.up.x = 0;
  //   camera.up.y = 1;
  //   camera.up.z = 0;
  //   camera.lookAt({
  //     x: 0,
  //     y: 0,
  //     z: 0
  //   });
  // }
  // function initScene() {
  //   scene = new THREE.Scene();
  // }
  // let light;
  // function initLight() {
  //   light = new THREE.AmbientLight(0xFFFFFF);
  //   light.position.set(100, 100, 200);
  //   scene.add(light);
  //   light = new THREE.PointLight(0x00FF00);
  //   light.position.set(0, 0, 300);
  //   scene.add(light);
  // }
  // // let cube;
  // function initObject() {
  //   let geometry = new THREE.CylinderGeometry(100, 150, 400);
  //   let material = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
  //   let mesh = new THREE.Mesh(geometry, material);
  //   // mesh.position = new THREE.Vector3(0, 0, 10);
  //   mesh.position.set(0, 0, 0);
  //   scene.add(mesh);
  // }
  // function animation() {
  //   //renderer.clear();
  //   camera.position.x += 1;
  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animation);
  // }
  // function threeStart() {
  //   initThree();
  //   initCamera();
  //   initScene();
  //   initLight();
  //   initObject();
  //   animation();
  // }
  // threeStart();
};
