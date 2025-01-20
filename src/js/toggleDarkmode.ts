import log from './helpers';

const toggleLightModeButton = document.querySelector('.toggle-btn')as HTMLButtonElement ;

toggleLightModeButton.addEventListener('click', toggleLightMode);

function toggleLightMode(): void {
  document.body.classList.toggle('lightmode');

  if (document.body.classList.contains('lightmode')){
    toggleLightModeButton.innerHTML='Välj mörkt läge';
    log('Ljust läge');
  } else {
    toggleLightModeButton.innerHTML ='Välj ljust läge';
    log('Mörkt läge');
  }
}

export default toggleLightMode;
