<?php
get_header();

$bannerImage = get_field('banner_image');
$layout = get_field('layout');
$bannerContent = get_field('banner_content');
$startLink = get_field('start_link');
$demoLink = get_field('demo_link');



if ($bannerImage) {
    $bannerImage = $bannerImage['url'];
} else {
    $bannerImage = get_template_directory_uri() . '/assets/images/banner.jpg';
}
?>
<div class="banner" style="background-image: url(' <?php echo $bannerImage; ?> '), linear-gradient(180deg, #08111a 0%, #08111a 0.01%, #122230 100%);">
    <div class="grid">
        <div class="content <?php echo $layout; ?>">
            <?php echo $bannerContent; ?>
            <div class="buttons">
                <a href="<?php echo $startLink; ?>" class="start">Start Free Trial</a>
                <a href="<?php echo $demoLink; ?>" class="demo">Request Demo</a>
            </div>
        </div>
    </div>
</div>
<div class="pagecontent">
    <?php
    // Flexible Content
    get_template_part('partials/flexible-content');
    ?>
</div>

<?php
get_footer();
