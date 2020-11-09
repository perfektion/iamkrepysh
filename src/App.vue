<template>
  <router-view />
</template>

<style lang="scss">
*,
::before,
::after {
  box-sizing: inherit;
  font-family: inherit;
  line-height: 1;
}

html {
  height: 100%;

  font-family: $font_family;
  font-weight: 400;

  line-height: 1;

  box-sizing: border-box;
}

body {
  height: 100%;

  margin: 0;
  padding: 0;
}

p {
  line-height: 1.48em;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "BIP";
  color: #000;
  span {
    color: $color_accent;
  }
}

h1 {
  font-size: 2.8125rem;
  line-height: 1.37em;
}

h2 {
  font-size: 1.875rem;
  line-height: 1.3em;
}

.visually_hidden:not(:focus):not(:active) {
  position: absolute;

  overflow: hidden;
  clip: rect(0 0 0 0);

  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;

  white-space: nowrap;

  border: 0;

  clip-path: inset(100%);
}

.hidden {
  display: none !important;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

main {
  flex: 1 0 auto;
}

.content {
  max-width: $width_max;
  margin: 0 auto;
  position: relative;
}

@media screen and (max-width: $media_sm) {
  h1{
    font-size: 1.875rem;
  }
  h2{
    font-size: 1.5rem;
  }
  .content {
    max-width: 90%;
  h2{
    width: 100%;
  }
  }
}

@media screen and (max-width: $media_sm) {
  .content {
    max-width: 90%;
  }
}
@media screen and (max-width: $media_md) {
  .content {
    max-width: 90%;
  }
}
@media screen and (max-width: $media_lg) {
  .content {
    max-width: 90%;
  }
}
@media screen and (max-width: $media_xl) {
  .content {
    max-width: 96%;
  }
}
</style>
