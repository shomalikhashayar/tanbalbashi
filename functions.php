<?php

// Enqueue Quasar CSS
function enqueue_quasar_styles()
{
    wp_register_style(
        "vendor",
        get_template_directory_uri() . "/app/dist/pwa/css/vendor.4566e07b.css",
        [],
        false,
        "all"
    );

    wp_enqueue_style("vendor");

    wp_register_style(
        "app",
        get_template_directory_uri() . "/app/dist/pwa/css/app.7c3058f3.css",
        [],
        false,
        "all"
    );

    wp_enqueue_style("app");

    wp_register_style(
        "main-style",
        get_template_directory_uri() . "/style.css",
        [],
        false,
        "all"
    );

    wp_enqueue_style("main-style");

}
add_action('wp_enqueue_scripts', 'enqueue_quasar_styles');

// Enqueue Quasar JavaScript
function enqueue_quasar_js()
{
    wp_enqueue_script(
        'vendor',
        get_template_directory_uri() . '/app/dist/pwa/js/vendor.6b3b0c94.js',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'app',
        get_template_directory_uri() . '/app/dist/pwa/js/app.b4efbef8.js',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'service-worker',
        get_template_directory_uri() . '/app/dist/pwa/service-worker.js',
        [],
        null,
        true
    );
}


add_action('wp_enqueue_scripts', 'enqueue_quasar_js');

?>