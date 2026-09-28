<?php

$input = file_get_contents("php://input");

$data = json_decode($input, true);
$userId = $data["user_id"];
$name = $data["name"] ?? "";
$email = $data["email"] ?? "";
$pass = $data["password"] ?? "";
$address = $data["address"] ?? "";
$phone = $data["phone"] ?? "";

if ($userId === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID is required"
    ]);
    exit;
}

require_once "../database/db.php";

$sql = "UPDATE
            tUser 
        SET 
            Name = ?, 
            Email_id = ?, 
            Password = ?, 
            Address = ?, Phone = ? 
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

$stmt->bind_param("ssssii", $name, $email, $pass, $address, $phone, $userId);

$stmt->execute();



    echo json_encode([
        "success" => true,
        "user" => $userData
    ]);


$stmt->close();
$conn->close();
?>