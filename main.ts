import '/scss/style.scss';
import { createHtml } from './src/js/createHtml.js';
import toggleLightMode from './src/js/toggleDarkmode.js';

function runPage (){
  toggleLightMode();
  createHtml();
}

runPage();

// Funktion för Console.log
// OM Vi befinner oss i dev miljö skrivs skonsollmeddelandet ut
export function consoleLog(...sometingToLOg) {
  if (import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log(...sometingToLOg);
  }
}

// Konrtroll för prod/dev miljö
if (import.meta.env.DEV) {
  document.body.style.border = '3px solid red';
  consoleLog('detta är developmentmiljön!');
}


