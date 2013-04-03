/*------------------------------------------------------------------------------------------------------------------------
 Author: Sean Goresht
 www: seangoresht.com
 github: srsgores
 twitter: SGoresht
 =============================================================================
 Filename:  demo.js
 =============================================================================
 This file is responsible for allowing real-time style previews using LESS.js

 --------------------------------------------------------------------------------------------------------------------- */
jQuery(document).ready(function ($)
{
	var formFieldTag = ".formfield",
		fieldsetTag = "fieldset"
		wrapperDiv = "<a href='#' title='Expand/contract' class = 'show-fieldset'><i class='icon-menu'></i> </a>",
		formContainer = "#style-edit";

	function checkLess () {
		if (typeof less == "undefined") {
			return false;
		}
		else {
			return true;
		}
		}
	function updateVars()
	{
		if (checkLess() == true)
		{
			var $form = $(formContainer);
			$fields = $form.find("input").on('blur', function (e)
			{
				var $dataUnit = $(this).attr("data-unit"),
					$id = "@" + $(this).attr("id"),
					$value = $(this).val();
				console.log("about to set value of " + $value + " for variable " + $id);
				if (typeof $dataUnit != "undefined") {
					less.modifyVars({$id: $value + $dataUnit});
				}
				else {
					less.modifyVars({$id: $value});
				}
			});
		}
	}
	function addExpandButton() {
		var $fieldsets = $(fieldsetTag).each(function() {
			$(this).append(wrapperDiv).children().not($(".show-fieldset, legend")).slideToggle("slow");
		});
		$(".show-fieldset").on('click', function (e)
		{
			$(this).find("i").toggleClass("icon-grid-view icon-menu");
			$(this).parent().children().not($(this).add("legend")).slideToggle("slow");
		});
	}
	function toggleStyleEdit() {
		var $formFields = $(formFieldTag);
		var $toggleButtons = $(".toggle-style-edit").on('click', function (e)
		{
			$formFields.slideToggle("slow");
			$(this).find("i").toggleClass("icon-minus icon-plus");
		});
	}
	updateVars();
	addExpandButton();
	toggleStyleEdit();
});

