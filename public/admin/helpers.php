<?php

function getConcertById ($id) {
    $concerts = getConcerts();
    
    foreach ($concerts as $concert) {
        if ($concert["id"] == $id) {
            return $concert;
        }
    }
}

function getConcerts() {
    $str = file_get_contents('../data.json');
    $json = json_decode($str, true);
    return $json["concerts"];
}

function getNextId() {
    $concerts = getConcerts();
    $ids = [];
    foreach ($concerts as $concert) {
      array_push($ids, $concert["id"]);
    }
    return max($ids) + 1;
}

function saveConcert($new_concert) {
    $json = file_get_contents('../data.json');
    $data = json_decode($json, true);
    $concerts = $data["concerts"];
    array_push($concerts, $new_concert);

    $new_data = array(
      "singers" => $data["singers"],
      "concerts" => $concerts
    );
    $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
    file_put_contents("../data.json", $new_json);
  }

  function replaceConcertById($id, $updated_singer) {
    $str = file_get_contents('../data.json');
    $data = json_decode($str, true);

    $concerts = $data["concerts"];
    $new_concerts = [];

    foreach ($concerts as $concert) {
        if ($concert["id"] != $id) {
            array_push($new_concerts, $concert);
        } else {
         array_push($new_concerts, $updated_singer);
        }
    }

    $new_data = array(
        "singers" => $data["singers"],
        "concerts" => $new_concerts
    );
    $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
    file_put_contents("../data.json", $new_json);
  }

  function deleteConcertById($id) {

    $str = file_get_contents('../data.json');
    $data = json_decode($str, true);

    $concerts = $data["concerts"];
    $new_concerts = [];

    foreach ($concerts as $concert) {
        if ($concert["id"] != $id) {
            array_push($new_concerts, $concert);
        }
    }

    $new_data = array(
        "singers" => $data["singers"],
        "concerts" => $new_concerts
    );
    $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
    file_put_contents("../data.json", $new_json);
}

function getOldImageNames() {
    $arrFiles = scandir('../uploads');
    $images = [];
    foreach ($arrFiles as $file) {
      $ext = pathinfo($file, PATHINFO_EXTENSION);
      // Get all jpg and jpeg files
      if ($ext == "jpg" || $ext == "jpeg") {
        array_push($images, $file);
      }
    }
    return $images;
  }

function getSingers() {
  $str = file_get_contents('../data.json');
  $json = json_decode($str, true);
  return $json["singers"];
}

function deleteSingerById($id) {
  $str = file_get_contents('../data.json');
  $data = json_decode($str, true);

  $singers = $data["singers"];
  $new_singers = [];

  foreach ($singers as $singer) {
      if ($singer["id"] != $id) {
          array_push($new_singers, $singer);
      }
  }

  $new_data = array(
      "singers" => $new_singers,
      "concerts" => $data["concerts"]
  );

  $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
  file_put_contents("../data.json", $new_json);
}

function getNextSingerId() {
  $singers = getSingers();
  $ids = [];
  foreach ($singers as $singer) {
    array_push($ids, $singer["id"]);
  }
  return max($ids) + 1;
}

function saveSinger($new_singer) {
  $json = file_get_contents('../data.json');
  $data = json_decode($json, true);
  $singers = $data["singers"];
  array_push($singers, $new_singer);

  $new_data = array(
    "singers" => $singers,
    "concerts" => $data["concerts"]
  );
  $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
  file_put_contents("../data.json", $new_json);
}

function getSingerById ($id) {
  $singers = getSingers();
  
  foreach ($singers as $singer) {
      if ($singer["id"] == $id) {
          return $singer;
      }
  }
}

function replaceSingerById($id, $updated_singer) {
  $str = file_get_contents('../data.json');
  $data = json_decode($str, true);

  $singers = $data["singers"];
  $new_singers = [];

  foreach ($singers as $singer) {
      if ($singer["id"] != $id) {
          array_push($new_singers, $singer);
      } else {
       array_push($new_singers, $updated_singer);
      }
  }

  $new_data = array(
      "singers" => $new_singers,
      "concerts" => $data["concerts"]
  );
  $new_json = json_encode($new_data, JSON_PRETTY_PRINT);
  file_put_contents("../data.json", $new_json);
}


?>