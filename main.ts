import 'scss/style.scss';
import { createHtml } from './src/js/createHtml.ts';
import toggleLightMode from './src/js/toggleDarkmode.ts';

function runPage (){
  toggleLightMode();
  createHtml();
}

runPage();

// Funktion för Console.log
// OM Vi befinner oss i dev miljö skrivs skonsollmeddelandet ut
export function consoleLog(...sometingToLog: unknown[]): void {
  if (import.meta.env.DEV) {
    console.log(...sometingToLog);
  }
}

// Konrtroll för prod/dev miljö
if (import.meta.env.DEV) {
  document.body.style.border = '3px solid red';
  consoleLog('detta är developmentmiljön!');
}


