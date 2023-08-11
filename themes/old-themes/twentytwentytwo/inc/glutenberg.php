<?php

/**
 * Custom Gutenberg functions.
 */

 function kenisis_gutenberg_blocks() {
    
    add_theme_support( 
        'editor-color-palette',

    array(
        array(
            'name' => 'Blue',
            'slug' => 'blue',
            'color' => '#0000FF',
        ),
        array(
            'name' => 'White',
            'slug' => 'white',
            'color' => '#FFFFFF',
        ),
        array(
            'name' => 'Black',
            'slug' => 'black',
            'color' => '#000000',
        )
    ));
}

add_action( 'init', 'kenisis_gutenberg_blocks' );