import _ from 'lodash'
import './style.css'
import Icon from './icon.png';
import Data from './data.xml';
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

  // the way I get these files is also useful for data visualisation too, 
  // instead of making an ajax request and parsing the data at runtime you 
  // can load it into your module during the build process so that the parsed 
  // data is ready to go as soon as the module hits the browser.
  // apparently only the default export of JSON modules can be used without warning.
  // so no {} imports, it will throw an error
  console.log(Notes)
  console.log(Data)

  return element;
}

document.body.appendChild(component());