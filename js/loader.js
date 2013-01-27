/*------------------------------------------------------------------------------------------------------------------------
 Author: Sean Goresht
 www: http://seangoresht.com/
 github: https://github.com/srsgores

 twitter: http://twitter.com/S.Goresht

 warp-kickstrap Joomla Template
 Licensed under the GNU Public License

 =============================================================================
 Filename:  loader.js
 =============================================================================
 This file is responsible for displaying the loading animation when javascript is being loaded.

 --------------------------------------------------------------------------------------------------------------------- */

jQuery(document).ready(function($) {
	$("#ajaxloader1").hide("slow");
	$(".loading").removeClass("visuallyhidden loading").hide().show("slow");
});