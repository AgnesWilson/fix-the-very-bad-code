import { consoleLog } from '../../main.ts';
const toggleLightModeButton = document.querySelector('.toggle-btn');

toggleLightModeButton.addEventListener('click', toggleLightMode);

function toggleLightMode() {
  document.body.classList.toggle('darkmode');

  if (document.body.classList.contains('darkmode')){
    toggleLightModeButton.innerHTML='Välj mörkt läge';
    consoleLog('Ljust läge');
  } else {
    toggleLightModeButton.innerHTML ='Välj ljust läge';
    consoleLog('Mörkt läge');
  }
}

export default toggleLightMode;
