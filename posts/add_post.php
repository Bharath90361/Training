<?php

header("Content-Type: application/json");

$input = file_get_contents("php://input");

$data = json_decode($input, true);

$userId = $data["user_id"] ?? "";
$post = $data["post"] ?? "";

if ($userId === "" || $post === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID and post are required"
    ]);

    exit;
}

$host = "localhost";
$username = "root";
$password = "Bharath@1234";
$database = "facebook";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database
);

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);

    exit;
}

$sql2 = "INSERT INTO tWall (user_id, post)
        VALUES (?, ?)";

$stmt = $conn->prepare($sql2);

$stmt->bind_param("is", $userId, $post);

$stmt->execute();

$sql = "SELECT * FROM tWall ORDER BY posting_date DESC LIMIT 1";

$stmt = $conn->prepare($sql);

$stmt->execute();

$result = $stmt->get_result();

$posts = $result->fetch_assoc();

echo json_encode([
    "success" => true,
    "message" => "Post added successfully",
    "posts" => $posts
]);

$stmt->close();
$conn->close();

?>