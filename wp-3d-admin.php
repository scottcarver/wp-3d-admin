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
add_action( 'admin_enqueue_scripts', 'threedee_admin_script' );

// Add Filter
add_filter("script_loader_tag", "add_module_to_my_script", 10, 3);

// Add the plugin JavaScript
function threedee_admin_script( $hook ) {
    // Only show on Dashboard
    if ( 'edit.php' != $hook ) { return;}
    // Register Script
    wp_register_script('my_3d_script', plugin_dir_url( __FILE__ ) . '/dist/.js', array(), '1.0');
    // Eneuee It
    wp_enqueue_script('my_3d_script');
}

// Filter the script embed and add new properties
function add_module_to_my_script($tag, $handle, $src){
    if ("my-script" === $handle) {
        $tag = '<script type="module" crossorigin src="' . esc_url($src) . '"></script>';
    }
    return $tag;
}