<?php

$conn = mysqli_connect('localhost','root','','signin');
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$buyer=$_POST['bs1'];
$seller=$_POST['bs2'];
$firstname=$_POST['firstname'];
$lastname=$_POST['lastname'];
$emailid=$_POST['Email'];
$address=$_POST['addr'];
$mobile=$_POST['Numbers'];
$bookid=$_POST['Bookid'];
$qty=$_POST['qty'];
$sql="INSERT INTO `buy`(`Buyer`, `Seller`, `First Name`, `Last Name`, `Email`, `Address`, `Phone`, `Book id`, `Quantity`) VALUES ('$buyer','$seller','$firstname','$lastname','$emailid','$address','$mobile','$bookid','$qty');";
if($seller)
{
$sql1="UPDATE `total` SET `Quantity` = Quantity+'$qty' WHERE `total`.`Book id` = '$bookid'";
}
else
{
$sql1="UPDATE `total` SET `Quantity` = Quantity-'$qty' WHERE `total`.`Book id` = '$bookid'";
}
if (mysqli_query($conn, $sql1)) {
    header('location:homepage.html');
} else {
    echo "Error: " . $sql1 . "<br>" . mysqli_error($conn);
}
if (mysqli_query($conn, $sql)) {
    header('location:homepage.html');
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}


mysqli_close($conn);
?>