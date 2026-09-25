<?php
// extracting data
header("Content-Type: application/json");

$input = file_get_contents("php://input");

$data = json_decode($input, true);

$userId = $data["user_id"] ?? "";
$post = $data["post"] ?? "";

//validating data
if ($userId === "" || $post === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID and post are required"
    ]);

    exit;
}
//database connection 
require_once "../database/db.php";
//sql query
$sql = "INSERT INTO tWall (user_id, post)
            VALUES (?, ?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param("is", $userId, $post);

$stmt->execute();

echo json_encode([
    "success" => true,
    "message" => "Post added successfully"
]);

$stmt->close();
$conn->close();

?>