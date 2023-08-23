<html>
<body>


<h1>Koncert-administration</h1>

<h2>Opret ny koncert</h2>
<form action="test.php" method="post" enctype="multipart/form-data">
Titel: <input type="text" name="title"><br>
Dato: <input type="date" name="date"><br>
Tidspunkt:  <input type="time" name="time"><br>
Sted: <input type="text" name="place"><br>
Billedfil: <input type="file" name="fileToUpload" id="fileToUpload"><br>
Link: <input type="text" name="link"><br>
Entré: <input type="text" name="admission"><br>

<input type="submit">
</form>




<?php 



$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }

}
  
// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
  }

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
  }

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
  echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}


?>



<?php if (!empty($_POST)) {?>
    <p style="color: red">Koncert med titel <?php echo $_POST["title"]; ?> oprettet!</p>
    <div>Titel:  <?php echo $_POST["title"]; ?></div>
    <div>Tidspunkt:  <?php echo $_POST["date"] . "T" . $_POST["time"] ; ?></div>


    
    <?php } ?>



<h2>Koncerter:</h2>


<?php

$str = file_get_contents('../data.json');
$json = json_decode($str, true);

$concerts = $json["concerts"];



if(isset($_POST["submit"])) {

    


$target_dir = "../uploads/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);

    $newConcert = array(
        "id"=>"1000", 
        "title"=>$_POST["title"], 
        "time"=>$_POST["date"] . "T" . $_POST["time"],
        "place"=>$_POST["place"],
        "imageFileName"=>$target_file,
        "link"=>$_POST["link"],
        "admission"=>$_POST["admission"],
    );

    print_r($newConcert);
}


foreach($concerts as $concert) {

    echo("<div>" . $concert["id"] . "</div>");
    echo ("<h3>" . $concert["title"] . "</h3>");
    echo("<div>" . $concert["time"] . "</div>");
    echo("<div>" . $concert["place"] . "</div>");
    echo("<div>" . $concert["imageFileName"] . "</div>");
    echo("<div>" . $concert["link"] . "</div>");
    echo("<div>" . $concert["admission"] . "</div>");
    echo("<br /><br />");

}

?>

</body>
</html>
