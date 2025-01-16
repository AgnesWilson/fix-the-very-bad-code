import '/scss/style.scss';
import {createHtml} from './src/js/createHtml.mjs';
import toggleLightMode from './src/js/toggleDarkmode.mjs';

function runPage (){
    toggleLightMode();
        createHtml ();
    }

runPage ();




