class Products extends Page {
    constructor(productCategory) {
        super('products', true);
        this.productItems = getAllProducts(productCategory);
    }

    render(parentSelector) {
        super.render(parentSelector, () => {
            this.productItems.forEach((productItem) =>
            {
                const product = new Product(productItem.title, productItem.price, productItem.image, productItem.description);
                product.render('.products');
            })
        })
    }
}