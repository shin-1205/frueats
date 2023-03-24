<?php get_header(); ?>

<div class="news-wrap  fadeInTrigger">



  <div class="container">

    <h1>NEWS</h1>


    <div class="news-archive">

      <section id="news" class="newsMove1 newsarea">


        <dl>

          <?php
      $args = array(
      'post_type' => 'post',
      'posts_per_page' => 50,
      'order' => 'DESC',
      );
      $query_instance = new WP_Query($args);
      ?>
          <?php if ($query_instance->have_posts()): ?>
          <?php while ( $query_instance->have_posts()): $query_instance->the_post(); ?>

          <a href="<?php echo get_permalink( $id );?>" class="newslink">
            <dt><?php the_time('Y.n.j'); ?></dt>
            <dd><?php the_title(); ?></dd>
          </a>

          <?php endwhile ?>
          <?php endif ?>
          <?php wp_reset_postdata(); ?>

        </dl>


      </section>

    </div>

  </div>

</div>

<?php get_footer(); ?>