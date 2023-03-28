<?php
// set header Content-Type to json for automatic formatting in postman
header('Content-Type: application/json');
// important to set Access-Control-Allow-Origin to '*' for backend call from frontend
header('Access-Control-Allow-Origin: *');
// connect to database
$database = new PDO('mysql:host=127.0.0.1;dbname=klamottenshop', "root", "");


// extract http-method
$http_method = $_SERVER['REQUEST_METHOD']; // important for correct statement: call index.php directly in url!
parse_str($_SERVER['QUERY_STRING'], $params); // extract query string to object

// get body as string
$body = file_get_contents('php://input');
// convert string to php object
$decodedBody = json_decode($body, true);

switch ($http_method) {
    case 'GET':
        $query = 'SELECT * FROM orders';
        $statement = $database->prepare($query);
        $statement->execute();

        $data = $statement->fetchAll(PDO::FETCH_ASSOC); // FETCH_ASSOC = remove ids from object
        // convert php object ($data) to string
        echo json_encode($data);
        break;
        
    case 'POST':
        $id = $decodedBody['productID'];
        $customerID = $decodedBody['customerID'];
        $quantity = $decodedBody['quantity'];
        $query = 'INSERT INTO orders (user_id, product_id, quantity) VALUES (' . $id . ', "' . $customerID . '", "' . $quantity . '")';
        $statement = $database->prepare($query);
        $statement->execute();
        echo $body;
        http_response_code(201);
        break;
}
?>