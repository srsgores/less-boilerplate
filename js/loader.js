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
		delayClasses = $(".delay-1, .delay-2, .delay-3, .delay-4, .delay-5, .delay-6, .delay-7, .delay-8, .delay-9, .delay-10"),
		hideClass = "hidden",
		$loader = $(".loader1");

	function toggleLoader()
	{
		if (Modernizr.csstransitions) {
			$loader.toggleClass(hideClass);
			$(delayClasses).toggleClass(hideClass);
			$loader.toggleClass(hideClass).toggle();
			$container.toggleClass("loading");
		}
		else {
			$loader.add(delayClasses).removeClass(hideClass);
			$container.toggle().add($loader).toggle("slow");
			console.log("Browser did not support transitions, so doing fallback");
		}
	}
	toggleLoader();
});