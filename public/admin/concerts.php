<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php

$concerts = getConcerts();

$upcoming = [];
$old = [];

$now = time();

foreach ($concerts as $concert) {
  $concert_date = strtotime($concert["time"]);
  $isUpcoming = $concert["time"] !== "T" && $concert_date > $now;

  if ($isUpcoming) {
    array_push($upcoming, $concert);
  } else {
    array_push($old, $concert);
  }
}

// Sort concerts by time
usort($upcoming, function ($a, $b) {
  return $b["time"] > $a["time"];
});

usort($old, function ($a, $b) {
  return $b["time"] > $a["time"];
});

echo ("<div class='m-5'>");

echo "<h3 class='mb-4'>Kommende koncerter</h2>";
foreach ($upcoming as $concert) {
  formatConcert($concert);
}
echo "<h3 class='mb-4'>Tidligere koncerter</h2>";
foreach ($old as $concert) {
  formatConcert($concert);
}
echo ("</div>"); ?>

<?php include 'footer.php'; ?>

<?php
function formatConcert($concert) {
  
  
  ?>
  <div class='row mb-4 p-3 rounded shadow'>
    <div class='col-3 pt-2'>
      <img class='img-fluid' src=<?php echo "../uploads/" .  $concert["imageFileName"] ?> />
    </div>
    <div class='col-6 ml-3'>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row">
          <div class="w-25 fw-bold">Id</div>
          <div><?php echo $concert["id"] ?> </div>
        </div>
        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Titel</div>
          <div><?php echo $concert["title"] ?></div>
        </div>

        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Tidspunkt</div>
          <div><?php echo date_format(date_create($concert["time"]), "j/n/Y, G:i") ?></div>
        </div>

        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Sted</div>
          <div><?php echo $concert["place"] ?></div>
        </div>

        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Billedfil</div>
          <div><?php echo $concert["imageFileName"] ?></div>
        </div>
        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Link</div>
          <div><?php echo $concert["link"] ?></div>
        </div>
        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Entré</div>
          <div><?php echo $concert["admission"] ?></div>
        </div>
        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Publiceret</div>
          <div><?php echo $concert["published"] ?  "🟢" : "🔴" ?></div>
        </div>
      </div>
    </div>
    <div class='col-3 d-flex flex-column align-self-center'>
      <form method="post" action="delete_concert.php" onsubmit="return confirm('Er du sikker på, du vil slette koncerten?');">
        <input type="hidden" id="id" name="id" value=<?php echo ($concert["id"]) ?>>
        <button class="btn btn-danger w-100 p-3 mb-3" type="submit">Slet</button>
      </form>
      <form method="get" action="edit_concert.php">
        <input type="hidden" id="id" name="id" value=<?php echo ($concert["id"]) ?>>
        <button class="btn btn-primary w-100 p-3 mt-3">Rediger</button>
      </form>
    </div>
  </div>
<?php 
}
?>