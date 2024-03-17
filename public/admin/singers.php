<?php include 'header.php'; ?>
<?php include 'helpers.php'; ?>

<?php 

$singers = getSingers();

echo ("<div class='m-5'>");

echo "<h3 class='mb-4'>Sangere</h2>";
foreach ($singers as $singer) {
  formatSinger($singer);
}
echo ("</div>"); ?>

<?php include 'footer.php'; ?>

<?php
function formatSinger($singer) {
  ?>
  <div class='row mb-4 p-3 rounded shadow'>
    <div class='col-3 pt-2'>
      <img class='img-fluid' src=<?php echo "../uploads/portraits/" .  $singer["portraitFileName"] ?> />
    </div>
    <div class='col-6 ml-3'>
      <div class="d-flex flex-column">
      <div class="d-flex flex-row">
          <div class="w-25 fw-bold">Id</div>
          <div><?php echo $singer["id"] ?> </div>
        </div>
        <div class="d-flex flex-row">
          <div class="w-25 fw-bold">Navn</div>
          <div><?php echo $singer["name"] ?> </div>
        </div>
        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Stemmetype</div>
          <div><?php echo $singer["part"] ?></div>
        </div>
        <div class="d-flex flex-row pb-1">
          <div class="w-25 fw-bold">Publiceret</div>
          <div><?php echo $singer["published"] ?  "🟢" : "🔴" ?></div>
        </div>
      </div>
    </div>
    <div class='col-3 d-flex flex-column'>
      <form method="post" action="delete_singer.php" onsubmit="return confirm('Er du sikker på, du vil slette sangeren?');">
        <input type="hidden" id="id" name="id" value=<?php echo ($singer["id"]) ?>>
        <button class="btn btn-danger w-100 p-3 mb-3" type="submit">Slet</button>
      </form>
      <form method="get" action="edit_singer.php">
        <input type="hidden" id="id" name="id" value=<?php echo ($singer["id"]) ?>>
        <button class="btn btn-primary w-100 p-3 mt-3">Rediger</button>
      </form>
    </div>
  </div>
<?php 
}
?>