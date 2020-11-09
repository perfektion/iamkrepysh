function onYouTubePlayerReady(event) {
  const targetYoutubeVideo = event.target;
  const videoDomElem = document.getElementById(event.target.getIframe().getAttribute('id'));
  const newPLayBtn = videoDomElem.nextElementSibling;

  newPLayBtn.addEventListener('click', function (event) {
    targetYoutubeVideo.playVideo();
    this.classList.add('hidden');
    videoDomElem.classList.remove('video-youtube__content_hide-origin-play-btn');
    videoDomElem.parentNode.classList.remove('video-youtube_overlay');
  });
}
function onYouTubePlayerAPIReady() {
  let playerYoutube;

  playerYoutube = new YT.Player('video-youtube__content', {
    videoId: 'BPw9YcXEn6M',
    events: {
      onReady: onYouTubePlayerReady,
    },
  });
}
