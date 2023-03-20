class Product {
    title;
    price;
    image;
    description;
    addToCart;
    constructor(title, price, image, description, addToCart) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
        this.addToCart = addToCart;
    }

    render(parentSelector) {
        const parent = $(parentSelector);
        const newProduct = $('<div></div>');
        newProduct.load('.\\components\\product\\product.html', () => {
            newProduct.find('.product-title').text(this.title);
            newProduct.find('.product-price').text(`Preis: ${this.price} €`);
            newProduct.find('.product-image').attr('src', `${this.image}.jpeg`);
            newProduct.find('.product-description').text(this.description);

            // Event Listener hinzufügen
            newProduct.click(() => {
                // Neues Element für das ausgewählte Produkt erstellen
                const selectedProduct = $('<div></div>');
                selectedProduct.addClass('selected-product');
                selectedProduct.append($('<h2></h2>').text(this.title));
                selectedProduct.append($('<p></p>').text(`Preis: ${this.price} €`));
                selectedProduct.append($('<img>').attr('src', `${this.image}.jpeg`));
                selectedProduct.append($('<p></p>').text(this.description));

                // Altes Element ausblenden und das neue Element einfügen
                parent.hide();
                parent.after(selectedProduct);

                // Zurück-Button hinzufügen
                selectedProduct.append($('<button></button>').text('Zurück').click(() => {
                    selectedProduct.remove();
                    parent.show();
                }));

                selectedProduct.append($('<button></button>').text('Zum Warenkorb hinzufügen').click(() => {
                    this.addToCart(this);
                    
                }));

                
            });



            parent.append(newProduct);
        });
    }
}
/*
// Array für den Warenkorb
const cart = [];

// Funktion zum Hinzufügen eines Produkts zum Warenkorb
function addToCart(product) {
    cart.push(product);
    console.log(`Das Produkt "${product.title}" wurde zum Warenkorb hinzugefügt.`);

}
*/