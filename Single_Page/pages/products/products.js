class Product extends Page {
    constructor() {
        // call parent constructor to load html code
        super('product', true);
        this.productItems = getAllProducts()
    }
}