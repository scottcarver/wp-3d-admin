<?php
/**
 * Plugin Name:       WP 3D Admin
 * Description:       Replace the dashboard with a 3D scene
 * Requires at least: 6.0
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Scott Carver
 * Text Domain:       wp-3d-admin
 */



// Run custom "threedee_admin_script" on "admin_enqueue_scripts" hook
// add_action( 'admin_enqueue_scripts', 'threedee_admin_script' );
/*
// Add Filter
add_filter("script_loader_tag", "add_module_to_my_script", 10, 3);

// Add the plugin JavaScript
function threedee_admin_script( $hook ) {
    // Only show on Dashboard
    if ( 'edit.php' != $hook ) { return;}


// Filter the script embed and add new properties
function add_module_to_my_script($tag, $handle, $src){
    if ("my-script" === $handle) {
        $tag = '<script type="module" crossorigin src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}
*/

// Determine if the dashboard is showing based on the URL
// (the last two portions of the url are "wp-admin" and "index.php")
$site_link = explode('/', $_SERVER['PHP_SELF']);
$site_linklast = $site_link[sizeof($site_link) - 1] === 'index.php';
$site_linkpenultimate = $site_link[sizeof($site_link) - 2] === 'wp-admin';
$site_isdashboard = $site_linklast && $site_linkpenultimate ;

if($site_isdashboard){
    // threedee_admin_script('dashboard');
        // Register Script
        // wp_register_script('my_3d_script', plugin_dir_url( __FILE__ ) . '/dist/.js', array(), '1.0');
        // // Eneuee It
        // wp_enqueue_script('my_3d_script');

        my_custom_js();
    // }
}


// echo("condition 1 " . $site_condition1);

// echo("current screen " .  $actual_link);
// var_dump($site_link);
// echo("current screen " .  get_site_url());


function my_custom_js() {
    $jsbuild = 'index.js'; //'index-64924c4a.js';
    $cssbuild = 'index.css'; //'index-3aea7e8e.css'; // 
    echo '<script type="module" crossorigin type="text/javascript" src="'.plugin_dir_url( __FILE__ ) . '/dist/assets/'.$jsbuild.'"></script>';
    echo '<link rel="stylesheet" href="'.plugin_dir_url( __FILE__ ) . '/dist/assets/'.$cssbuild.'">';
}

// Add hook for admin <head></head>
//  add_action( 'admin_head', 'my_custom_js' );

// Add hook for front-end <head></head>
// add_action( 'wp_head', 'my_custom_js' );

