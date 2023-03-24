<?php get_header(); ?>

<div class="contact-wrap">

  <div class="contact-main">
    <h1>Confirmation of inquiry contents</h1>


    <?php if(have_posts()): while(have_posts()): the_post();?>


    <?php the_content(); ?>

    <?php endwhile; endif; ?>

  </div>
</div>

<?php get_footer(); ?>