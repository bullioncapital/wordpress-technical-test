<?php
$footerImage = get_field('footer_image');
$imageUrl = $footerImage['url'];
$footerText = get_field('footer_text');
$footerLink = get_field('footer_link');
?>

<div class="footer" style="background: url('<?php echo $imageUrl; ?>'); background-repeat: no-repeat; background-size:cover;">
    <div class="grid">
        <div class="text">
            <h2><?php echo $footerText; ?></h2>
            <div class="button">
                <a href="<?php echo $footerLink; ?>">Join Kenisis</a>
            </div>
        </div>
    </div>
</div>
</div>
<!-- JavaScripts -->
<script src="<?php bloginfo('template_url'); ?>/dist/js/jquery-3.3.1.min.js" type="text/javascript"></script>
<script src="<?php bloginfo('template_url'); ?>/dist/js/main.js" type="text/javascript"></script>

<?php wp_footer(); ?>
</body>

</html>