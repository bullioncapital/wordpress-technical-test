<?php

get_header(); ?>

<div class="max-w-7xl mx-auto px-4 prose">
  <?php if (have_posts()) {
    while (have_posts()) {
      the_post(); ?>
      <div>
        <h1>
          <?php the_title(); ?>
        </h1>
        <?php the_content(); ?>
      </div>
    <?php }
  } ?>
</div>

<?php get_footer();