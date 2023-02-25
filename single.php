<?php get_header(); ?>


<div class="single-wrap">
  <div class="container">

    <div class="single-inner">

      <?php if(have_posts()): while(have_posts()): the_post();?>

      <h1>
        <?php the_title(); ?>
      </h1>

      <h3>
        <?php the_time('Y.n.j'); ?>
      </h3>

      <img src="<?php the_field('news画像1'); ?>" alt="">
      <p>
        <?php the_content(); ?>
      </p>

      <?php endwhile; endif; ?>


      <div class="single-sns">
        <h4>SHARE</h4>
        <ul>
          <li><img
              src="https://d2w53g1q050m78.cloudfront.net/shopfruoatsjp/uploads/assets/static.shared__icon-twitter_or.svg"
              alt=""></li>
          <li><img
              src="https://d2w53g1q050m78.cloudfront.net/shopfruoatsjp/uploads/assets/static.shared__icon-facebook_or.svg"
              alt=""></li>
        </ul>

      </div>
    </div>
  </div>

  <a href="<?php echo home_url('/'); ?>news/" class="top-btn">NEWS一覧ページへ</a>

</div>


<?php get_footer(); ?>