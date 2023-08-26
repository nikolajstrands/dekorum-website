<?php include 'header.php';?>

  <?php

  $str = file_get_contents('../data.json');
  $json = json_decode($str, true);

  $concerts = $json["concerts"];

  
  foreach ($concerts as $concert) {

    echo ("<div>Id: " . $concert["id"] . "</div>");
    echo ("<div>Titel: " . $concert["title"] . "</div>");
    echo ("<div>Tidspunkt: " . $concert["time"] . "</div>");
    echo ("<div>Sted: " . $concert["place"] . "</div>");
    echo ("<div>Billed filnavn: " . $concert["imageFileName"] . "</div>");
    echo ("<div>Link: " . $concert["link"] . "</div>");
    echo ("<div>Entré: " . $concert["admission"] . "</div>");
    

    ?>
    <form  method="post" action="delete_concert.php" onsubmit="return confirm('Er du sikker på, du vil slette koncerten?');">
    <input type="hidden" id="id" name="id" value=<?php echo($concert["id"]) ?> >
    <button type="submit">Slet</button>
    </form>
    <button>Rediger</button>
    <br /><br />
    <?php

  }

  ?>

<?php include 'footer.php';?>
