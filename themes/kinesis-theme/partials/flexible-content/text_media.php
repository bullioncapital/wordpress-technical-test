<?php

// check if clone field exists
if (get_row_layout() == 'textmedia') :
    $layout = get_sub_field('layout');
?>
    <section class="textMedia">
        <div class="grid">
            <?php if ($layout == 'text_image') : ?>
                <div class="text_media">
                    <div class="text">
                        <?php
                        if (have_rows('text_group')) :
                            while (have_rows('text_group')) : the_row();
                        ?>
                                <h2><?php the_sub_field('section_title'); ?></h2>
                                <p><?php the_sub_field('subheading'); ?></p>
                                <ul>
                                    <?php
                                    if (have_rows('list_items')) :
                                        while (have_rows('list_items')) : the_row();
                                            $listIcon = get_sub_field('list_icon');
                                            $iconUrl = $listIcon['url'];
                                            $iconAlt = $listIcon['alt'];
                                            $listHeading = get_sub_field('list_heading');
                                            $listText = get_sub_field('list_text');
                                    ?>
                                            <li>
                                                <div class="list_icon">
                                                    <img src="<?php echo $iconUrl; ?>" alt="<?php echo $iconAlt; ?>">
                                                </div>
                                                <div class="list_text">
                                                    <h4><?php echo $listHeading; ?></h4>
                                                    <p><?php echo $listText; ?></p>
                                                </div>
                                            </li>
                                    <?php
                                        endwhile;
                                    endif; ?>
                                </ul>
                        <?php
                            endwhile;
                        endif; ?>
                    </div>
                    <div class="media">
                        <?php
                        $image = get_sub_field('image');
                        $url = $image['url'];
                        $alt = $image['alt'];
                        ?>
                        <img src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">
                    </div>
                </div>
            <?php elseif ($layout == 'image_text') : ?>
                <div class="media_text">
                    <div class="media">
                        <?php
                        $image = get_sub_field('image');
                        $url = $image['url'];
                        $alt = $image['alt'];
                        ?>
                        <img src="<?php echo $url; ?>" alt="<?php echo $alt; ?>">
                    </div>
                    <div class="text">
                        <?php
                        if (have_rows('text_group')) :
                            while (have_rows('text_group')) : the_row();
                        ?>
                                <h2><?php the_sub_field('section_title'); ?></h2>
                                <p><?php the_sub_field('subheading'); ?></p>
                                <ul>
                                    <?php
                                    if (have_rows('list_items')) :
                                        while (have_rows('list_items')) : the_row();
                                            $listIcon = get_sub_field('list_icon');
                                            $iconUrl = $listIcon['url'];
                                            $iconAlt = $listIcon['alt'];
                                            $listHeading = get_sub_field('list_heading');
                                            $listText = get_sub_field('list_text');
                                    ?>
                                            <li>
                                                <div class="list_icon">
                                                    <img src="<?php echo $iconUrl; ?>" alt="<?php echo $iconAlt; ?>">
                                                </div>
                                                <div class="list_text">
                                                    <h4><?php echo $listHeading; ?></h4>
                                                    <p><?php echo $listText; ?></p>
                                                </div>
                                            </li>
                                    <?php
                                        endwhile;
                                    endif; ?>
                                </ul>
                        <?php
                            endwhile;
                        endif; ?>
                    </div>
                </div>

            <?php
            endif;
            ?>
        </div>
    </section>
<?php
endif;
