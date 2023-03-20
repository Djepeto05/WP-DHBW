// <27.02.2023>
// Elternklasse für alle Komponenten (wie bei den Seiten), damit Flüchtigkeitsfehler beim Hinzufügen der CSS und HTML Dateien
// ausgeschlossen werden und kein redundanter Code entsteht.

// Komponenten haben ähnliche Verhaltensweisen und können von allen Seiten und auch anderen Komponenten
// eingesetzt werden
class Component {
    componentName;
    constructor(componentName, hasCssFile) {
        this.componentName = componentName;
        if (hasCssFile) {
            // lädt CSS Datei in die index.html Datei
            // Wichtig: Dateipfad geht immer von der index.html Datei aus
            // Doppelte \, weil ein \ für eine Sonderaktion steht (z.B. \n für Zeilenumbruch)
            $('head').append(`<link rel="stylesheet" href=".\\components\\${this.componentName}\\${componentName}.css" />`)
        }
    }

    render(parentSelector, callback) {
        // lädt die HTML Datei der Seite in den dafür vorgesehenen Bereich (parentSelector)
        // Wichtig: Load ist eine asynchrone Funktion. D.h. nach dem "load" muss der Inhalt noch nicht 
        // in dem parentSelector sein.
        // Um das sicherzustellen, kann optional eine callback Funktion als zweiter Übergabewert mitgegeben werden

        // <27.02.2023> callback Funktion wird an das aufrufende Objekt weitergegeben 

        // die "load" Funktion überschreibt alle Inhalte des parentSelectors!
        $(parentSelector).load(`.\\components\\${this.componentName}\\${this.componentName}.html`, callback);
    }
}