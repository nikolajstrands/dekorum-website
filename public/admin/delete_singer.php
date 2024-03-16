<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php

if (!empty($_POST)) {

    $id = $_POST["id"];
    if (empty($id)) {
        echo "Intet id sendt med!";
    } else {

        deleteSingerById($id);

?>

<div class="alert alert-success" role="alert">
    <strong>Sangeren blev slettet!</strong> Du sendes tilbage til sangersiden ...
  </div>
  <script type ='text/javascript'> setTimeout(() => window.location = "/admin/singers.php", 1500);</script>

<?php
    }
}

?>
<?php include 'footer.php'; ?>