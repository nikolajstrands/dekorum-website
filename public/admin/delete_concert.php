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
        <p style='color: green'>Koncerten blev slettet!</p>
<?php
    }
}

?>
<?php include 'footer.php'; ?>