<?php
/**
 * The main template file
 *
 * @package blank
 */

get_header();
?>
    <main>

		<?php
		if ( have_posts() ) {

			while ( have_posts() ) {
				the_post();
                the_content();
			}
		}
		?>

	</main>

<?php
get_footer();
