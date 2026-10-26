<?php

header("Content-Type: application/json");
// extracting data
$input = file_get_contents("php://input");
$data = json_decode($input, true);
$userId = $data["userId"];

//connection to database

require_once "../Database/db.php";

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit;
}

//query to fetch user details from tUser table
$sql = "SELECT 
            * 
        FROM 
            tUser 
        WHERE user_id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();

$result = $stmt->get_result();
// Check if any user was found
if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();
    echo json_encode([
        "success" => true,
        "user" => $user
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "User not found"
    ]);
}
?>