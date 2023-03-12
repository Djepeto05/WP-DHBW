class ProductDetails extends Page {
    constructor(product) {
        super('details', true);
        this.product = product;
    }

    render(parentSelector) {
        super.render(parentSelector, () => {
            const productDetails = $('.product-details');
            productDetails.find('.product-title').text(this.product.title);
            productDetails.find('.product-price').text(`Preis: ${this.product.price} €`);
            productDetails.find('.product-image').attr('src', `${this.product.image}.jpeg`);
            productDetails.find('.product-description').text(this.product.description);
        })
    }
}