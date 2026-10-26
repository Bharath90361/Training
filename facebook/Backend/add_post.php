<?php
// extracting data
header("Content-Type: application/json");

$input = file_get_contents("php://input");

$data = json_decode($input, true);

$userId = $data["user_id"] ?? "";
$friendId = $data["friendId"] ?? "";
$post = $data["post"] ?? "";


if ($userId == $friendId) {
    $friendId = "000";
}

//validating data
if ($userId === "" || $post === "") {
    echo json_encode([
        "success" => false,
        "message" => "User ID and post are required"
    ]);

    exit;
}
//database connection 
require_once "../Database/db.php";
//sql query to insert data into tWall table
$sql = "INSERT 
            INTO tWall (user_id, post,friend_id)
            VALUES (?, ?,?)";

$stmt = $conn->prepare($sql);

$stmt->bind_param("isi", $userId, $post, $friendId);

$stmt->execute();

// query to fetch the latest post after insertion
$sql = "SELECT
            *
        FROM 
            tWall 
        ORDER BY posting_date DESC 
        LIMIT 1";

$stmt = $conn->prepare($sql);

$stmt->execute();

$result = $stmt->get_result();

$posts = $result->fetch_assoc();

// Return the response as JSON
echo json_encode([
    "status" => "OK",
    "success" => true,
    "message" => "Post added successfully",
    "posts" => $posts
]);

$stmt->close();
$conn->close();

?>