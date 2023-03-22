<?php
// set header Content-Type to json for automatic formatting in postman
header('Content-Type: application/json');

// important to set Access-Control-Allow-Origin to '*' for backend call from frontend
header('Access-Control-Allow-Origin: *');
// connect to database
$database = new PDO('mysql:host=127.0.0.1;dbname=blog_content', "root", "");

// extract http-method
$http_method = $_SERVER['REQUEST_METHOD']; // important for correct statement: call index.php directly in url!
parse_str($_SERVER['QUERY_STRING'], $params); // extract query string to object

// get body as string
$body = file_get_contents('php://input');
// convert string to php object
$decodedBody = json_decode($body, true);

switch ($http_method) {
    case 'GET':
        // SELECT * FROM home_content
        $query = 'SELECT * FROM home_content';
        $statement = $database->prepare($query);
        $statement->execute();

        $data = $statement->fetchAll(PDO::FETCH_ASSOC); // FETCH_ASSOC = remove ids from object
        // convert php object ($data) to string
        echo json_encode($data);
        break;
    case 'POST':
        $query = 'INSERT INTO home_content (id, title, price, image, description, category) VALUES (:id, :title, :price, :image, :description, :category)';
        $statement = $database->prepare($query);
        $statement->bindParam(':id', $decodedBody['id']);
        $statement->bindParam(':title', $decodedBody['title']);
        $statement->bindParam(':price', $decodedBody['price']);
        $statement->bindParam(':image', $decodedBody['image']);
        $statement->bindParam(':description', $decodedBody['description']);
        $statement->bindParam(':category', $decodedBody['category']);

        

        $statement->execute();
        echo $body;
        http_response_code(201);
        break;
    case 'PATCH':
        // UPDATE home_content SET id = id, title = title, content = content WHERE id = id;
        $query = 'UPDATE home_content SET id=:id, title=:title, content=:content WHERE id=:id';
        $statement = $database->prepare($query);
        $statement->bindParam(':id', $decodedBody['id']);
        $statement->bindParam(':title', $decodedBody['title']);
        $statement->bindParam(':content', $decodedBody['content']);
        $statement->execute();
        echo $body;
        http_response_code(200);
        break;
    case 'DELETE':
        // DELETE FROM home_content WHERE id = id;
        if($params == null || $params['id'] == null) {
            http_response_code(400);
            echo 'id expected as query parameter';
            return;
        }
        $query = 'DELETE FROM home_content WHERE id=:id';
        $statement = $database->prepare($query);
        $statement->bindParam(':id', $params['id']);
        $statement->execute();
        http_response_code(204);
        break;
}
?>