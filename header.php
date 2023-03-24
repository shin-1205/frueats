<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?php echo get_theme_file_uri(); ?>/style.css">
  <link rel="shortcut icon" href="<?php echo get_theme_file_uri(); ?>/img/logo/FruEatsFab.svg">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css">
  <link href="https://fonts.cdnfonts.com/css/futura-pt" rel="stylesheet">

  <title>FruEats</title>
  <?php wp_head(); ?>
</head>

<body>


  <header>
    <nav class="head-nav">
      <ul>
        <li><a href="<?php bloginfo('url');?>">
            <div class="navi-mask">
              <p data-text="Top">Top</p>
            </div>
          </a></li>
        <li><a href="<?php bloginfo('url');?>/story">
            <div class="navi-mask">
              <p data-text="Story">Story</p>
            </div>
          </a></li>
        <li><a href="<?php bloginfo('url');?>/item">
            <div class="navi-mask">
              <p data-text="Product">Product</p>
            </div>
          </a></li>
        <li><a href="<?php bloginfo('url');?>/news">
            <div class="navi-mask">
              <p data-text="News">News</p>
            </div>
          </a></li>
        <li><a href="<?php bloginfo('url');?>/shop">
            <div class="navi-mask">
              <p data-text="Shop">Shop</p>
            </div>
          </a></li>
      </ul>
    </nav>

    <div id="logo">
      <a href="<?php bloginfo('url');?>">
        <img src="<?php echo get_theme_file_uri(); ?>/img/logo/FruEats-Logo1.svg" alt="">
      </a>
    </div>

    <div class="head-right">
      <ul>
        <li>
          <div>Login</div>
        </li>
        <li class="head-mark">
          <div><img src="<?php echo get_theme_file_uri(); ?>/img/icons/Shopping Cart.svg"
              alt="<?php bloginfo('url');?>"></div>
        </li>
      </ul>
    </div>

    <!-- toggle -->

    <div id="header">
      <h3 class="site-title">
      </h3>

      <div id="navi">
        <div class="login-btn"><a href="<?php bloginfo('url');?>" class="login-btn1">Login</a></div>
        <ul class="nav-menu">
          <li><a href="<?php bloginfo('url');?>">Top</a></li>
          <li><a href="<?php bloginfo('url');?>/story">Story</a></li>
          <li><a href="<?php bloginfo('url');?>/item">Product</a></li>
          <li><a href="<?php bloginfo('url');?>/news">News</a></li>
          <li><a href="<?php bloginfo('url');?>/shop">Shop</a></li>
        </ul>
        <ul class="nav-sns">
        </ul>
      </div>

      <div class="toggle_btn">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="mask"></div>
    </div>


  </header>