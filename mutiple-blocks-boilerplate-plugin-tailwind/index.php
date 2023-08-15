<?php

/*
  Plugin Name: Multiple Blocks Plugin
  Description: A wordpress plugin that allows for rendering multiple instances of Block components.
  Requires at least: 5.8
  Requires PHP:      7.0
  Version: 1.0
  Author: Josh
  Author URI: https://github.com/praizjosh
*/

if (!defined('ABSPATH'))
  exit; // Exit if accessed directly

class HeroBlock
{
  function __construct()
  {
    add_action('init', array($this, 'onInit'));
  }

  function onInit()
  {
    // Block backend script (.js) and style (.css) files
    wp_register_script('heroSectionBlockScript', plugin_dir_url(__FILE__) . 'build/hero-block/index.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'));
    wp_register_style('heroSectionBlockStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    // Block custom block properties
    register_block_type(
      'hero-block/hero-section-block',
      array(
        'render_callback' => array($this, 'renderCallback'),
        //render callback function for rendering block on the frontend
        'editor_script' => 'heroSectionBlockScript',
        'editor_style' => 'heroSectionBlockStyle'
      )
    );
  }

  function renderCallback($attributes)
  {
    if (has_block('hero-block/hero-section-block')) {
      // Block frontend script (.js) and style (.css) files
      wp_enqueue_script('heroSectionBlockFrontendScript', plugin_dir_url(__FILE__) . 'build/hero-block/frontend.js', array('wp-element'));
      wp_enqueue_style('heroSectionBlockFrontendStyles', plugin_dir_url(__FILE__) . 'build/index.css');

      ob_start(); ?>
      <div class="hero-section-block-update">
        <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
      </div>
      <?php return ob_get_clean();
    }
  }

}
$newHeroBlock = new HeroBlock();


class TableBlock
{
  function __construct()
  {
    add_action('init', array($this, 'onInit'));
  }

  function onInit()
  {
    // Block backend script (.js) and style (.css) files
    wp_register_script('tableSectionBlockScript', plugin_dir_url(__FILE__) . 'build/table-block/index.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'));
    wp_register_style('tableSectionBlockStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    // Block custom block properties
    register_block_type(
      'table-block/table-section-block',
      array(
        'render_callback' => array($this, 'renderCallback'),
        //render callback function for rendering block on the frontend
        'editor_script' => 'tableSectionBlockScript',
        'editor_style' => 'tableSectionBlockStyle'
      )
    );

  }

  function renderCallback($attributes)
  {
    if (has_block('table-block/table-section-block')) {

      // Block frontend script (.js) and style (.css) files
      wp_enqueue_script('tableSectionBlockFrontendScript', plugin_dir_url(__FILE__) . 'build/table-block/frontend.js', array('wp-element'));
      wp_enqueue_style('tableSectionBlockFrontendStyles', plugin_dir_url(__FILE__) . 'build/index.css');

      ob_start(); ?>
      <div class="table-section-block-update">
        <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
      </div>
      <?php return ob_get_clean();
    }
  }

}
$newTableBlock = new TableBlock();

class ZigzagBlock
{
  function __construct()
  {
    add_action('init', array($this, 'onInit'));
  }

  function onInit()
  {
    // Block backend script (.js) and style (.css) files
    wp_register_script('zigzagSectionBlockScript', plugin_dir_url(__FILE__) . 'build/zigzag-block/index.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'));
    wp_register_style('zigzagSectionBlockStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    // Block custom block properties
    register_block_type(
      'zigzag-block/zigzag-section-block',
      array(
        'render_callback' => array($this, 'renderCallback'),
        //render callback function for rendering block on the frontend
        'editor_script' => 'zigzagSectionBlockScript',
        'editor_style' => 'zigzagSectionBlockStyle'
      )
    );
  }

  function renderCallback($attributes)
  {
    if (has_block('zigzag-block/zigzag-section-block')) {
      // Block frontend script (.js) and style (.css) files
      wp_enqueue_script('zizagSectionBlockFrontendScript', plugin_dir_url(__FILE__) . 'build/zigzag-block/frontend.js', array('wp-element'));
      wp_enqueue_style('zizagSectionBlockFrontendStyles', plugin_dir_url(__FILE__) . 'build/index.css');

      ob_start(); ?>
      <div class="zigzag-section-block-update">
        <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
      </div>
      <?php return ob_get_clean();
    }
  }

}
$newZigzagBlock = new ZigzagBlock();

class CtaBlock
{
  function __construct()
  {
    add_action('init', array($this, 'onInit'));
  }

  function onInit()
  {
    // Block backend script (.js) and style (.css) files
    wp_register_script('ctaSectionBlockScript', plugin_dir_url(__FILE__) . 'build/cta-block/index.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'));
    wp_register_style('ctaSectionBlockStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    // Block custom block properties
    register_block_type(
      'cta-block/cta-section-block',
      array(
        'render_callback' => array($this, 'renderCallback'),
        //render callback function for rendering block on the frontend
        'editor_script' => 'ctaSectionBlockScript',
        'editor_style' => 'ctaSectionBlockStyle'
      )
    );
  }


  function renderCallback($attributes)
  {
    if (has_block('cta-block/cta-section-block')) {
      // Block frontend script (.js) and style (.css) files
      wp_enqueue_script('ctaSectionBlockFrontendScript', plugin_dir_url(__FILE__) . 'build/cta-block/frontend.js', array('wp-element'));
      wp_enqueue_style('ctaSectionBlockFrontendStyles', plugin_dir_url(__FILE__) . 'build/index.css');

      ob_start(); ?>
      <div class="cta-section-block-update">
        <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
      </div>
      <?php return ob_get_clean();
    }
  }

}
$newCtaBlock = new CtaBlock();


class PerksBlock
{
  function __construct()
  {
    add_action('init', array($this, 'onInit'));
  }

  function onInit()
  {

    // Block backend script (.js) and style (.css) files
    wp_register_script('perksSectionBlockScript', plugin_dir_url(__FILE__) . 'build/perks-block/index.js', array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components'));
    wp_register_style('perksSectionBlockStyle', plugin_dir_url(__FILE__) . 'build/index.css');

    // Block custom block properties
    register_block_type(
      'perks-block/perks-section-block',
      array(
        'render_callback' => array($this, 'renderCallback'),
        //render callback function for rendering block on the frontend
        'editor_script' => 'perksSectionBlockScript',
        'editor_style' => 'perksSectionBlockStyle'
      )
    );
  }

  function renderCallback($attributes)
  {
    if (has_block('perks-block/perks-section-block')) {
      // Hero Block
      // Block frontend script (.js) and style (.css) files
      wp_enqueue_script('perksSectionBlockFrontendScript', plugin_dir_url(__FILE__) . 'build/perks-block/frontend.js', array('wp-element'));
      wp_enqueue_style('perksSectionBlockFrontendStyles', plugin_dir_url(__FILE__) . 'build/index.css');

      ob_start(); ?>
      <div class="perks-section-block-update">
        <pre style="display: none;"><?php echo wp_json_encode($attributes) ?></pre>
      </div>
      <?php return ob_get_clean();
    }
  }

}
$newPerksBlock = new PerksBlock();