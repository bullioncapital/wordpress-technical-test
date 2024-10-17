<?php
/**
 * ABX customization
 *
 * 
 *
 * @wordpress-plugin
 * Plugin Name:                ABX customization
 * Plugin URI:               
 * Description:                A custom plugin for ABX Wordpress Task
 * Version:                    1.0.0
 * Requires at least:          6.1
 * Requires PHP:               7.4
 * Author:                     TC Kuan
 * Author URI:                 
 * Text Domain:                abxtxt
 * License:                    
 * License URI:               
 * Domain Path:                /languages
 * GitHub Plugin URI:         
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

if ( ! defined( 'ABX_URL' ) ) {
	define( 'ABX_URL', plugin_dir_url( __FILE__ ).'assets/');
}

class AbxIntergration {

   // protected $apikey = '71e5cf69-c3ae-4b47-b495-6abaf0608c64';
	protected $apikey = 'CG-i3KYgS1K2Wf5xLWNF86fj7ZM';
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [$this, 'enqueue_scripts'] );
		add_shortcode( 'coindata', [$this, 'coindata_render'] );
		add_action( 'wp_ajax_coin_req', [$this,'coin_req_cb'] );	
        add_action( 'wp_ajax_nopriv_coin_req'	, [$this,'coin_req_cb'] );		   
	}

	public function enqueue_scripts(){
		wp_enqueue_script( 'jquery-ui-sortable' );
		
		wp_register_script( 'abx-script', ABX_URL.'abx-script.min.js', array('jquery'), '1.0', true );
		 $data = [
            'ajax_url' => admin_url('admin-ajax.php'),
			'nonce' => wp_create_nonce('abx-req'),
        ];
		wp_localize_script( 'abx-script', 'abx', $data );
		wp_enqueue_script( 'abx-script' );
		wp_enqueue_script( 'sparkline', 'https://cdnjs.cloudflare.com/ajax/libs/jquery-sparklines/2.1.2/jquery.sparkline.min.js', array('jquery'), '2.1.2', false );
		wp_enqueue_style( 'abx-style', ABX_URL.'abx-style.min.css' );
	}

	public function coindata_render($atts){
		$atts = shortcode_atts( array(
			'coins' => 'bitcoin,ethereum',
			'convert' => 'USD', 	
			'history' => 7,
			'dataid' => 'set1',
		), $atts, 'coindata' );
	
	    ob_start();		
		//echo json_encode( $this->coin_req($atts) );
		require_once('coin-table.php');
		return ob_get_clean();

	}

	public function coin_req_cb(){
		if(!wp_verify_nonce( $_POST['data']['nonce'], 'abx-req' ) ){
			echo json_encode([
				'success' => false,
				'errors' => ['something went wrong','Try refresh the page']
			]);
			die();
		}
	
		$headers = [
			'X-CMC_PRO_API_KEY: ' . $this->apikey
		];
		$symbols = $_POST['data']['symbols'];
		$range = '-'.$_POST['data']['range'].' days';
		$start = date('Y-m-d', strtotime('-7 days') );  
		$end = date('Y-m-d'); 
	
		$transient_key = 'coingecko_' .$_POST['data']['dataid']; 

		$cached_data = get_transient($transient_key);
		if ($cached_data !== false) {
			// Return cached data
			echo json_encode([
				'success' => true,
				'data' => $cached_data
			]);
			die();
		}


			$url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency='.$_POST['data']['convert'].'&ids='.trim($_POST['data']['symbols']).'&order=id_asc&page=1&sparkline=true&price_change_percentage='.$_POST['data']['range'].'d&precision=2';

			$headers = [
    		'x-cg-demo-api-key: ' . $this->apikey,
    		'Accept: application/json'
			];

			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

			$response = curl_exec($ch);
			$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);  // Get the HTTP response code
			$curlError = curl_error($ch);  // Check for any cURL errors
			curl_close($ch);

			if ($curlError) {
				// If a cURL error occurred
				$errors[] = "CURL Error for $symbol: $curlError";
			} elseif ($httpcode >= 400) {
				// If the API returned an error response
				$errors[] = "API Error for $symbol: HTTP status code $httpcode. Response: " . $response;
			} else {
				// If successful, decode the response
				
				$data = json_decode($response, true);
				set_transient($transient_key, $data, 3600);
			}
		

		if (!empty($errors)) {
	
			echo json_encode([
				'success' => false,
				'errors' => $errors
			]);
		} else {
		
			echo json_encode([
				'success' => true,
				'data' => $data
			]);
		}
		die();
	}
}

new AbxIntergration();
