<?php

// check if clone field exists
if (get_row_layout() == 'services_blocks') :

?>

    <section class="services">
        <div class="grid">
            <div class="title">
                <h2><?php the_sub_field('section_title'); ?></h2>
                <p><?php the_sub_field('subheading'); ?></p>
            </div>

            <div class="serviceBlock">
                <?php if (have_rows('blocks')) : ?>
                    <?php while (have_rows('blocks')) : the_row(); ?>
                        <div class="tile">
                            <img src="<?php the_sub_field('icon'); ?>" alt="" class="tile_icon">
                            <h3 class="tile_title"><?php the_sub_field('block_title'); ?></h3>
                            <p class="tile_subheading"><?php the_sub_field('block_description'); ?></p>
                        </div>
                    <?php endwhile; ?>
                <?php endif; ?>
            </div>
            <div class="buttons">
                <a href="<?php get_sub_field('signup_button'); ?>" class="signUp">Sign Up</a>
                <a href="<?php get_sub_field('learn_more'); ?>" class="learnMore">Learn More</a>
            </div>
        </div>
    </section>

<?php endif; ?>