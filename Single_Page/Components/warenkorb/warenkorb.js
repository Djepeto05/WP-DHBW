// <27.02.2023> Eigene Komponente als warenkorb (Popup) zum Anzeigen von Informationen bei Bedarf
class Warenkorb extends Component {
    parentSelector;
    constructor() {
        super('warenkorb', true);
    }

    render(parentSelector) {
        // Überschreiben der render-Funktion der "Component"-Klasse und sichern des parentSelectors
        // Es wird nichts bei render ins DOM hinzugefügt
        this.parentSelector = parentSelector;
    }

    // Show Funktion wird von anderen Komponenten/Seiten aufgerufen, um das warenkorb anzuzeigen
    show(title, content, onFinishedCallback) {
        let warenkorb = $('#warenkorb');
        // Wenn warenkorb nicht existiert anlegen...
        if(warenkorb.length === 0) {
            // Aufruf der render Funktion der Elternklasse ("Component") mit dem gespeicherten parentSelector
            // Wichtig: load ist asynchron! Deshalb muss in einer Callback-Funktion die neuen Inhalte gesetzt werden
            super.render(this.parentSelector, () => {
                warenkorb = $('#warenkorb');

                // Setzen der Texte
                this.setTexts(title, content, warenkorb);

                // OnClick Eventlistener

                // Wenn warenkorb im Overlay geklickt wird, dann schließen
                warenkorb.on('click', (clickArguments) => {
                    // gecklicktes Element ist das warenkorb
                    if(clickArguments.target.id === warenkorb.get(0).id) {
                        this.hide();
                    }
                });

                // Wenn "Confirm" geklickt wird, dann warenkorb schließen und Information an aufrufendes Element übergeben (true = Confirmation)
                warenkorb.find('.warenkorb-confirm').on('click', () => {
                    this.hide();
                    onFinishedCallback(true);
                });

                // Wenn "Cancel" geklickt wird, dann warenkorb schließen und Information an aufrufendes Element übergeben (false = Cancel)
                warenkorb.find('.warenkorb-cancel').on('click', () => {
                    this.hide();
                    onFinishedCallback(false);
                });
            });
        } else {
            // Überschreiben der Texte, wenn ein warenkorb schon existiert
            this.setTexts(title, content, warenkorb);
        }
    }

    setTexts(title, content, warenkorb) {
        // Die "visible" Klasse muss in einem timeout hinzugefügt werden, weil die Transition sonst nicht 
        // ausgeführt wird
        setTimeout(() => warenkorb.addClass('visible'), 1);

        // Setzen des Titels und des Inhaltes
        warenkorb.find('.warenkorb-title').text(title);
        warenkorb.find('.warenkorb-content').text(content);
    }

    addItem(product) {
       console.log(product)
    }

    // hide-Funktion wird aufgerufen, wenn warenkorb geschlossen werden soll (von extern oder dem warenkorb selbst)
    hide() {
        const warenkorb = $('#warenkorb');
        // Entfernen der Klasse "visible" löst Transition zum Schließen aus
        warenkorb.removeClass('visible');
        warenkorb.on('transitionend', () => {
            // erst nach Transition vom DOM entfernen, damit diese noch erfolgreich ausgeführt wird
            warenkorb.remove();
        });
    }
}