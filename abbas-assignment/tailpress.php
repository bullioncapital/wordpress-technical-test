<?php

/**
 * Plugin Name:       Kinesis    
 * Description:       Seamlessly add Kinesis Blocks and Tailwind to your WordPress site without any build steps.
 * Version:           0.1
 * Author:            Abbas Yusuf (2 merged plugins, inspired by freshbrewedweb)             
 * License URI:             
 */

if (!defined('WPINC')) {
    die;
}

require __DIR__ . '/vendor/autoload.php';

use FreshBrewedWeb\Tailpress\Plugin;

function tailpress_log($message)
{
    error_log(print_r($message, true));
}

(new Plugin(__FILE__, '0.4.3'))->boot();



function enqueue_custom_styles() {
  wp_enqueue_style('custom-styles', plugin_dir_url(__FILE__) . 'css/kinesisStyle.css');
}
add_action('wp_enqueue_scripts', 'enqueue_custom_styles');


// Adding custom Blocks
function na_register_block() {
  
    // Hero Block
    wp_register_script(
      'na-hero-editor',
      plugins_url( 'src/components/hero.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element', 'wp-components' )
    );
  
    register_block_type( 'na/hero-banner', array(
      'editor_script' => 'na-hero-editor',
    ) );
  
  
    // CTA Block
    wp_register_script(
      'na-cta-block-editor',
      plugins_url( 'src/components/cta.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element', 'wp-components' )
    );
  
    register_block_type( 'na/cta-block', array(
      'editor_script' => 'na-cta-block-editor',
    ) );
  
  
    //Pricing Table
    wp_register_script(
      'na-pricing-table-editor',
      plugins_url( 'src/components/pricing-table.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element', 'wp-components' )
    );
  
    register_block_type( 'na/pricing-table', array(
      'editor_script' => 'na-pricing-table-editor',
    ) );
  
  
      //ZigZag
      wp_register_script(
        'na-zigzag-block-editor',
        plugins_url( 'src/components/zigzag.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-components' )
      );
    
      register_block_type( 'na/zigzag-block', array(
        'editor_script' => 'na-zigzag-block-editor',
      ) );
  
  
      //Perks
      wp_register_script(
        'na-perks-block-editor',
        plugins_url( 'src/components/perks.js', __FILE__ ),
        array( 'wp-blocks', 'wp-element', 'wp-components' )
      );
    
      register_block_type( 'na/perks-block', array(
        'editor_script' => 'na-perks-block-editor',
      ) );
  
  }
  add_action( 'init', 'na_register_block' );
  
  
  
  