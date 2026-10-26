<?php
header("Content-Type: application/json");

//database connection
require_once "../Database/db.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);

$userId = $data["userId"] ?? null;
$friendId = $data["friendId"] ?? null;

if (!$userId || !$friendId) {
    echo json_encode([
        "success" => false,
        "message" => "Missing userId or friendId"
    ]);
    exit;
}

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit;
}
// Query to check if the friend relationship exists
$sql = "SELECT 
            1
        FROM 
            tFriends
        WHERE user_id = ?
        AND friend_id = ?
        LIMIT 1";

$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode([
        "success" => false,
        "message" => "Prepare failed: " . $conn->error
    ]);
    exit;
}

$stmt->bind_param("ii", $userId, $friendId);

if (!$stmt->execute()) {
    echo json_encode([
        "success" => false,
        "message" => "Execute failed: " . $stmt->error
    ]);
    exit;
}

$result = $stmt->get_result();
// Return the result as JSON
echo json_encode([
    "success" => true,
    "isFriend" => $result->num_rows > 0
]);

$stmt->close();
$conn->close();
?>