<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php

if (!empty($_GET)) {

  $id = $_GET["id"];

  if (empty($id)) {
    echo "Intet id sendt med!";
  } else {

    $concert_to_edit = getConcertById($id);
    $concert_date = substr($concert_to_edit["time"], 0, 10);
    $concert_time = substr($concert_to_edit["time"], 11, 8);    

?>

    <h2 class="m-5">Rediger koncert</h2>
    <div class="m-5">
      <form action="edit_concert.php" method="post" enctype="multipart/form-data">
        <input type="hidden" id="id" name="id" value=<?php echo $id ?>>
        <div class="mb-3">
          <label for="title" class="form-label">Titel:</label>
          <input type="text" class="form-control" id="titel" aria-describedby="titleHelp" name="title" value="<?php echo $concert_to_edit["title"] ?>">
          <div id="titleHelp" class="form-text">F.eks. <em>Musik af mulden</em></div>
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Dato:</label>
          <input type="date" class="form-control" id="date" name="date" value=<?php echo $concert_date ?>>
        </div>
        <div class="mb-3">
          <label for="time" class="form-label">Tidspunkt:</label>
          <input type="time" class="form-control" id="time" name="time" value=<?php echo $concert_time ?>>
        </div>
        <div class="mb-3">
          <label for="place" class="form-label">Sted:</label>
          <input type="text" class="form-control" id="place" name="place" aria-describedby="placeHelp" value="<?php echo $concert_to_edit["place"] ?>">
          <div id="placeHelp" class="form-text">F.eks. <em>De gamles bys kirke</em></div>

        </div>
        <div class="mb-3">
          <label for="fileToUpload" class="form-label">Billedfil:</label>
          <input type="file" class="form-control" id="fileToUpload" name="fileToUpload" aria-describedby="fileToUploadHelp">
          <div id="fileToUploadHelp" class="form-text">Skal være jpg eller jpeg og størrelsen 580 x 380 pixel.</div>
        </div>
        <input type="hidden" id="oldImageFileName" name="oldImageFileName" value=<?php echo $concert_to_edit["imageFileName"] ?>>
        <div class="mb-3">
          <label for="link" class="form-label">Link til event:</label>
          <input type="text" class="form-control" id="link" name="link" aria-describedby="linkHelp" value="<?php echo $concert_to_edit["link"] ?>">
          <div id="linkHelp" class="form-text">F.eks. link til Facebook-event</div>

        </div>
        <div class="mb-3">
          <label for="admission" class="form-label">Entré:</label>
          <input type="text" class="form-control" id="admission" name="admission" aria-describedby="admissionHelp" value="<?php echo $concert_to_edit["admission"] ?>">
          <div id="admissionHelp" class="form-text">F.eks. <em>Gratis adgang</em> eller <em>Entré: 80 kr.</em></div>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" name="published" id="published" <?php echo $concert_to_edit["published"] ? "checked" : "" ?> >
          <label class="form-check-label" for="published">Publiceret</label>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Opdater</button>
      </form>
    </div>
<?php
  }
}

if (!empty($_POST)) {

  $id = $_POST["id"];
  $published = $_POST["published"] == "on";

  if (empty($_FILES["fileToUpload"]["name"])) {

    print_r($_POST);

    // just update data, using old image file name
    $updated_concert = array(
      "id" => $id,
      "title" => $_POST["title"],
      "time" => $_POST["date"] . "T" . $_POST["time"],
      "place" => $_POST["place"],
      "imageFileName" => $_POST["oldImageFileName"],
      "link" => $_POST["link"],
      "admission" => $_POST["admission"],
      "published" => $published,
    );
    replaceConcertById($id, $updated_concert);

  } else {

    // Update data and image-file

    $target_dir = "../uploads/";
    $image_name = basename($_FILES["fileToUpload"]["name"]);
    $target_file = $target_dir . $image_name;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      $updated_concert = array(
        "id" => $id,
        "title" => $_POST["title"],
        "time" => $_POST["date"] . "T" . $_POST["time"],
        "place" => $_POST["place"],
        "imageFileName" => $image_name,
        "link" => $_POST["link"],
        "admission" => $_POST["admission"],
        "published" =>  $published
      );

      replaceConcertById($id, $updated_concert);
    } else {
      echo "Der skete en fejl ved upload af billede";
    }
  }
  echo "<p style='color: green'>Koncerten blev opdateret!</p>";
}


?>

<?php include 'footer.php'; ?>