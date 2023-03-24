<?php get_header(); ?>

<div class="contact-wrap">

  <div class="contact-main">
    <h1>Contact Us</h1>
    <h3>Please check <a href="<?php bloginfo('url');?>/faq">FAQ</a> before contacting us. <br>
      Business hours are from 9:00 to 18:00 on weekdays. Please note that we cannot respond outside business hours such
      as weekends and holidays. <br>
      If you do not receive a reply within 3 business days, it is possible that the email sent from FruOats was not
      received. <br>
      Please check your spam folder and make sure that you can receive emails from "support@fruoats.jp". </h3>


    <?php if(have_posts()): while(have_posts()): the_post();?>


    <?php the_content(); ?>

    <?php endwhile; endif; ?>

  </div>
</div>

<a href="<?php bloginfo('url');?>" class="top-btn">TOP</a>

<?php get_footer(); ?>