<?php
/**
 * Tiles block template.
 *
 * @param   array $block The block settings and attributes.
 * @param   string $content The block inner HTML (empty).
 * @param   bool $is_preview True during backend preview render.
 * @param   int $post_id The post ID the block is rendering content against.
 *          This is either the post ID currently being displayed inside a query loop,
 *          or the post ID of the post hosting this block.
 * @param   array $context The context provided to the block by the post or it's parent block.
 */

// Support custom "anchor" values.
$anchor = '';
if ( ! empty( $block['anchor'] ) ) {
    $anchor = 'id="' . esc_attr( $block['anchor'] ) . '" ';
}

// Create class attribute allowing for custom "className" and "align" values.
$class_name = 'tiles';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

if(isset($block['data']['preview_image_help'])) :

    echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';

else :

$heading = get_field('heading');
$text = get_field('text');
$primary_cta = get_field('primary_cta');
$secondary_cta = get_field('secondary_cta');

?>

<section class="<?= $class_name ?>">

    <div class="<?= $class_name ?>__container">
        <?php if ($heading): ?>
            <h2 class="<?= $class_name ?>__heading"><?= $heading ?></h2>
        <?php endif; ?>

        <?php if ($text): ?>
            <p class="<?= $class_name ?>__text p1"><?= $text ?></p>
        <?php endif; ?>
        
        <?php if(have_rows('tiles')): ?>

            <ul class="<?= $class_name ?>__list">

                <?php while(have_rows('tiles')) : the_row(); ?>

                    <?php
                        $tile_icon = get_sub_field('tile_icon');
                        $tile_heading = get_sub_field('tile_heading');
                        $tile_text = get_sub_field('tile_text');
                    ?>
                        
                    <li class="<?= $class_name ?>__list-item">
                        <?php 
                            if ($tile_icon) : 
                                include(__DIR__ . '/assets/images/' .  $tile_icon . '.svg');
                            endif;
                        ?>

                        <?php if ($tile_heading || $tile_text) : ?>

                            <?php if ($tile_heading) : ?>
                                <h4 class="<?= $class_name ?>__list-item-heading"><?= $tile_heading ?></h4>
                            <?php endif; ?>

                            <?php if ($tile_text) : ?>
                                <p class="<?= $class_name ?>__list-item-text p2"><?= $tile_text ?></p>
                            <?php endif; ?>

                        <?php endif; ?>
                    </li>

                <?php endwhile ?>
            </ul>
        <?php endif ?>


        <?php if ($primary_cta || $secondary_cta) : ?>

            <div class="<?= $class_name ?>__button-wrap button-wrap">

                <?php if ($primary_cta) : 
                    $primary_cta_url = $primary_cta['url'];
                    $primary_cta_title = $primary_cta['title'];
                    $primary_cta_target = $primary_cta['target'] ? $primary_cta['target'] : '_self';
                ?>
                    <a class="button button--primary" href="<?=$primary_cta_url ?>" target="<?= $primary_cta_target ?>" data-text="<?= $primary_cta_title ?>"><?= $primary_cta_title ?></a>
                <?php endif; ?>

                <?php if ($secondary_cta) : 
                    $secondary_cta_url = $secondary_cta['url'];
                    $secondary_cta_title = $secondary_cta['title'];
                    $secondary_cta_target = $secondary_cta['target'] ? $secondary_cta['target'] : '_self';
                ?>
                    <a class="button button--tertiary" href="<?=$secondary_cta_url ?>" target="<?= $secondary_cta_target ?>"><?= $secondary_cta_title ?></a>
                <?php endif; ?>

            </div>
            
        <?php endif; ?>
    </div>

</section>

<?php
    endif;