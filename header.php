<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <?php wp_head(); ?>
  <meta charset="UTF-8">

  <title>
    <?php
    if (is_front_page()) {
      echo 'فاکتوریل | خودت رو اذیت نکن';
    } else {
      wp_title('|', true, 'right');
      echo bloginfo('name');
    }
    ?>
  </title>

  <meta name="description" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="msapplication-tap-highlight" content="no" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
</head>

<div id="q-app">

