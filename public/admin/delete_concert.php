<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php

if (!empty($_POST)) {

    $id = $_POST["id"];
    if (empty($id)) {
        echo "Intet id sendt med!";
    } else {

        deleteConcertById($id);

?>

<div class="alert alert-success" role="alert">
    <strong>Koncerten blevet slettet!</strong> Du sendes tilbage til koncertsiden ...
  </div>
  <script type ='text/javascript'> setTimeout(() => window.location = "/admin/concerts.php", 1500);</script>

<?php
    }
}

?>
<?php include 'footer.php'; ?>