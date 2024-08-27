<?php
echo "hello";
$FullName = $_POST['FullName'];
$email_Addres = $_POST['email_Addres'];
$phone_no = $_POST['phone_no'];
$dob = $_POST['dob'];
$gender = $_POST['gender'];
$address = $_POST['address'];

// connect with DataBase...
$conn = new mysqli('localhost', 'root', '', 'trial');
if ($conn->connect_error) {
    die('Connection Failed: ' . $conn->connect_error);
} else {
    // Prepare the SQL statement
    $stmt = $conn->prepare("INSERT INTO regiter (Full_Name, Email_Address, Phone_No, DOB, Gender, Address) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssiiss", $FullName, $email_Addres, $phone_no, $dob, $gender, $address);
    $stmt->execute();
    
    echo "<div style='font-size:40px;margin:100px auto;'>Form Sucessfully Submitted</div>";
    
    

    $stmt->close();
    $conn->close();
}
?>
