
async function getAllProducts(categoryFilter) {
    
    const httpResult = await fetch('http://localhost/Single_Page/index.php');
    if(httpResult.ok) {
        const result = await httpResult.json();
        return result.filter(product => product.category === categoryFilter);
    }
    
    return exampleProducts
}



  