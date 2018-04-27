<?php

/*$recepient = "info@wowflytt.se";*/
$recepient = "mityasazonow@yandex.ru";
$sitename = "http://wowflytt.se/ ";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["message"]);

$pagetitle = "Заявка  с сайта \"$sitename\"";
$message = "Namn: $name \E-post: $email \nMeddelande: $comment";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");