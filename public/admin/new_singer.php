<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php if (empty($_POST)) {
  $images = getOldImageNames();

?>
  <h2 class="m-5">Ny sanger</h2>
  <div class="m-5">
    <form action="new_singer.php" method="post" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="title" class="form-label">Navn:</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" name="name">
        <div id="nameHelp" class="form-text">F.eks. <em>Nikolaj Strands</em></div>
      </div>
      <div class="mb-3">
        <label for="part" class="form-label">Stemmetype:</label>
        <input type="text" class="form-control" id="part" name="part" aria-describedby="partHelp">
        <div id="partHelp" class="form-text">F.eks. <em>Tenor</em></div>
      </div>
      <div class="mb-3">
        <label for="fileToUpload" class="form-label">Billedfil:</label>
        <input type="file" class="form-control" id="fileToUpload" name="fileToUpload" aria-describedby="fileToUploadHelp">

        <div id="fileToUploadHelp" class="form-text">Skal være jpg eller jpeg og størrelsen 580 x 380 pixel.</div>
      </div>
      <div class="mb-3">
        <label for="oldImage" class="form-label">Eller vælg allerede uploadet billede:</label>
        <select class="form-select" aria-label="Default select example" id="oldImage" name="oldImage" aria-describedby="oldImageHelp">
          <option value="0" selected>Vælg et billede ...</option>
          <?php
          foreach ($images as $image) {
            echo "<option value='" . $image . "'>" . $image . "</option>";
          }
          ?>
        </select>
        <div id="oldImageHelp" class="form-text">Vælg et gammelt billede fra listen. (Ignoreres, hvis der uploades et nyt).</div>
      </div>
      <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" name="published" id="published">
        <label class="form-check-label" for="published">Publiceret</label>
      </div>

      <button type="submit" class="btn btn-primary mt-3">Opret</button>
    </form>
  <?php

}

if (!empty($_POST)) {

  $published = $_POST["published"] == "on";

  if (empty($_FILES["fileToUpload"]["name"])) {

    // If no image, just save data
    $new_id = getNextId();

    $new_concert = array(
      "id" => $new_id,
      "title" => $_POST["title"],
      "time" => $_POST["date"] . "T" . $_POST["time"],
      "place" => $_POST["place"],
      "imageFileName" => $_POST["oldImage"] == "0" ? "" : $_POST["oldImage"],
      "link" => $_POST["link"],
      "admission" => $_POST["admission"],
      "published" => $published,
    );

    saveConcert($new_concert);
  } else {
    // Else also upload file
    $target_dir = "../uploads/";
    $image_name = basename($_FILES["fileToUpload"]["name"]);
    $target_file = $target_dir . $image_name;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      $new_id = getNextId();

      $new_concert = array(
        "id" => $new_id,
        "title" => $_POST["title"],
        "time" => $_POST["date"] . "T" . $_POST["time"],
        "place" => $_POST["place"],
        "imageFileName" => $image_name,
        "link" => $_POST["link"],
        "admission" => $_POST["admission"],
        "published" => $published
      );

      saveConcert($new_concert);
    } else {
      echo "Der skete en fejl ved upload af billede";
    }
  }

  ?>

    <div class="alert alert-success" role="alert">
      <strong>Sangeren blevet oprettet!</strong> Du sendes tilbage til sangersiden ...
    </div>
    <script type='text/javascript'>
    setTimeout(() => window.location = "/admin/singers.php", 1500);
    </script>
  <?php
}
  ?>
  <?php include 'footer.php'; ?>