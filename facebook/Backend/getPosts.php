<?php
//connection to database
require_once "../Database/db.php";


if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit;
}
//query to fetch all posts from posts table
$sql = "SELECT 
            * 
        FROM 
            posts";
$stmt = $conn->prepare($sql);
$stmt->execute();
$result = $stmt->get_result();
// Check if any posts were found
if ($result->num_rows > 0) {
    $posts = $result->fetch_all(MYSQLI_ASSOC);
    // Return the posts as JSON
    echo json_encode([
        "success" => true,
        "post" => $posts
    ]);
} else {
    echo json_encode([
        "success" => false,
        "message" => "No posts found"
    ]);
}
?>