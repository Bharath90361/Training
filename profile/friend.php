<?php

header("Content-Type: application/json");
// extracting data 
$userId = $_GET["id"] ?? "";

if ($userId === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID is required"
    ]);
    exit;
}
//databse connection 
require_once "../database/db.php";
//query
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