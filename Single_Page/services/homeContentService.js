const exampleContent = [
    {
        title: 'Überschrift 1',
        content: 'Lorem Ipsum',
    },
    {
        title: 'Überschrift 2',
        content: 'Lorem Ipsum',
    },
    {
        title: 'Überschrift 3',
        content: 'Lorem Ipsum',
    }
];

const exampleProducts = [
    {
        id: 1,
        title: "Test1",
        price: 20,
        category: "Tops",
        image: 'MCM Top 1',

    },
    {
        id: 1,
        title: "Test1",
        price: 20,
        category: "Tops",
        image: 'MCM Top 1',
    },
    {
        id: 1,
        title: "Test1",
        price: 20,
        category: "Pants",
        image: 'MCM Top 1',
    },
   
];


function getAllProducts(categoryFilter) {
    return exampleProducts.filter(product => product.category === categoryFilter);
}

function getAllContent() {
    return exampleContent;
}
