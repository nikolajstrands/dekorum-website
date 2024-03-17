<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php

if (!empty($_GET)) {

  $id = $_GET["id"];

  if (empty($id)) {
    echo "Intet id sendt med!";
  } else {

    $singer_to_edit = getSingerById($id);
?>

    <h2 class="m-5">Rediger sanger</h2>
    <div class="m-5">
      <form action="edit_singer.php" method="post" enctype="multipart/form-data">
        <input type="hidden" id="id" name="id" value=<?php echo $id ?>>
        <div class="mb-3">
          <label for="name" class="form-label">Navn:</label>
          <input type="text" class="form-control" id="name" aria-describedby="nameHelp" name="name" value="<?php echo $singer_to_edit["name"] ?>">
          <div id="nameHelp" class="form-text">F.eks. <em>Niels Emil Hillerup</em></div>
        </div>
        <div class="mb-3">
          <label for="part" class="form-label">Stemmetype:</label>
          <input type="text" class="form-control" id="part" name="part" aria-describedby="partHelp" value="<?php echo $singer_to_edit["part"] ?>">
          <div id="partHelp" class="form-text">F.eks. <em>Tenor</em></div>
        </div>
        <div class="mb-3">
          <label for="fileToUpload" class="form-label">Billedfil:</label>
          <input type="file" class="form-control" id="fileToUpload" name="fileToUpload" aria-describedby="fileToUploadHelp">
          <input hidden type="text" class="form-control" id="oldImage" name="oldImage" value="<?php echo $singer_to_edit["portraitFileName"] ?>" >
          <div id="fileToUploadHelp" class="form-text">Skal være jpg eller jpeg og størrelsen 480 x 600 pixel.</div>
        </div>
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" name="published" id="published" <?php echo $singer_to_edit["published"] ? "checked" : "" ?> >
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

    // just update data, using old image file name
    $updated_singer = array(
      "id" => $id,
      "name" => $_POST["name"],
      "part" => $_POST["part"],
      "portraitFileName" => $_POST["oldImage"],
      "published" => $published,
    );
    replaceSingerById($id, $updated_singer);

  } else {

    // Update data and image-file
    $target_dir = "../uploads/portraits/";
    $image_name = basename($_FILES["fileToUpload"]["name"]);
    $target_file = $target_dir . $image_name;

    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      $updated_singer = array(
        "id" => $id,
        "name" => $_POST["name"],
        "part" => $_POST["part"],
        "portraitFileName" => $image_name,
        "published" =>  $published
      );

      replaceSingerById($id, $updated_singer);
    } else {
      echo "Der skete en fejl ved upload af billede";
    }
  }
  ?>

  <div class="alert alert-success" role="alert">
    <strong>Sangeren blevet opdateret!</strong> Du sendes tilbage til sangersiden ...
  </div>
  <script type ='text/javascript'> setTimeout(() => window.location = "/admin/singers.php", 1500);</script>
<?php

}


?>

<?php include 'footer.php'; ?>