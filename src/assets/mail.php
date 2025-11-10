<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if (empty($_POST)) {
  die("Нет данных для отправки");
}

$message = '';
$text = '';
$antispam_words = ['viagra', 'casino', 'porn'];
$c = true;

// CSS стили таблицы
$style_table = 'width: 100%; border-collapse: collapse;';
$style_tr = 'background-color: rgba(245, 126, 1, 0.2);';
$style_td = 'padding: 10px; border: #F57E01 2px solid; vertical-align: top;';

$sender_email = "imp.tel@yandex.ru";
$admin_email = "imp.tel@yandex.ru";
$form_subject = "Обратная связь с сайта Импульс Телеком";

$is_valid = true;

foreach ($_POST as $key => $value) {
  if ($key == "Сообщение") {
    foreach ($antispam_words as $word) {
      if (strpos($value, $word) !== false) {
        $is_valid = false;
        break;
      }
    }
  }

  if ($value != "") {
    $message .= (($c = !$c) ? "<tr>" : '<tr style="' . $style_tr . '">') .
      "<td style='" . $style_td . "'><b>$key</b></td>" .
      "<td style='" . $style_td . "'>$value</td></tr>";
    $text .= "$key : $value \n";
  }
}

if ($is_valid) {
  $mail = new PHPMailer(true);

  try {
    // SMTP настройки для Yandex
    $mail->isSMTP();
    $mail->Host = "smtp.yandex.ru";
    $mail->SMTPAuth = true;
    $mail->Username = "imp.tel@yandex.ru";
    $mail->Password = "nyyytelnhdoxfwtu";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;


    $mail->CharSet = "UTF-8";
    $mail->setLanguage("ru");


    $mail->setFrom($sender_email, "Импульс Телеком");
    $mail->addAddress($admin_email);
    $mail->Subject = $form_subject;
    $mail->isHTML(true);
    $mail->Body = "<table style='" . $style_table . "'>$message</table>";
    $mail->AltBody = $text;

    $mail->send();
    echo "Форма отправлена!";
  } catch (Exception $e) {
    echo "Сообщение не может быть отправлено.<br>";
    echo "Ошибка: {$mail->ErrorInfo}";
  }
} else {
  echo "Отправка отменена";
}
