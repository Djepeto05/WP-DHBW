class Products extends Page {
  constructor(productCategory) {
    super('products', true);
    this.productCategory = productCategory;
    this.warenkorb = new Warenkorb();
    this.warenkorb.render('#overlay-content');
    this.handleWarenkorbClick = this.handleWarenkorbClick.bind(this);
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
          productItem.description,
          (product) => this.addToCart(product)
        );
        product.render('.products');
      });
      const warenkorbBtn = document.getElementById('warenkorb-btn');
      warenkorbBtn.addEventListener('click', this.handleWarenkorbClick);
    });
  }

  addToCart(product) {
    this.warenkorb.addItem(product);
    // this.warenkorb.show();
  }

  handleWarenkorbClick() {
    this.warenkorb.show();
  }
}

