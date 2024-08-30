<?php
$schoolName = $_POST['schools_Name'];
$CoordinatorName = $_POST['Coordinator_Name'];
$SchoolsEmail = $_POST['Schools_Email'];
$CoordinatorEmail = $_POST['Coordinator_Email'];
$schoolphoneNo = $_POST['school_phone_no'];
$CoordinatorsPhone = $_POST['Coordinators_Phone'];
$SchoolsAddress = $_POST['Schools_Address'];

// database connection
$conn = new mysqli('localhost', 'root','','test');
if($conn->connect_error){
    die('connection Failed : '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("insert into registration(schools_Name, Coordinator_Name, Schools_Email, Coordinator_Email, school_phone_no, Coordinators_Phone, Schools_Address)
    values(?,?,?,?,?,?,?)");
    $stmt->bind_param("ssssiis",$schoolName, $CoordinatorName, $SchoolsEmail, $CoordinatorEmail, $schoolphoneNo, $CoordinatorsPhone, $SchoolsAddress);
    $stmt->execute();
    echo "data is save";
    $stmt->close();
    $conn->close();
}

?>