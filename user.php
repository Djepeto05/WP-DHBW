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
        if(isset($_GET['login'])){
            $email = $_GET['email'];
            $password = $_GET['password'];
            $sql = "SELECT id,name,email FROM users WHERE email=:email and password=:password";
            $query = $database->prepare($sql);
            $query->bindParam(':email', $email, PDO::PARAM_STR);
            $query->bindParam(':password', $password, PDO::PARAM_STR);
            $query->execute();
            $data = $query->fetch(PDO::FETCH_OBJ);

            echo json_encode($data);
            break;
            
        }

        if(isset($_GET['email'])){
            $email = $_GET['email'];
            $sql = "SELECT id,name,email FROM users WHERE email=:email";
            $query = $database->prepare($sql);
            $query->bindParam(':email', $email, PDO::PARAM_STR);
            $query->execute();
            $results = $query->fetch(PDO::FETCH_OBJ);
            if ($query->rowCount() > 0) {
                echo json_encode($results);break;
            }else{
                echo 0;break;
            }
        }


        if(isset($_GET['user_id'])){
            $id = $_GET['id'];
            $sql = "SELECT id,name,email FROM users WHERE id=:id";
            $query = $database->prepare($sql);
            $query->bindParam(':id', $id, PDO::PARAM_STR);
            $query->execute();
            $results = $query->fetch(PDO::FETCH_OBJ);
            if ($query->rowCount() > 0) {
                echo json_encode($results);break;
            }else{
                echo 0;break;
            }
        }
}
?>
