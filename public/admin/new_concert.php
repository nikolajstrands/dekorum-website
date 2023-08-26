<?php include 'header.php'; ?>

<?php if (empty($_POST)) { ?>

  <h2 class="m-5">Ny koncert</h2>
  <div class="m-5">
    <form action="new_concert.php" method="post" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="title" class="form-label">Titel:</label>
        <input type="text" class="form-control" id="titel" aria-describedby="titleHelp" name="title">
      </div>
      <div class="mb-3">
        <label for="date" class="form-label">Dato:</label>
        <input type="date" class="form-control" id="date" name="date">
      </div>
      <div class="mb-3">
        <label for="time" class="form-label">Tidspunkt:</label>
        <input type="time" class="form-control" id="time" name="time">
      </div>
      <div class="mb-3">
        <label for="place" class="form-label">Sted:</label>
        <input type="text" class="form-control" id="place" name="place">
      </div>
      <div class="mb-3">
        <label for="fileToUpload" class="form-label">Billedfil:</label>
        <input type="file" class="form-control" id="fileToUpload" name="fileToUpload">
      </div>
      <div class="mb-3">
        <label for="link" class="form-label">Link til event:</label>
        <input type="text" class="form-control" id="link" name="link">
      </div>
      <div class="mb-3">
        <label for="admission" class="form-label">Entré:</label>
        <input type="text" class="form-control" id="admission" name="admission">
      </div>
      <button type="submit" class="btn btn-primary mt-3">Opret</button>
    </form>

  </div>
<?php

}

if (!empty($_POST)) {
  if (
    empty($_FILES["fileToUpload"]) ||
    empty($_POST["title"]) ||
    empty($_POST["date"]) ||
    empty($_POST["time"]) ||
    empty($_POST["place"]) ||
    empty($_POST["link"]) ||
    empty($_POST["admission"])
  ) {
    echo "<p style='color: red'>Alle felter skal udfyldes!</p>";
  } else {
  
    $target_dir = "../uploads/";
    $image_name = basename($_FILES["fileToUpload"]["name"]);
    $target_file = $target_dir . $image_name;
    $image_error = "";
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if image is not empty
    if (empty($_FILES["fileToUpload"])) {
      $image_error = "Du skal uploade et billede!";
    }

    // Check if image file is a actual image or fake image
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if ($check == false) {
      $image_error = "Filen er ikke et billede";
    }

    // Check if file already exists
    if (file_exists($target_file)) {
      $image_error = "Filen eksisterer allerede";
    }

    // Check file size
    if ($_FILES["fileToUpload"]["size"] > 500000) {
      $image_error = "Filen er for stor";
    }

    // Allow certain file formats
    if (
      $imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
      && $imageFileType != "gif"
    ) {
      $image_error = "Beklager, kun JPG, JPEG, PNG & GIF filer er tilladt.";
      $uploadOk = 0;
    }

    if ($image_error !== "") {
      echo $image_error;
    } else {
      if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {

        $str = file_get_contents('../data.json');
        $json = json_decode($str, true);

        $concerts = $json["concerts"];


        $ids = [];
        foreach ($concerts as $concert) {
          array_push($ids, $concert["id"]);
        }

        $new_id = max($ids) + 1;


        $new_concert = array(
          "id" => $new_id,
          "title" => $_POST["title"],
          "time" => $_POST["date"] . "T" . $_POST["time"],
          "place" => $_POST["place"],
          "imageFileName" => $image_name,
          "link" => $_POST["link"],
          "admission" => $_POST["admission"],
        );
        array_push($concerts, $new_concert);

        $new_data = array(
          "singer" => $json["singers"],
          "concerts" => $concerts
        );
        $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
        file_put_contents("../data.json", $new_json);
      } else {
        echo "Der skete en fejl ved upload af billede";
      }
    }
  }
}
?>
<?php include 'footer.php'; ?>