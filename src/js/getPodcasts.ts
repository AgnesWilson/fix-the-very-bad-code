import log from './helpers.ts';

//funktion för att hämta podcasts 
    // Om vi är i utvecklingsmiljö, använd fake data från .env.dev
        // Hämta fake data från .env.dev
            // Returnera fake data
    // Annars, gör API-anropet i produktionsläge

export async function getPodcasts() {
  if (import.meta.env.DEV) {
    log('Laddar fake data utvecklingsmiljö.');

    const fakeData = JSON.parse(import.meta.env.VITE_APP_FAKE_DATA);
    return fakeData;
  } 
  else {
    console.log('Laddar riktiga data från API i produktionsmiljö.');
    
    try {
        // Hämta API-URL från miljövariabel och utför API-anrop
        const response = await fetch(import.meta.env.VITE_APP_API_URL);
        const realData = await response.json();
        return realData;
    } 
    catch (error) {
        console.error('Något gick fel med att hämta API-datan:', error);
        return null;  
    }
}
}
