<?php

$name = $_POST['name'];
$email = $_POST['email'];
$pass = $_POST['password'];
$conf_pass = $_POST['confirm-password'];

if (!empty($name) || !empty($email) || !empty($pass) || !empty($conf_pass)) {
$host = "localhost";
$user = "root";
$pass = "";
$db = "dkcom";

$conn = new mysqli($host, $user, $pass, $db);

if (mysqli_connect_error()) {
    die('Connect Error('.mysqli_connect_errno().')'.mysqli_connect_error());
}
else {
    $select = "select email from user_det Where email = ? Limit 1";
    $insert = "insert into user_det (name, email, pass, conf_pass)  values(?, ?, ?, ?)";

    $stmt = $conn->prepare($select);
    $stmt->bind_param("s",$email);
    $stmt -> execute();
    $stmt -> bind_result($email);
    $stmt -> store_result();
    $rnum = $stmt->num_rows;

    if ($rnum == 0) {
        $stmt->close();
        $stmt = $conn->prepare($insert);
        $stmt->bind_param("ssss", $user,$email,$pass,$conf_pass);
        $stmt->execute();
        echo"New User: '$user' Registered Successfully";
    } echo "Someine already registered using this email :/";

}
$stmt->close();
$conn->close();



    
} else {
    echo"All fields are required";
    die();
}

?>