<?php
// -- The template part for displaying the FLEXIBLE CONTENT
// -------------------------------------------------------------

if (have_rows('flexible_content')) :
?>
    <article class="flexiblecontent">
        <?php
        while (have_rows('flexible_content')) : the_row();

            if (get_row_layout() == 'services_blocks') :
                get_template_part('partials/flexible-content/services');

            elseif (get_row_layout() == 'tables') :
                get_template_part('partials/flexible-content/table');

            elseif (get_row_layout() == 'textmedia') :
                get_template_part('partials/flexible-content/text_media');

            endif;

        endwhile;
        ?>
    </article>
<?php
endif;
