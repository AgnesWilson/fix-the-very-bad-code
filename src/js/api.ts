import log from './helpers.ts';
import { mockData } from './mockData.ts';

const errorMsg = document.querySelector('#errorMsg') as HTMLElement;

// funktion för att hämta podcasts
// Om vi är i utvecklingsmiljö, använd fake data från .env.dev
// Returnera fake data
// Annars, gör API-anropet i produktionsläge
// Om det blir något fel med att hämta datan, skriv ett felmeddelande i consolen

async function getPodcasts() {

  if (import.meta.env.DEV) {
    log('Laddar fake data utvecklingsmiljö.');
    // eslint-disable-next-line max-len, no-console
    console.warn('Datan hämtas nu från ett lokalt Object (mockData.ts) pga. att du är i utvecklingsmiljö. Kör pnpm run build + preview för att testa mot det riktiga API:et');
    return mockData;
  }

  return await fetch(import.meta.env.VITE_APP_API_URL)
    .then((data) => data.json())
    .then((json) => json)
    .catch((error) => {
      log('Något gick fel med att hämta API-datan:', error);
      errorMsg.innerHTML = 'Något gick fel med hämtningen av poddarna.';
      return null;
    });
}

export default getPodcasts;
