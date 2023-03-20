class Home extends Page {
    constructor() {
        super('home');
    }
    
    // Überschreiben der render Funktion der Page - Elternklasse
    render(parentSelector) {
        // Ziel: Alle Inhalte werden von der homeContentService.js Datei geladen und dynamisch
        // in den parentSelector geladen
        
        const contentElements = getAllContent(); 

        // leren des parentSelectors, da "load" Funktion nicht mehr aufgerufen wird
       $(parentSelector).empty();

       // füge die home.html Datei für jedes Element im Array hinzu
        contentElements.forEach((contentElement) => {
            // Erzeuge ein neues Element, damit dort hinein die home.html Datei geladen werden kann
            // das newElement ist noch nicht im DOM (Browser) registriert
            const newElement = $('<div></div>');

            // laden der Datei, damit anschließend der Titel und Inhalt gesetzt werden kann
            newElement.load('.\\pages\\home\\home.html', () => {
                // find - Funktion sucht nach einem Selektor innerhalb des neuen Elementes
                newElement.find('.title').text(contentElement.title);
                newElement.find('.content').text(contentElement.content);
                // Anfügen an den Parent - erst ab jetzt ist es sichtbar im Browser
                $(parentSelector).append(newElement);
            });
        });
    }
}