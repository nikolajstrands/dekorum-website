<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php if (empty($_POST)) {
?>
  <h2 class="m-5">Ny sanger</h2>
  <div class="m-5">
    <form action="new_singer.php" method="post" enctype="multipart/form-data">
      <div class="mb-3">
        <label for="name" class="form-label">Navn:</label>
        <input type="text" class="form-control" id="name" aria-describedby="nameHelp" name="name">
        <div id="nameHelp" class="form-text">F.eks. <em>Niels Emil Hillerup</em></div>
      </div>
      <div class="mb-3">
        <label for="part" class="form-label">Stemmetype:</label>
        <input type="text" class="form-control" id="part" name="part" aria-describedby="partHelp">
        <div id="partHelp" class="form-text">F.eks. <em>tenor</em></div>
      </div>
      <div class="mb-3">
        <label for="fileToUpload" class="form-label">Billedfil:</label>
        <input type="file" class="form-control" id="fileToUpload" name="fileToUpload" aria-describedby="fileToUploadHelp">
        <div id="fileToUploadHelp" class="form-text">Skal være jpg eller jpeg og størrelsen 480 x 600 pixel. Undlades billede, indsættes dummy-billede</div>
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

  $error = false;

  $published = $_POST["published"] == "on";

  if (empty($_FILES["fileToUpload"]["name"])) {

    // If no image, just save data
    $new_id = getNextSingerId();

    $new_singer = array(
      "id" => $new_id,
      "name" => $_POST["name"],
      "part" => $_POST["part"],
      "portraitFileName" => "Dummy-billede.jpg",
      "published" => $published,
    );

    saveSinger($new_singer);
  } else {
    // Else also upload file
    $target_dir = "../uploads/portraits/";
    $image_name = basename($_FILES["fileToUpload"]["name"]);
    $sanitizedImageName = str_replace(" ", "_", $image_name);
    $target_file = $target_dir . $sanitizedImageName;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      $new_id = getNextSingerId();

      $new_singer = array(
        "id" => $new_id,
        "name" => $_POST["name"],
        "part" => $_POST["part"],
        "portraitFileName" => $sanitizedImageName,
        "published" => $published
      );

      saveSinger($new_singer);
    } else {
      echo "Der skete en fejl ved upload af billede";
      $error = true;
    }
  }

  if ($error !== true) {
  ?>
    <div class="alert alert-success" role="alert">
      <strong>Sangeren blevet oprettet!</strong> Du sendes tilbage til sangersiden ...
    </div>
    <script type='text/javascript'>
    setTimeout(() => window.location = "/admin/singers.php", 1500);
    </script>
  <?php
  }
}
  ?>
  <?php include 'footer.php'; ?>