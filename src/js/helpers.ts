// Funktion för Console.log
// OM Vi befinner oss i dev miljö skrivs skonsollmeddelandet ut
function log(...somethingToLog: unknown[]): void {
    if (import.meta.env.DEV) {
      console.log(...somethingToLog);
    }
  }
  
  // Konrtroll för om man befinner sig i prod-miljö
  // Om så är fallet skrivs "detta är developmentmiljö" ut i konsollen
  // Och en röd kant runt sidan ritas ut 
  if (import.meta.env.DEV) {
    document.body.style.border = '3px solid red';
    log('detta är developmentmiljön!');
  }
  
export default log;