<?php

header("Content-Type: application/json");

$userId = $_GET["id"] ?? "";

if ($userId === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID is required"
    ]);
    exit;
}
//connecting with database
require_once "../database/db.php";
//query to find the user details
$sql = "SELECT * 
        FROM 
            tUser 
        WHERE 
            user_id = ?";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
    exit;
}

$stmt->bind_param("i", $userId);

$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    $userData = $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "user" => $userData
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" => "User not found"
    ]);
}

$stmt->close();
$conn->close();
?>