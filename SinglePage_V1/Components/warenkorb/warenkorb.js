// <27.02.2023> Eigene Komponente als warenkorb (Popup) zum Anzeigen von Informationen bei Bedarf
class Warenkorb extends Component {
    parentSelector;
    constructor() {
        super('warenkorb', true);
        this.cartItemsList = $('<ul id="cart-items"></ul>');
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
            // Make the cart visible
            warenkorb.addClass('visible');
        }
    }

      

      setTexts(title, content, warenkorb) {
        // The "visible" class must be added in a timeout because the transition will not
        // be executed otherwise
        setTimeout(() => warenkorb.addClass('visible'), 1);
      
        // Set the title and content
        warenkorb.find('.warenkorb-title').text(title);
        warenkorb.find('.warenkorb-content').text(content);
      
        // Append the cart items list
        warenkorb.find('.warenkorb-content').append(this.cartItemsList);
      }
      
      

      addItem(product) {
        console.log(product);
        const cartProduct = $('<li></li>').text(product.title);
        cartProduct.text(product.title + "")
        const removeButton = $('<button class="cart-remove">Remove</button>');

        // Add click event listener for the remove button
        removeButton.on('click', () => {
            cartProduct.remove();
        });

        cartProduct.append(removeButton);
        this.cartItemsList.append(cartProduct);
    }
      
      

    // hide-Funktion wird aufgerufen, wenn warenkorb geschlossen werden soll (von extern oder dem warenkorb selbst)
    hide() {
        const warenkorb = $('#warenkorb');
        // Entfernen der Klasse "visible" löst Transition zum Schließen aus
        warenkorb.removeClass('visible');
    }
}

/*onst parent = $(parentSelector);
        const newProduct = $('<div></div>');
        newProduct.load('.\\components\\product\\product.html', () => {
            newProduct.find('.product-title').text(this.title);
            newProduct.find('.product-price').text(`Preis: ${this.price} €`);
            newProduct.find('.product-image').attr('src', `${this.image}.jpeg`);
            newProduct.find('.product-description').text(this.description);

            parent.append(newProduct);*/

            /*addItem(product) {
                console.log(product)
                const cartProduct = $('<li></li>');
                
         
             }*/