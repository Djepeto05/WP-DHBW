
async function getAllProducts(categoryFilter) {
    
    const httpResult = await fetch('http://localhost/2023/index.php');
    if(httpResult.ok) {
        const result = await httpResult.json();
        return result.filter(product => product.category === categoryFilter);
    }
    
    return exampleProducts
}

function postMethode(_id, _title, _price) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": _id,
        "title": _title,
        "price": _price
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://localhost/2023/index.php", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    return 0;
               }
