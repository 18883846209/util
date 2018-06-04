export function addBtnState(dom, el, _class) {
    let move;
    $(document).on('touchend touchstart touchmove touchcancel', dom, function(e) { // eslint-disable-line
      // if (!$(this).hasClass('active')) {
      // 	return;
      // }
      if (e.type === 'touchstart') {
        move = null;
        if (_class) {
          el.addClass(_class);
        } else {
          el.removeClass('hidden');
        }
      } else if (e.type === 'touchmove') {
        if (move) return;
        move = true;
        if (_class) {
          el.removeClass(_class);
        } else {
          el.addClass('hidden');
        }
      } else {
        if (move) return;
        if (_class) {
          el.removeClass(_class);
        } else {
          el.addClass('hidden');
        }
      }
    });
  }
  export function getQueryValue(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    let r = window.location.search.substr(1).match(reg) || window.location.hash.substr(1).match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    }
    return null;
  }
  export function play(el) {
    let firstTouch = true
    // --创建页面监听，等待微信端页面加载完毕 触发音频播放
    document.addEventListener('DOMContentLoaded', function () {
      function audioAutoPlay () {
        // var audio = document.getElementById('audio')
        let _audio = el        
        _audio.play()
        document.addEventListener('WeixinJSBridgeReady', function () {
          _audio.play()
        }, false)
      }
      audioAutoPlay()
    })
    // --创建触摸监听，当浏览器打开页面时，触摸屏幕触发事件，进行音频播放
    document.addEventListener('touchstart', function () {
      function audioAutoPlay () {
        let _audio = el
        if (firstTouch) {
          _audio.play()
        }else {
          return
        }
        firstTouch = false
      }
      audioAutoPlay()
    })
  }
  
  /**
   * [longPress 长按事件]
   * @param {*} el [dom对象]
   * @param {*} fn [回调函数]
   * @param {number} [ms=800] [长按时间]
   */
  export function longPress(el, fn, ms = 800) {
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
