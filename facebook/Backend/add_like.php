<?php

header("Content-Type: application/json");

require_once "../Database/db.php";

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!is_array($data)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid JSON input"
    ]);
    exit;
}

$post_Id = filter_var(
    $data["post_id"] ?? null,
    FILTER_VALIDATE_INT
);

$action = $data["result"] ?? "";
$table = $data["table"] ?? "";

// Check database connection
if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit;
}

// Allow only the table names used by your application
$allowedTables = ["posts", "userPosts"];

if (!in_array($table, $allowedTables, true)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid table name"
    ]);
    $conn->close();
    exit;
}

// Validate post ID
if ($post_Id === false || $post_Id === null || $post_Id <= 0) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid post ID"
    ]);
    $conn->close();
    exit;
}

// Validate action
if (!in_array($action, ["like", "unlike"], true)) {
    echo json_encode([
        "success" => false,
        "message" => "Invalid action"
    ]);
    $conn->close();
    exit;
}

try {

    // Fetch likes from the table received from JavaScript
    $sql = "SELECT 
                likes 
            FROM 
                `$table` 
            WHERE post_id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $post_Id);
    $stmt->execute();

    $queryResult = $stmt->get_result();
    $post = $queryResult->fetch_assoc();

    $stmt->close();

    if (!$post) {
        echo json_encode([
            "success" => false,
            "message" => "Post not found"
        ]);
        $conn->close();
        exit;
    }

    // Update the likes count
    $likes = (int) $post["likes"];

    if ($action === "like") {
        $likes++;
    } else {
        $likes = max(0, $likes - 1);
    }

    // Update the same table
    $sql = "UPDATE 
                `$table`
            SET 
                likes = ? 
            WHERE post_id = ?";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ii", $likes, $post_Id);
    $stmt->execute();
    $stmt->close();

    echo json_encode([
        "success" => true,
        "message" => "Likes updated successfully",
        "likes" => $likes,
        "table" => $table
    ]);

} catch (Exception) {


    echo json_encode([
        "success" => false,
        "message" => "Failed to update likes"
    ]);
}

$conn->close();
?>