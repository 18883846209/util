import 'babel-polyfill';
// import { wxShare } from '@wnl/ui';
import '../static/flexible';
import '../css/index.scss';
import utils from '../static/helper';
import Toast from '../toast/toast';
// import '../static/vconsole.min';

// const THREE = require('three');

window.onload = function() {
  let toast = new Toast();
  // let body = document.querySelector('body');
  const press = document.querySelector('.press');
  utils.longPress(press, () => {
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
  $('.show').click(() => {
    // setTimeout(() => {
    //   $('.toast_wrap').removeClass('vshow');
    // }, 800);
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
    toast.show('加载中...', {
      alwaysShow: true
    });
  });
  $('.close').click(() => {
    toast.hide();
  });
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
