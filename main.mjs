import '/scss/style.scss';
import { createHtml } from './src/js/createHtml.mjs';
import toggleLightMode from './src/js/toggleDarkmode.mjs';

function runPage (){
  toggleLightMode();
  createHtml();
}

runPage();

export function consoleLog(parameter) {
  // eslint-disable-next-line no-console
  console.log(parameter);
}





