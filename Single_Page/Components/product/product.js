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
            newProduct.find('.product-image').attr('src',`${this.image}.jpeg`)
            parent.append(newProduct);
        });
    }
}