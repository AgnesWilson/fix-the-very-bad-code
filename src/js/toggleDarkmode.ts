import log from "./helpers";

const toggleLightModeButton = document.querySelector('.toggle-btn')as HTMLButtonElement ;

toggleLightModeButton.addEventListener('click', toggleLightMode);

function toggleLightMode(): void {
  document.body.classList.toggle('darkmode');

  if (document.body.classList.contains('darkmode')){
    toggleLightModeButton.innerHTML='Välj mörkt läge';
    log('Ljust läge');
  } else {
    toggleLightModeButton.innerHTML ='Välj ljust läge';
    log('Mörkt läge');
  }
}

export default toggleLightMode;
