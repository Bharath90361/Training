<?php
$q=$_GET["name"]??"";
$host = "localhost";
$username = "root";
$password = "Bharath@1234";
$database = "facebook";

$conn = new mysqli(
    $host,
    $username,
    $password,
    $database
);

if ($conn->connect_error) {

    echo json_encode([
        "success" => false,
        "message" => "Database connection failed"
    ]);

    exit;
}


$search = "%" . $q . "%";

$sql = "SELECT Name FROM tUser WHERE name LIKE ?";

$stmt = $conn->prepare($sql);

$stmt->bind_param("s", $search);


$stmt->execute();

$result = $stmt->get_result();
if ($result->num_rows > 0) {

    $users = $result->fetch_all(MYSQLI_ASSOC);

    echo json_encode([
        "success" => true,
        "user" => $users
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