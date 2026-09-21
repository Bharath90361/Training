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

$host = "localhost";
$username = "root";
$password = "Bharath@1234";
$database = "facebook";

$conn = new mysqli($host, $username, $password, $database);

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit;
}

// $sql = "SELECT * FROM tUser t join tFriends f on t.user_id=f.friend_id join tUser u on u.user_id=f.user_id WHERE u.user_id = ?";
$sql = "select * from tUser where user_id in (select friend_id from tFriends where user_id=?)";

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

    $friends = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode([
        "success" => true,
        "user" => $friends
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