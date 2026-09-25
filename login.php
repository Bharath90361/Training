<?php

header("Content-Type: application/json");

$input = file_get_contents("php://input");

$data = json_decode($input, true);

$user = $data["name"] ?? "";


if ($user === "") {

    echo json_encode([
        "success" => false,
        "message" => "Name is required"
    ]);

    exit;
}

require_once "database/db.php";

if ($conn->connect_error) {

    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);

    exit;
}

$sql = "SELECT * 
        FROM 
            tUser 
        WHERE 
            Name = ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("s", $user);

$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows > 0) {

    $userData = $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "user_id" => $userData["user_id"]
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