<?php

$conn = mysqli_connect('localhost','root','','signin');
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$emailid=$_POST['Email'];
$passwordch=$_POST['pwd'];
$username=$_POST['username'];
$mobile=$_POST['Numbers'];


$sql="INSERT INTO `signup`(`First Name`, `Last Name`, `Username`, `Email`, `Phone`, `Password`) VALUES ('$firstname','$lastname','$username','$emailid','$mobile','$passwordch');";
if (mysqli_query($conn, $sql)) {
    header('location:loginpage.html');
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>