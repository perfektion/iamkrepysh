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

h1 {
  font-size: 2.8125rem;
  font-family: "BIP";
  line-height: 1.37em;
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
</style>
