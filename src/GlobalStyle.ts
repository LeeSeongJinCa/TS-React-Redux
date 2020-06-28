import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme,
} from 'styled-components';

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
* {
  font-family: 'Noto Sans', 'Noto Sans KR', sans-serif;
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, button {
  margin: 0;
  padding: 0;
  border: 0;
}

article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
  display: block;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

a {
  text-decoration: none;
}

img {
  cursor: pointer;
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

button {
  cursor: pointer;
  font-family: 'Noto Sans', sans-serif;
}

#root {
  width: 678px;
  margin: 50px auto;
  box-shadow: 0 3px 4px #121212;
}
`;

export const globalColor = '#E669FF';
export const globalBackColor = '#923EA3';
export const globalButtonColor = '#D96CF0';
export const globalComplementaryColor = '#6EA329';
export const globalComplementaryBackColor = '#B6F06C';
