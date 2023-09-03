<?php include 'header.php';?>

  <?php

  // Get concerts from file
  $str = file_get_contents('../data.json');
  $json = json_decode($str, true);
  $concerts = $json["concerts"];
  
  // Sort concerts by time
  usort($concerts, function($a, $b) {return $b["time"] > $a["time"];});

  echo ("<div class='m-5'>");

  foreach ($concerts as $concert) { ?>
    <div class='row mb-4 p-3 rounded shadow'>
        <div class='col-3 pt-2'>
          <img class='img-fluid' src=<?php echo "../uploads/" .  $concert["imageFileName"] ?> />
        </div>
        <div class='col-6 ml-3'>
          <table class="table table-sm table-borderless">
            <tbody>
              <tr>
                <th scope="row">Id</th>
                <td><?php echo $concert["id"] ?> </td>
              </tr>
              <tr>
                <th scope="row">Titel</th>
                <td><?php echo $concert["title"] ?></td>
              </tr>
              <tr>
                <th scope="row">Tidspunkt</th>
                <td><?php echo $concert["time"] ?></td> 
              </tr>
              <tr>
                <th scope="row">Sted</th>
                <td><?php echo $concert["place"] ?></td> 
              </tr>
              <tr>
              <tr>
                <th scope="row">Billedfil</th>
                <td><?php echo $concert["imageFileName"] ?></td> 
              </tr>
              <tr>
                <th scope="row">Link</th>
                <td><?php echo $concert["link"] ?></td> 
              </tr>
              <tr>
                <th scope="row">Entré</th>
                <td><?php echo $concert["admission"] ?></td> 
              </tr>
            </tbody>
    </table>
    </div>
    <div class='col-3 d-flex flex-column align-self-center'>
        <form method="post" action="delete_concert.php" onsubmit="return confirm('Er du sikker på, du vil slette koncerten?');">
          <input type="hidden" id="id" name="id" value=<?php echo($concert["id"]) ?> >
          <button class="btn btn-danger w-100 p-3 mb-3" type="submit">Slet</button>
        </form>
        <form  method="get" action="edit_concert.php">
          <input type="hidden" id="id" name="id" value=<?php echo($concert["id"]) ?> >
          <button class="btn btn-primary w-100 p-3 mt-3">Rediger</button>
        </form>
    </div>
  </div>
  <?php } echo( "</div>"); ?>

  <?php include 'footer.php';?>