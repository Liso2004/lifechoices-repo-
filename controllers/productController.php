<?php
require_once './models/Student.php'; // import Models

class ProductController {
  public function handleRequest($method, $id = null) {
    $db = Database::connect(); // fully connected
    $student = new Student($db); // putting the finger on trigger

    // $id = 3
    // $function myID($id){
    // echo "my id is $id";
    // }

    header("Content-Type: application/json");

    switch ($method) {
      case 'GET':
        if ($id) {
          $result = $student->find($id)->fetch_assoc(); 
          echo $result ? json_encode($result) : json_encode(["message" => "product not found"]);
        } else {
          $data = [];
          $result = $student->getAll();
          while ($row = $result->fetch_assoc()) $data[] = $row;
          echo count($data) ? json_encode($data) : json_encode(["message" => "No product found"]);
        }
        break;
      
      // CREATE
      case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        if (empty($data['name']) || empty($data['email'])) {
          http_response_code(422);
          echo json_encode(["error" => "Name and Email required"]);
          exit;
        }
        $status = $student->create($data); // create
        if ($status) {
          $id = $db->insert_id; // new entry
          $newStudent = $student->find($id)->fetch_assoc();
          echo json_encode(["created" => true, "student" => $newStudent]);
        } else {
          http_response_code(500);
          echo json_encode(["error" => "Create failed"]);
        }
        break;

      // Update
      case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        if (strlen($data['name']) < 3) {
          http_response_code(400);
          echo json_encode(["error" => "Name must be at least 3 characters"]);
          exit;
        }
        $status = $student->update($id, $data); // update info
        if ($status) {
          $updated = $student->find($id)->fetch_assoc();
          echo json_encode(["updated" => true, "student" => $updated]);
        } else {
          http_response_code(500);
          echo json_encode(["error" => "Update failed"]);
        }
        break;

      case 'DELETE':
        $exists = $student->find($id)->fetch_assoc();
        if (!$exists) {
          http_response_code(404);
          echo json_encode(["error" => "Student not found"]);
          exit;
        }
        $status = $student->delete($id);
        echo json_encode(["deleted" => $status]);
        break;

      default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
    }
  }
}
