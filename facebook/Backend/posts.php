<?php

header("Content-Type: application/json");

$getuserId = $_GET["id"] ?? "";

if ($getuserId === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID is required"
    ]);
    exit;
}

require_once "../Database/db.php";

// Fetch user details
$sql = "SELECT 
            * 
        FROM 
            tUser 
        WHERE user_id = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
    exit;
}

$stmt->bind_param("i", $getuserId);
$stmt->execute();

$userResult = $stmt->get_result();
$user = $userResult->fetch_assoc();
$stmt->close();

if (!$user) {
    echo json_encode([
        "success" => false,
        "message" => "User not found"
    ]);
    $conn->close();
    exit;
}

// Fetch user's posts
$sql = "SELECT 
            * 
        FROM 
            tWall 
        WHERE user_id = ?
        ORDER BY posting_date DESC";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => $conn->error
    ]);
    $conn->close();
    exit;
}

$stmt->bind_param("i", $getuserId);
$stmt->execute();

$postResult = $stmt->get_result();
$posts = $postResult->fetch_all(MYSQLI_ASSOC);

echo json_encode([
    "success" => true,
    "posts" => $posts,
    "user" => $user
]);

$stmt->close();
$conn->close();
?>