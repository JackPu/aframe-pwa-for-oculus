// import 'aframe';

const videoEl = document.querySelector('a-video');

console.log(videoEl);

const btn = document.querySelector('#button');

btn?.addEventListener('click', () => {
  // videoEl?.play();
});

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      videoEl?.play();
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});
