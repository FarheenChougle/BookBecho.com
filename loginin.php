<?php

$conn = mysqli_connect('localhost','root','','signin');
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$firstname=$_POST['Username'];
$passwordch=$_POST['Password'];

$sql ="Select * FROM signup where Username='$firstname' and Password='$passwordch'";

$result=mysqli_query($conn,$sql);


$count=mysqli_num_rows($result);

if ($count==1) {
    header('location:homepage.html');
} else {
    echo ('Username or Password incorrect');
}
ob_end_flush();
?>