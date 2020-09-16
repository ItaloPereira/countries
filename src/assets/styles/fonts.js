import { createGlobalStyle } from 'styled-components';

const NunitoLightWoff2 = '/static/fonts/text/nunitosans-light-webfont.woff2';
const NunitoLightWoff = '/static/fonts/text/nunitosans-light-webfont.woff';

const NunitoSemiBoldWoff2 = '/static/fonts/text/nunitosans-semibold-webfont.woff2';
const NunitoSemiBoldWoff = '/static/fonts/text/nunitosans-semibold-webfont.woff';

const NunitoExtraBoldWoff2 = '/static/fonts/text/nunitosans-extrabold-webfont.woff2';
const NunitoExtraBoldWoff = '/static/fonts/text/nunitosans-extrabold-webfont.woff';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoLightWoff2}) format('woff2'), url(${NunitoLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoSemiBoldWoff2}) format('woff2'), url(${NunitoSemiBoldWoff}) format('woff');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Nunito';
    src: url(${NunitoExtraBoldWoff2}) format('woff2'), url(${NunitoExtraBoldWoff}) format('woff');
    font-weight: 800;
    font-style: normal;
  }
`;

export default Fonts;