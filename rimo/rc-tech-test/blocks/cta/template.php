<?php
/**
 * CTA block template.
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
$class_name = 'cta-block';
if ( ! empty( $block['className'] ) ) {
    $class_name .= ' ' . $block['className'];
}
if ( ! empty( $block['align'] ) ) {
    $class_name .= ' align' . $block['align'];
}

if(isset($block['data']['preview_image_help'])) :

    echo '<img src="'. $block['data']['preview_image_help'] .'" style="width:100%; height:auto;">';

else :

$text = get_field('text');
$cta = get_field('cta');

?>

<section class="<?= $class_name ?>">

    <div class="<?= $class_name ?>__container">
        <div class="<?= $class_name ?>__container-inner">
            <?php if ($text): ?>
                <h2 class="<?= $class_name ?>__text"><?= $text ?></h2>
            <?php endif; ?>

            <?php if ($cta):
                $cta_url = $cta['url'];
                $cta_title = $cta['title'];
                $cta_target = $cta['target'] ? $cta['target'] : '_self';
            ?>
                <a class="button button--primary" href="<?=$cta_url ?>" target="<?= $cta_target ?>"><?= $cta_title ?></a>
            <?php endif; ?>
        </div>
    </div>

</section>

<?php
    endif;