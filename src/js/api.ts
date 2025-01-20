import log from './helpers.ts';
import { mockData } from './mockData.ts';

//funktion för att hämta podcasts 
    // Om vi är i utvecklingsmiljö, använd fake data från .env.dev
        // Returnera fake data
    // Annars, gör API-anropet i produktionsläge
        // Om det blir något fel med att hämta datan, skriv ett felmeddelande i consolen 

export async function getPodcasts() {

    if (import.meta.env.DEV) {
        log('Laddar fake data utvecklingsmiljö.');
        return mockData;
    }

   return await fetch (import.meta.env.VITE_APP_API_URL)
    .then((data) => data.json())
     .then((json) => json)
     .catch((error) => {
        console.error('Något gick fel med att hämta API-datan:', error);
      return null;
    });
 }

export default getPodcasts;
