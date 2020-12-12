import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import DataXml from './data.xml';
import DataJson from './data.json';
import Notes from './data.csv';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    console.log(DataXml);
    console.log(DataJson);
    console.log(Notes);

    return element;
}

document.body.appendChild(component());