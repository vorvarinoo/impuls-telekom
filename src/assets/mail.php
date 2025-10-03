<?php

require "phpmailer/phpmailerautoload.php";

$c = true;
// CSS стили таблицы
$style_table = '
width: 100%;
border-collapse: collapse;
';
$style_tr = '
background-color: rgba(245, 126, 1, 0.2);
';
$style_td = '
padding: 10px;
border: #F57E01 2px solid;
vertical-align: top;
';

$sender_email = "zizenkov.n@yandex.ru";
$admin_email = "zizenkov.n@yandex.ru";
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
    $message .=
      "
 " .
      (($c = !$c) ? "<tr>" : '<tr style="' . $style_tr . '">') .
      "
 <td style='" .
      $style_td .
      "'><b>$key</b></td>
 <td style='" .
      $style_td .
      "'>$value</td>
 </tr>
 ";
    $text .= "$key : $value \n";
  }
}

if ($is_valid) {
  $mail = new PHPMailer();


  $mail->isSMTP();
  $mail->Host = "smtp.yandex.ru";
  $mail->SMTPAuth = true;
  $mail->Username = "zizenkov.n@yandex.ru";
  $mail->Password = "qgabtbsatpjqhiyf";
  $mail->SMTPSecure = "ssl";
  $mail->Port = 465;


  $mail->setLanguage("ru", __DIR__ . "/phpmailer/language/");
  $mail->CharSet = "UTF-8";
  $mail->setFrom($sender_email);
  $mail->addAddress($admin_email);
  $mail->Subject = $form_subject;
  $mail->msgHTML("<table style='" . $style_table . "'>$message</table>");

  if (!$mail->send()) {
    echo "Сообщение не может быть отправлено.<br>";
    echo "Ошибка Mailer: " . $mail->ErrorInfo;
  } else {
    echo "Форма отправлена!";
  }
  $mail->clearAddresses();
} else {
  echo "Отправка отменена";
}
