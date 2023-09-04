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

  function replaceConcertById($id, $updated_concert) {
    $str = file_get_contents('../data.json');
    $data = json_decode($str, true);

    $concerts = $data["concerts"];
    $new_concerts = [];

    foreach ($concerts as $concert) {
        if ($concert["id"] != $id) {
            array_push($new_concerts, $concert);
        } else {
         array_push($new_concerts, $updated_concert);
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


?>