<?php get_header(); ?>

<div id="product-list">

  <h1>PRODUCTS</h1>

  <div class="product-all-wrap">

    <div class="product-list-all">




      <?php
      $args = array(
      'post_type' => 'item',
      'posts_per_page' => 12,
      'order' => 'DESC',
      );
      $query_instance = new WP_Query($args);
      ?>



      <?php if ($query_instance->have_posts()): ?>
      <?php while ( $query_instance->have_posts()): $query_instance->the_post(); ?>
      <article>
        <a href="<?php echo get_permalink( $id );?>">
          <img src="<?php the_field('item画像1'); ?>" alt="">
          <h3 class="product-item-name"><?php the_title(); ?></h3>
          <div class="product-all-price">
            <p>¥<?php the_field('値段'); ?></p>
            <span>税込</span>
        </a>
    </div>
    </article>
    <?php endwhile ?>
    <?php endif ?>
    <?php wp_reset_postdata(); ?>



  </div>

</div>
</div>


<?php get_footer(); ?>