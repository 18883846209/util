import utils from '../static/helper';

function drag(el) {
  el = typeof el !== 'string' ? el : document.querySelector(el);
  let x0;
  let y0;
  let disx;
  let disy;
  let endx;
  let endy;
  utils.setCss(el, 'position', 'absolute');
  utils.setCss(el, 'zIndex', '9999');
  utils.addEventHandler(el, 'touchstart', (e) => {
    endx = parseInt(utils.getcss(el, 'left').replace('px', ''));
    endy = parseInt(utils.getcss(el, 'top').replace('px', ''));
    x0 = e.targetTouches[0].pageX;
    y0 = e.targetTouches[0].pageY;
  }, false);
  utils.addEventHandler(el, 'touchmove', (e) => {
    let movex = e.targetTouches[0].pageX;
    let movey = e.targetTouches[0].pageY;
    disx = movex - x0;
    disy = movey - y0;
    utils.setCss(el, 'left', (endx + disx) + 'px');
    utils.setCss(el, 'top', (endy + disy) + 'px');
  }, false);
}

export default drag;