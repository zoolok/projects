<?php

$recepient = "Sanja.nnov12@gmail.com";
$sitename = "salut-promo.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$comment = trim($_POST["comment"]);

$pagetitle = "Заявка  с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nEmail: $email \nСообщение: $comment";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");