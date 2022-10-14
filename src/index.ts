const videoEl = document.querySelector('a-video');

console.log(videoEl);

const btn = document.querySelector('#button');

btn?.addEventListener('click', () => {
  // videoEl?.play();
});

AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    this.el.addEventListener('click', function (evt) {
      videoEl?.play();
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});
