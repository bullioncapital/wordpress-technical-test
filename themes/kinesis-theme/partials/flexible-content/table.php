<?php
// This template id for a table layout
if (get_row_layout() == 'tables') :
?>
    <section class="tables">
        <div class="grid">
            <h2 class="title"><?php echo get_sub_field('section_title'); ?></h2>
            <div class="buttons">
                <?php
                if (have_rows('tabs')) :
                    while (have_rows('tabs')) :
                        the_row();
                ?>
                        <button data-tab-id="<?php echo get_sub_field('tab_id'); ?>"><?php echo get_sub_field('tab_label'); ?></button>
                <?php
                    endwhile;
                endif;
                ?>
            </div>

            <?php
            if (have_rows('tabs')) :
                while (have_rows('tabs')) :
                    the_row();
            ?>
                    <div class="tabContent" id="<?php echo get_sub_field('tab_id'); ?>">
                        <?php echo get_sub_field('tab_content'); ?>
                    </div>
            <?php
                endwhile;
            endif;
            ?>
        </div>
    </section>

<?php
endif;
