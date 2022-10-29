// import 'aframe';

const videoEl = document.querySelector('#video') as HTMLVideoElement;

const btn = document.querySelector('#button');

btn?.addEventListener('click', () => {
  // videoEl?.play();
});
const AFRAME = (window as any).AFRAME;
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      const videoContainer = document.querySelector('video-container') as any;
      videoContainer.visible = true;
      videoEl?.play();
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});
