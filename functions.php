<?php

// Enqueue Quasar CSS
function enqueue_quasar_styles()
{
    wp_register_style(
        "vendor",
        get_template_directory_uri() . "/app/dist/spa/css/vendor.1440b53e.css",
        [],
        false,
        "all"
    );

    wp_enqueue_style("vendor");

    wp_register_style(
        "app",
        get_template_directory_uri() . "/app/dist/spa/css/app.4ae39ddd.css",
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
        get_template_directory_uri() . '/app/dist/spa/js/vendor.bd810328.js',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'chunk1',
        get_template_directory_uri() . '/app/dist/spa/js/123.9af94226.js',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'chunk2',
        get_template_directory_uri() . '/app/dist/spa/js/134.0420a6fa.js',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'chunk3',
        get_template_directory_uri() . '/app/dist/spa/js/460.04b7a7b2.js',
        [],
        null,
        true
    );

    wp_enqueue_script(
        'app',
        get_template_directory_uri() . '/app/dist/spa/js/app.8d8b1d92.js',
        [],
        null,
        true
    );
}

add_action('wp_enqueue_scripts', 'enqueue_quasar_js');

?>