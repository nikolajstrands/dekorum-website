<?php include 'header.php'; ?>

<?php

if (!empty($_POST)) {

    $id = $_POST["id"];
    if (empty($id)) {
        echo "Intet id sendt med!";
    } else {

        // Move to helper
        $str = file_get_contents('../data.json');
        $json = json_decode($str, true);

        $concerts = $json["concerts"];
        $new_concerts = [];

        foreach ($concerts as $concert) {
            if ($concert["id"] != $id) {
                array_push($new_concerts, $concert);
            }
        }

        $new_data = array(
            "singers" => $json["singers"],
            "concerts" => $new_concerts
        );
        $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
        file_put_contents("../data.json", $new_json);
        
        ?>
        <p style='color: green'>Koncerten blev slettet!</p>
        <?php
    }
}

?>
<?php include 'footer.php'; ?>