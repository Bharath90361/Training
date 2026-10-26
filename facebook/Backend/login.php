<?php

session_start();

header("Content-Type: application/json");

$input = file_get_contents("php://input");
$data = json_decode($input, true);

$credential = $data["credential"] ?? "";
$pass = $data["password"] ?? "";

if ($credential === "" || $pass === "") {
    echo json_encode([
        "success" => false,
        "message" => "All fields are required"
    ]);
    exit;
}
//connection to database
require_once "../Database/db.php";

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);
    exit;
}
//query to fetch user details from tUser table
$sql = "SELECT 
            * 
        FROM 
            tUser 
        WHERE Phone = ? OR Email_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $credential, $credential);
$stmt->execute();

$result = $stmt->get_result();
// Check if any user was found
if ($result->num_rows > 0) {

    $user = $result->fetch_assoc();

    if ($pass === $user["Password"]) {

        // Create a new session ID after login
        session_regenerate_id(true);

        // Store the logged-in user's ID
        $_SESSION["user_id"] = $user["user_id"];

        echo json_encode([
            "success" => true,
            "message" => "Login successful"
        ]);

    } else {
        echo json_encode([
            "success" => false,
            "message" => "Incorrect password"
        ]);
    }

} else {
    echo json_encode([
        "success" => false,
        "message" => "Invalid credentials"
    ]);
}

$stmt->close();
$conn->close();

?>