import { createGlobalStyle } from 'styled-components';

const icomoonEot = '/static/fonts/icon/icomoon.eot';
const icomoonTtf = '/static/fonts/icon/icomoon.ttf';
const icomoonWoff = '/static/fonts/icon/icomoon.woff';
const icomoonSvg = '/static/fonts/icon/icomoon.svg';

const icons = createGlobalStyle`
  @font-face {
    font-family: 'icomoon';
    src:  url(${icomoonEot}?mkvchp);
    src:  url(${icomoonEot}?mkvchp#iefix) format('embedded-opentype'),
      url(${icomoonTtf}?mkvchp) format('truetype'),
      url(${icomoonWoff}?mkvchp) format('woff'),
      url(${icomoonSvg}?mkvchp#icomoon) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  [class^="icon-"], [class*=" icon-"] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'icomoon' !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .icon-close:before {
    content: "\\e906";
  }
  .icon-arrow-left:before {
    content: "\\e900";
  }
  .icon-chevron-down:before {
    content: "\\e902";
  }
  .icon-magnifier:before {
    content: "\\e903";
  }
  .icon-moon-solid:before {
    content: "\\e904";
  }
  .icon-moon-outline:before {
    content: "\\e905";
  }
  .icon-chevron-left:before {
    content: "\\e901";
  }
`

export default icons;