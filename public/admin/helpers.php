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

?>