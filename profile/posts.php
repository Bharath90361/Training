<?php

//fetching data from javascript
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

//query to fetch all posts
$sql = "SELECT * 
        FROM 
            tWall 
        WHERE 
            user_id=? 
        ORDER BY 
            posting_date DESC";

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

    $posts = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode([
        "success" => true,
        "user" => $posts
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