/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "mdc" }]*/

import {MDCTopAppBar} from '@material/top-app-bar';
import {MDCRipple} from '@material/ripple';

const iconButtonRipple = new MDCRipple(document.querySelector('.mdc-icon-button'));
iconButtonRipple.unbounded = true;

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const mdcTopAppBar = new MDCTopAppBar(topAppBarElement);



import mdcIcon from './res/icon.png';

import './app.scss';

//import mdcSecond from './second_page';

//import mdcHtml from './second_page.html';

