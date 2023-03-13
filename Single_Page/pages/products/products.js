class Products extends Page {
    constructor(productCategory) {
      super('products', true);
      this.productCategory = productCategory;
    }
  
    async render(parentSelector) {
      super.render(parentSelector, async () => {
        const productItems = await getAllProducts(this.productCategory);
        console.log(`Category: ${this.productCategory}`);
        productItems.forEach((productItem) => {
          const product = new Product(
            productItem.title,
            productItem.price,
            productItem.image,
            productItem.description
          );
          product.render('.products');
        });
      });
    }
  }
  