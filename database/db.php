<?php 
$host = "localhost";
$username = "root";
$password = "Bharath@1234";
$database = "facebook";

$conn = new mysqli( $host, $username, $password, $database );

if ($conn->connect_error) {
    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);

    exit;
}
?>