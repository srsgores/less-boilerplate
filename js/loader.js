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
		loadClass = "loading",
		$loader = $(".loader");

	function toggleLoader()
	{
		$container.toggleClass(loadClass);
		$loader.toggle("slow");
	}
	toggleLoader();
});