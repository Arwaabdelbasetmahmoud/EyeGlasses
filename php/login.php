<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "hello";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
if (empty($name) || empty($email) || empty($password)) {
    echo "All fields are required.";
    exit;
}
$sql = "INSERT INTO registeration(name, email, password) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
$conn->close();
?>
