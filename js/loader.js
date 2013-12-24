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

jQuery(document).ready(function ($)
{
	var $container = $(".container"),
		hideClass = "hidden",
		$loader = $(".loader");

	function toggleLoader()
	{
		if (Modernizr.csstransitions) {
			$loader.toggleClass(hideClass);
			$loader.toggleClass(hideClass).toggle();
			$container.toggleClass("loading");
		}
		else {
			$container.toggle().add($loader).toggle("slow");
			console.log("Browser did not support transitions, so doing fallback");
		}
	}
	toggleLoader();
});