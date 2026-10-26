<?php

header("Content-Type: application/json");
// extracting data 
$data = json_decode(file_get_contents("php://input"), true);
$userId = $data["userId"] ?? "";

if ($userId === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID is required"
    ]);
    exit;
}
//databse connection 
require_once "../Database/db.php";
//query to fetch friends of the user from tUser and tFriends tables
$sql = "SELECT 
            u.* 
        FROM 
            tUser u 
        LEFT OUTER JOIN tFriends f ON u.user_id = f.friend_id 
        WHERE 
            f.user_id = ?";

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

// Check if any friends were found
if ($result->num_rows > 0) {

    $friends = $result->fetch_all(MYSQLI_ASSOC);
    // Return the friends as JSON
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