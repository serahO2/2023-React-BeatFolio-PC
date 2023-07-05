import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

/* normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */
html {
    line-height: 1.15;

    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
}

body {
    margin: 0;

}

article,
aside,
footer,
header,
nav,
section {
    display: block;
}

h1 {
    font-size: 2em;
    margin: 0.67em 0;
}

figcaption,
figure,
main {
    display: block;
}

figure {
    margin: 1em 40px;
}

hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}

pre {
    font-family: monospace, monospace;
    font-size: 1em;
}

a {
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}

abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
}

code,
kbd,
samp {
    font-family: monospace, monospace;
    font-size: 1em;
}

dfn {
    font-style: italic;
}

mark {
    background-color: #ff0;
    color: #000;
}

small {
    font-size: 80%;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

audio,
video {
    display: inline-block;
}

audio:not([controls]) {
    display: none;
    height: 0;
}

img {
    border-style: none;
}

svg:not(:root) {
    overflow: hidden;
}

button,
input,
optgroup,
select,
textarea {
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

button{
    cursor: pointer;
    background-color:unset;
}
input{
    box-sizing: border-box;
    padding: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
}
button,
input {
    overflow: visible;
}

button,
select {
    text-transform: none;
}

button,
html [type='button'],
[type='reset'],
[type='submit'] {
    -webkit-appearance: button;
}

button::-moz-focus-inner,
[type='button']::-moz-focus-inner,
[type='reset']::-moz-focus-inner,
[type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

button:-moz-focusring,
[type='button']:-moz-focusring,
[type='reset']:-moz-focusring,
[type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
}

fieldset {
    /* padding: 0.35em 0.75em 0.625em; */
}

legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
}

progress {
    display: inline-block;
    vertical-align: baseline;
}

textarea {
    overflow: auto;
}

[type='checkbox'],
[type='radio'] {
    box-sizing: border-box;
    padding: 0;
}

[type='number']::-webkit-inner-spin-button,
[type='number']::-webkit-outer-spin-button {
    height: auto;
}

[type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

[type='search']::-webkit-search-cancel-button,
[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
}

::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
}

details,
menu {
    display: block;
}

summary {
    display: list-item;
}

canvas {
    display: inline-block;
}

template {
    display: none;
}

[hidden] {
    display: none;
}


/*---------------------------------------------
	reset override
---------------------------------------------*/

* {
    box-sizing: border-box;
    font-family: 'Pretendard', sans-serif;
    padding: 0;
    border: 0;
    font-size: 100%;
    line-height: 1.5;
    vertical-align: baseline;
    font-style: normal;
    box-sizing: border-box;
}

html,
body {
    height: 100%;
    -webkit-text-size-adjust: none;
    -moz-text-size-adjust: none;
    -ms-text-size-adjust: none;
    background-color: #0d141c;
    color: #fff;
}

body {
    width: 100%;
    line-height: 1.5;
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    color: #000;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

button,
input,
textarea,
select,
a {
    font-family: 'Pretendard', sans-serif;
    line-height: 1.5;
    font-size: 15px;
    color: #000;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
    padding: 0;
}

a,
a:link,
a:visited,
a:hover {
    text-decoration: none;
    color: inherit;
}

ul,
li,
ol,
li {
    margin: 0;
    padding: 0;
    list-style: none;
}

dl,
dt,
dd {
    margin: 0;
}

.text-hide {
    font-style: normal !important;
    font-variant-ligatures: normal !important;
    font-variant-caps: normal !important;
    line-height: 0 !important;
    color: transparent !important;
    text-shadow: none !important;
    background-color: transparent !important;
    border: 0 !important;
    z-index: -1;
    border: 0;
    width: 1px;
    height: 1px;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    display: inline-block;
    position: absolute;
}



`;

export default GlobalStyle;
