<?php
$target_dir = "images/";
$target_file = $target_dir . basename($_FILES["myFile"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
$image_dimensions = getimagesize($_FILES[$target_file]);
$image_width = $image_dimensions[0];
$image_height = $image_dimensions[1];


// Check if image file is a actual image or fake image
if(isset($_POST["submit"])){
  $check = getimagesize($_FILES["myFile"]["tmp_name"]);
  if($check !== false){
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}


// Checks for Images height and width
if($image_width != "622" || $image_height != "299") {
  echo "This image has to be 622x299";
  $uploadOk = 0;
}

// Check if file already exists
if(file_exists($target_file)){
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}

//Check if the file is an image file
if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif"){
  echo "This file has to be an image file";
  $uploadOk = 0;
}

//check if $uploadOk is set to 0 by an error
if ($uploadOk == 0){
  echo "Sorry, your file was not uploaded";

  // if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["myFile"]["tmp_name"], $target_file)){
    echo "The file ". htmlspecialchars( basename( $_FILES["myFile"]["name"])). "has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>