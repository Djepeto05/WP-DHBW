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
        id: 2,
        title: "Test2",
        price: 20,
        category: "Tops",
        image: 'MCM Top 1',
    },
    {
        id: 3,
        title: "Test3",
        price: 20,
        category: "Pants",
        image: 'MCM Top 1',
    },
    {
        id: 4,
        title: "Test4",
        price: 20,
        category: "Pants",
        image: 'MCM Top 2',
    },
    {
        id: 5,
        title: "Test5",
        price: 20,
        category: "Tops",
        image: 'MCM Top 2',
    },
   
];


function getAllProducts(categoryFilter) {
    return exampleProducts.filter(exampleProducts => exampleProducts.category === categoryFilter);
}

function getAllContent() {
    return exampleContent;
}
