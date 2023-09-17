<?php
/*
Plugin Name:  RC Technical Test
Description:  Technical test for Matt Gibson
Version:      1.0
Author:       Rimo Cabales
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  wpb-tutorial
Domain Path:  /languages
*/

// Define path and URL to the ACF plugin.
define( 'KINESIS_PATH', plugin_dir_path(__FILE__) . '/includes/acf/' );
define( 'KINESIS_URL', plugin_dir_url(__FILE__) . '/includes/acf/' );

// Include the ACF plugin.
include_once( KINESIS_PATH . 'acf.php' );

// Customize the url setting to fix incorrect asset URLs.
add_filter('acf/settings/url', 'my_acf_settings_url');
function my_acf_settings_url( $url ) {
    return KINESIS_URL;
}

// (Optional) Hide the ACF admin menu item.
// add_filter('acf/settings/show_admin', '__return_false');

// When including the PRO plugin, hide the ACF Updates menu
add_filter('acf/settings/show_updates', '__return_false', 100);

register_block_type( __DIR__ . '/blocks/hero' );
register_block_type( __DIR__ . '/blocks/cta' );
register_block_type( __DIR__ . '/blocks/text-and-list' );
register_block_type( __DIR__ . '/blocks/tiles' );
register_block_type( __DIR__ . '/blocks/coins' );


function styles() {
	$plugin_url = plugin_dir_url( __FILE__ );
    wp_enqueue_style( 'style',  $plugin_url . "/style.css");
}

add_action( 'wp_enqueue_scripts', 'styles' );

function scripts() {
	$plugin_url = plugin_dir_url( __FILE__ );
	wp_register_script( 'coins', $plugin_url . '/blocks/coins/assets/scripts/index.js', ['acf'] );
	wp_register_script( 'coins-graph', '//www.gstatic.com/charts/loader.js');
}

add_action( 'init', 'scripts' );


add_action( 'acf/include_fields', function() {
	if ( ! function_exists( 'acf_add_local_field_group' ) ) {
		return;
	}

	acf_add_local_field_group( array(
		'key' => 'group_6506c86c7927c',
		'title' => 'Block: Coins',
		'fields' => array(
			array(
				'key' => 'field_6506c86d34ee4',
				'label' => 'Heading',
				'name' => 'heading',
				'aria-label' => '',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Lorem ipsum',
				'maxlength' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
			),
			array(
				'key' => 'field_6506c89934ee5',
				'label' => 'CTA',
				'name' => 'cta',
				'aria-label' => '',
				'type' => 'link',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'block',
					'operator' => '==',
					'value' => 'acf/coins',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_rest' => 0,
	) );

	acf_add_local_field_group( array(
		'key' => 'group_65036d936699f',
		'title' => 'Block: CTA',
		'fields' => array(
			array(
				'key' => 'field_65036d930456f',
				'label' => 'Text',
				'name' => 'text',
				'aria-label' => '',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				'maxlength' => '',
				'rows' => 4,
				'placeholder' => '',
				'new_lines' => 'br',
			),
			array(
				'key' => 'field_65036ddf04570',
				'label' => 'CTA',
				'name' => 'cta',
				'aria-label' => '',
				'type' => 'link',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'block',
					'operator' => '==',
					'value' => 'acf/cta',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_rest' => 0,
	) );

	acf_add_local_field_group( array(
		'key' => 'group_6500d7a1bef68',
		'title' => 'Block: Hero',
		'fields' => array(
			array(
				'key' => 'field_6500d7a2e3c6d',
				'label' => 'Sub heading',
				'name' => 'sub_heading',
				'aria-label' => '',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Kinesis',
				'maxlength' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
			),
			array(
				'key' => 'field_6500d91b48af1',
				'label' => 'Heading',
				'name' => 'heading',
				'aria-label' => '',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Lorem ipsum dolor sit amet, consectetur',
				'maxlength' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
			),
			array(
				'key' => 'field_6500d92f1c8f9',
				'label' => 'Blurb',
				'name' => 'blurb',
				'aria-label' => '',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
				'maxlength' => '',
				'rows' => 4,
				'placeholder' => '',
				'new_lines' => 'br',
			),
			array(
				'key' => 'field_6500d96ca2b9d',
				'label' => 'Primary CTA',
				'name' => 'primary_cta',
				'aria-label' => '',
				'type' => 'link',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
			),
			array(
				'key' => 'field_6500d98aa2b9e',
				'label' => 'Secondary CTA',
				'name' => 'secondary_cta',
				'aria-label' => '',
				'type' => 'link',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'block',
					'operator' => '==',
					'value' => 'acf/hero',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_rest' => 0,
	) );

	acf_add_local_field_group( array(
		'key' => 'group_650397ce3a33f',
		'title' => 'Block: Text and list',
		'fields' => array(
			array(
				'key' => 'field_650397ceb88d9',
				'label' => 'Heading',
				'name' => 'heading',
				'aria-label' => '',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Lorem ipsum dolor sit amet, consectetur',
				'maxlength' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
			),
			array(
				'key' => 'field_650397f8b88da',
				'label' => 'Text',
				'name' => 'text',
				'aria-label' => '',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.',
				'maxlength' => '',
				'rows' => 4,
				'placeholder' => '',
				'new_lines' => 'br',
			),
			array(
				'key' => 'field_65039818b88db',
				'label' => 'List',
				'name' => 'list',
				'aria-label' => '',
				'type' => 'repeater',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'block',
				'pagination' => 0,
				'min' => 0,
				'max' => 0,
				'collapsed' => '',
				'button_label' => 'Add list item',
				'rows_per_page' => 20,
				'sub_fields' => array(
					array(
						'key' => 'field_6503982eb88dc',
						'label' => 'List icon',
						'name' => 'list_icon',
						'aria-label' => '',
						'type' => 'select',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'choices' => array(
							'cards' => 'Cards',
							'graph' => 'Graph',
						),
						'default_value' => 'cards',
						'return_format' => 'value',
						'multiple' => 0,
						'allow_null' => 0,
						'ui' => 0,
						'ajax' => 0,
						'placeholder' => '',
						'parent_repeater' => 'field_65039818b88db',
					),
					array(
						'key' => 'field_65039870b88dd',
						'label' => 'List header',
						'name' => 'list_header',
						'aria-label' => '',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => 'Lorem ipsum dolor sit',
						'maxlength' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'parent_repeater' => 'field_65039818b88db',
					),
					array(
						'key' => 'field_6503989eb88de',
						'label' => 'List text',
						'name' => 'list_text',
						'aria-label' => '',
						'type' => 'textarea',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
						'maxlength' => '',
						'rows' => '',
						'placeholder' => '',
						'new_lines' => '',
						'parent_repeater' => 'field_65039818b88db',
					),
				),
			),
			array(
				'key' => 'field_650398c2b88df',
				'label' => 'CTA',
				'name' => 'cta',
				'aria-label' => '',
				'type' => 'link',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'block',
					'operator' => '==',
					'value' => 'acf/text-and-list',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_rest' => 0,
	) );

	acf_add_local_field_group( array(
		'key' => 'group_6506204d4d1b6',
		'title' => 'Block: Tiles',
		'fields' => array(
			array(
				'key' => 'field_6506204eaf9db',
				'label' => 'Heading',
				'name' => 'heading',
				'aria-label' => '',
				'type' => 'text',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Lorem ipsum dolor sit amet',
				'maxlength' => '',
				'placeholder' => '',
				'prepend' => '',
				'append' => '',
			),
			array(
				'key' => 'field_650620a3af9dc',
				'label' => 'Text',
				'name' => 'text',
				'aria-label' => '',
				'type' => 'textarea',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'default_value' => 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
				'maxlength' => '',
				'rows' => 4,
				'placeholder' => '',
				'new_lines' => 'br',
			),
			array(
				'key' => 'field_650620d2af9dd',
				'label' => 'Tiles',
				'name' => 'tiles',
				'aria-label' => '',
				'type' => 'repeater',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'layout' => 'block',
				'pagination' => 0,
				'min' => 0,
				'max' => 0,
				'collapsed' => '',
				'button_label' => 'Add tile',
				'rows_per_page' => 20,
				'sub_fields' => array(
					array(
						'key' => 'field_650620ddaf9de',
						'label' => 'Tile icon',
						'name' => 'tile_icon',
						'aria-label' => '',
						'type' => 'select',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'choices' => array(
							'api' => 'API',
							'fees' => 'Fees',
							'exchange' => 'Exchange',
						),
						'default_value' => 'api',
						'return_format' => 'value',
						'multiple' => 0,
						'allow_null' => 0,
						'ui' => 0,
						'ajax' => 0,
						'placeholder' => '',
						'parent_repeater' => 'field_650620d2af9dd',
					),
					array(
						'key' => 'field_6506213aaf9df',
						'label' => 'Tile heading',
						'name' => 'tile_heading',
						'aria-label' => '',
						'type' => 'text',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => 'Lorem ipsum dolor',
						'maxlength' => '',
						'placeholder' => '',
						'prepend' => '',
						'append' => '',
						'parent_repeater' => 'field_650620d2af9dd',
					),
					array(
						'key' => 'field_6506214aaf9e0',
						'label' => 'Tile text',
						'name' => 'tile_text',
						'aria-label' => '',
						'type' => 'textarea',
						'instructions' => '',
						'required' => 0,
						'conditional_logic' => 0,
						'wrapper' => array(
							'width' => '',
							'class' => '',
							'id' => '',
						),
						'default_value' => 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.',
						'maxlength' => '',
						'rows' => 4,
						'placeholder' => '',
						'new_lines' => 'br',
						'parent_repeater' => 'field_650620d2af9dd',
					),
				),
			),
			array(
				'key' => 'field_65062177af9e1',
				'label' => 'Primary CTA',
				'name' => 'primary_cta',
				'aria-label' => '',
				'type' => 'link',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
			),
			array(
				'key' => 'field_65062198af9e2',
				'label' => 'Secondary CTA',
				'name' => 'secondary_cta',
				'aria-label' => '',
				'type' => 'link',
				'instructions' => '',
				'required' => 0,
				'conditional_logic' => 0,
				'wrapper' => array(
					'width' => '',
					'class' => '',
					'id' => '',
				),
				'return_format' => 'array',
			),
		),
		'location' => array(
			array(
				array(
					'param' => 'block',
					'operator' => '==',
					'value' => 'acf/tiles',
				),
			),
		),
		'menu_order' => 0,
		'position' => 'normal',
		'style' => 'default',
		'label_placement' => 'top',
		'instruction_placement' => 'label',
		'hide_on_screen' => '',
		'active' => true,
		'description' => '',
		'show_in_rest' => 0,
	) );
} );

