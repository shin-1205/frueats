<?php get_header(); ?>

<div class="contact-wrap">

  <div class="contact-main">
    <h1>お問い合せ</h1>
    <h3>お問い合わせいただく際は、<a href="<?php bloginfo('url');?>/faq">FAQ</a>を予めご確認ください。<br>
      営業時間は平日9:00〜18:00です。土日祝日等、営業時間外でのご対応はできかねますので予めご了承ください。<br>
      3営業日以内に返信がない場合、FruOatsからお送りしたメールを受信できていない可能性がございます。<br>
      迷惑メールフォルダのご確認と、"support@fruoats.jp"からのメールを受信可能な状態へご設定ください。</h3>


    <?php if(have_posts()): while(have_posts()): the_post();?>


    <?php the_content(); ?>

    <?php endwhile; endif; ?>

  </div>
</div>

<a href="<?php bloginfo('url');?>" class="top-btn">TOPページへ</a>

<?php get_footer(); ?>