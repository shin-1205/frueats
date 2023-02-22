<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="<?php echo get_theme_file_uri(); ?>/style.css">

  <title>Document</title>
  <?php wp_head(); ?>
</head>

<body>


  <header>
    <nav class="head-nav">
      <ul>
        <li><a href="#">
            <div class="navi-mask">
              <p data-text="Top">Top</p>
            </div>
          </a></li>
        <li><a href="#">
            <div class="navi-mask">
              <p data-text="開発ストーリー">開発ストーリー</p>
            </div>
          </a></li>
        <li><a href="#">
            <div class="navi-mask">
              <p data-text="商品一覧">商品一覧</p>
            </div>
          </a></li>
        <li><a href="#">
            <div class="navi-mask">
              <p data-text="ニュース">ニュース</p>
            </div>
          </a></li>
        <li><a href="#">
            <div class="navi-mask">
              <p data-text="店舗情報">店舗情報</p>
            </div>
          </a></li>
        <li><a href="#">
            <div class="navi-mask">
              <p data-text="Magazine">Magazine</p>
            </div>
          </a></li>
      </ul>
    </nav>

    <div id="logo">
      <a href="#">
        <img src="https://d2w53g1q050m78.cloudfront.net/shopfruoatsjp/uploads/assets/static.shared__logo_wh.svg" alt="">
      </a>
    </div>

    <div class="head-right">
      <ul>
        <li><a href="#">Login</a></li>
        <li class="head-mark"><a href="#"><img
              src="https://d2w53g1q050m78.cloudfront.net/shopfruoatsjp/uploads/assets/static.shared__icon-cart_or.svg"
              alt=""></a></li>
      </ul>
    </div>

    <!-- toggle -->


    <div id="toggle">
      <div id="toggle-box">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div class="toggle-menu">
      <nav>
        <ul>
          <li><a href="#">Link1</a></li>
          <li><a href="#">Link2</a></li>
          <li><a href="#">Link3</a></li>
          <li><a href="#">Link4</a></li>
          <li><a href="#">Link5</a></li>
        </ul>
      </nav>
    </div>



  </header>