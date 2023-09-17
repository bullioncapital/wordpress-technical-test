<?php
/**
 * Text and image block template.
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
$class_name = 'text-and-list';
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
$cta = get_field('cta');

?>

<section class="<?= $class_name ?>">

    <div class="<?= $class_name ?>__container">

        <div class="<?= $class_name ?>__left">

            <div class="<?= $class_name ?>__left-inner">
                <?php if ($heading) : ?>
                    <h2 class="<?= $class_name ?>__heading"><?= $heading ?></h2>
                <?php endif; ?>

                <?php if ($text) : ?>
                    <p class="<?= $class_name ?>__text p1"><?= $text ?></p>
                <?php endif; ?>

                <?php if(have_rows('list')): ?>

                    <ul class="<?= $class_name ?>__list">

                        <?php while(have_rows('list')) : the_row(); ?>

                            <?php
                                $list_icon = get_sub_field('list_icon');
                                $list_header = get_sub_field('list_header');
                                $list_text = get_sub_field('list_text');
                            ?>
                                
                            <li class="<?= $class_name ?>__list-item">
                                <?php 
                                    if ($list_icon) : 
                                        include(__DIR__ . '/assets/images/' .  $list_icon . '.svg');
                                    endif;
                                ?>

                                <?php if ($list_header || $list_text) : ?>

                                    <div class="<?= $class_name ?>__list-item-wrapper">

                                        <?php if ($list_header) : ?>
                                            <h4 class="<?= $class_name ?>__list-item-header"><?= $list_header ?></h4>
                                        <?php endif; ?>

                                        <?php if ($list_text) : ?>
                                            <p class="<?= $class_name ?>__list-item-text p1"><?= $list_text ?></p>
                                        <?php endif; ?>

                                    </div>

                                <?php endif; ?>
                            </li>

                        <?php endwhile ?>
                    </ul>
                <?php endif ?>

                <?php if ($cta):
                    $cta_url = $cta['url'];
                    $cta_title = $cta['title'];
                    $cta_target = $cta['target'] ? $cta['target'] : '_self';
                ?>
                    <a class="button button--arrow" href="<?=$cta_url ?>" target="<?= $cta_target ?>"><?= $cta_title ?></a>
                <?php endif; ?>
            </div>
        </div>

        <picture class="<?= $class_name ?>__right">
            <img class="<?= $class_name ?>__image" src="<?= plugin_dir_url(__FILE__) ?>assets/images/zigzag.jpg">
        </picture>
        
    </div>

</section>

<?php 
    endif;