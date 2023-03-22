class Product {
    title;
    price;
    image;
    description;
    constructor(title, price, image, description) {
        this.title = title;
        this.price = price;
        this.description = description;
        this.image = image;
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
                /*
                const selectedProduct = $('<div></div>');
                selectedProduct.addClass('selected-product');
                selectedProduct.append($('<h2></h2>').text(this.title));
                selectedProduct.append($('<p></p>').text(`Preis: ${this.price} €`));
                selectedProduct.append($('<img>').attr('src', `${this.image}.jpeg`));
                selectedProduct.append($('<p></p>').text(this.description));
                */
                
                // neu
                const selectedProductleft = $('<div></div>');
                selectedProductleft.addClass('selected-product-left');
                selectedProductleft.append($('<img>').attr('src', `${this.image}.jpeg`));
                // neu

                // neu
                const selectedProductright = $('<div></div>');
                selectedProductright.addClass('selected-product-right');
                selectedProductright.append($('<h2></h2>').text(this.title));
                selectedProductright.append($('<p></p>').text(this.description));
                selectedProductright.append($('<p></p>').text(`Preis: ${this.price} €`));
                // neu

                const selectedProductXXX = $('<div></div>');
                selectedProductXXX.addClass('selected-product-XXX');
                selectedProductXXX.append(selectedProductleft);
                selectedProductXXX.append(selectedProductright);

                // Altes Element ausblenden und das neue Element einfügen
                parent.hide();
                parent.after(selectedProductXXX);
                
                // Zurück-Button hinzufügen
                /*
                selectedProduct.append($('<button></button>').text('Zurück').click(() => {
                    selectedProduct.remove();
                    parent.show();
                }));
                */

                // neuer Button1 Pimmel hinzufügen anfang
                selectedProductright.append($('<button></button>').text('Zurück').click(() => {
                    selectedProduct.remove();
                    parent.show();
                }));
                // neuer Button1 Pimmel hinzufügen ende

                /*
                selectedProduct.append($('<button></button>').text('Zum Warenkorb hinzufügen').click(() => {
                    console.log('Produkt wurde in den Warenkorb gelegt!');
                }));
                */

                // neuer Button2 Pimmel hinzufügen anfang
                selectedProductright.append($('<button></button>').text('Zum Warenkorb hinzufügen').click(() => {
                    console.log('Produkt wurde in den Warenkorb gelegt!');
                }));
                // neuer Button2 Pimmel hinzufügen ende

            });



            parent.append(newProduct);
        });
    }
}



