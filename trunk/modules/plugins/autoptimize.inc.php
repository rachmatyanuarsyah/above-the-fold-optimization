<?php

/**
 * Autoptimize module
 *
 * @link       https://wordpress.org/plugins/autoptimize/
 *
 * @since      2.5.0
 * @package    abovethefold
 * @subpackage abovethefold/modules/plugins
 * @author     PageSpeed.pro <info@pagespeed.pro>
 */

class Abovethefold_OPP_Autoptimize extends Abovethefold_OPP {

	/**
	 * Plugin file reference
	 */
	public $plugin_file = 'autoptimize/autoptimize.php';

	/**
	 * Initialize the class and set its properties.
	 *
	 * @var      object    $CTRL       The above the fold admin controller..
	 */
	public function __construct( &$CTRL ) {
		parent::__construct( $CTRL );

		// Is the plugin enabled?
		if ( !$this->active() ) {
			return;
		} 

	   /**
		* Autoptimize: skip Critical Path CSS
		*/
		$this->CTRL->loader->add_filter( 'autoptimize_filter_css_exclude', $this, 'skip_css' );

	   /**
		* Autoptimize: skip Critical Path Javascript
		*/
		$this->CTRL->loader->add_filter( 'autoptimize_filter_js_exclude', $this, 'skip_js' );

	   /**
		* Autoptimize: process @import (Google fonts etc)
		*/
		$this->CTRL->loader->add_filter( 'autoptimize_css_after_minify', $this, 'process_minified_css' );

	   /**
		* Autoptimize: process HTML
		*/
		$this->CTRL->loader->add_filter( 'autoptimize_html_after_minify', $this, 'process_minified_html' );

	}

	/**
	 * Is plugin active?
	 */
	public function active($type = false) {

		if ( $this->CTRL->plugins->active( $this->plugin_file ) ) {

			// plugin is active
			if (!$type) {
				return true;
			}

			// verify if plugin is active for optimization type
			switch($type) {

				// CSS optimization?
				case "css":
					return (get_option('autoptimize_css')) ? true : false;
				break;

				// HTML optimization?
				case "html":
					return (get_option('autoptimize_html')) ? true : false;
				break;
			}

			return false;
		}

		return false; // not active
	}

	/**
	 * Skip CSS from Autoptimize minificaiton
	 */
	public function skip_css($excludeCSS) {
		$excludeCSS .= ',rel="abtf"';
		return $excludeCSS;
	}

	/**
	 * Skip Javascript from Autoptimize minificaiton
	 */
	public function skip_js($excludeJS) {
		$excludeJS .= ',rel="abtf",' . $this->CTRL->optimization->criticalcss_replacement_string;
		return $excludeJS;
	}

	/**
	* Process minified CSS 
	*/
	public function process_minified_css($css) {
		return apply_filters('abtf_css', $css);
	}

	/**
	 * Autoptimize: process HTML
	 */
	public function process_minified_html($html) {
		return apply_filters('abtf_html', $html);
	}

	/**
	 * Disable CSS minification
	 */
	public function disable_css_minify() {

	   /**
		* Add Autoptimize filter to disable CSS optimization
		*/
		$this->CTRL->loader->add_filter( 'autoptimize_filter_css_noptimize', $this, 'noptimize' );
	}

	/**
	 * Disable HTML minification
	 */
	public function disable_html_minify() {

	   /**
		* Add Autoptimize filter to disable CSS optimization
		*/
		$this->CTRL->loader->add_filter( 'autoptimize_filter_html_noptimize', $this, 'noptimize' );
	}

	/**
	 * Disable Javascript minification
	 */
	public function disable_js_minify() {

	   /**
		* Add Autoptimize filter to disable CSS optimization
		*/
		$this->CTRL->loader->add_filter( 'autoptimize_filter_js_noptimize', $this, 'noptimize' );
	}

	/**
	 * Disable CSS optimization
	 */
	public function noptimize() {
		return true;
	}

	/**
	 * Clear cache
	 */
	public function clear_pagecache() {

		if (class_exists('autoptimizeCache')) {

			// clean the Autoptimize cache
			autoptimizeCache::clearall();
		}
	}

}