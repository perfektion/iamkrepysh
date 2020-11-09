<template>
  <section id="video-training" class="iam__video-training">
    <div class="content">
      <h2 class="iam__video-training__title">
        Посмотрите видео, как проходят <br />тренировки в школе <span>I’m Крепыш</span>
      </h2>
      <div class="wrapper">
        <div class="video-youtube video-youtube_overlay">
          <iframe
            id="video-youtube__content"
            class="video-youtube__content video-youtube__content_hide-origin-play-btn"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
            picture-in-picture"
            title="YouTube video player"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/BPw9YcXEn6M?enablejsapi=1&amp;
            origin=http%3A%2F%2Fiamkrepysh.ru&amp;widgetid=1"
          ></iframe>
          <button type="button" class="video-youtube__new-play-btn"></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IamVideoTraining',
});
</script>

<style lang="scss">
.iam__video-training {
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;
  background: $color_grey_bg;
  .content{
    .iam__video-training__title{
      padding-bottom: 50px;
    }
  }
  .wrapper {
    max-width: 888px;
    margin-left: auto;
    margin-right: auto;
    .video-youtube {
      position: relative;
      height: 500px;
      .video-youtube__content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 10px;
      }
    }
    .video-youtube_overlay {
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-image: url(./img/video1.jpg);
        width: 100%;
        height: 100%;
        display: block;
        z-index: 5;
      }
    }
  }
  .video-youtube .video-youtube__new-play-btn {
    width: 62px;
    height: 62px;
    border: none;
    background-color: transparent;
    background-image: url(./img/play.svg);
    background-size: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: 10;
    cursor: pointer;
  }
}
</style>
