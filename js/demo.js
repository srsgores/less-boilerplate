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

//fallback for older browsers!
if ((Modernizr.inputtypes.number == false) || (Modernizr.inputtypes.range == false)) {
	$.webshims.polyfill("forms forms-ext");
	alert("Your browser doesn't support HTML5 number inputs.  It's probably a wise idea to upgrade to a newer browser like Chrome...");
}

jQuery(document).ready(function ($)
{
	if (Modernizr.mq("only all") == false) {
		$.getScript("//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js");
	}

	var formFieldTag = ".formfield",
		fieldsetTag = "fieldset"
	wrapperDiv = "<a href='#' title='Expand/contract' class = 'show-fieldset centred'><i class='icon-menu'></i> </a>",
		formContainer = "#style-edit";

	function checkLess()
	{
		if (typeof less == "undefined")
		{
			return false;
		}
		else
		{
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
				console.log("about to set value of " + $value + $dataUnit + " for variable " + $id);
				if (typeof $dataUnit != "undefined")
				{
					less.modifyVars({$id: $value + $dataUnit});
				}
				else
				{
					less.modifyVars({$id: $value});
				}
			});
		}
	}

	function addExpandButton()
	{
		var $fieldsets = $(fieldsetTag).each(function ()
		{
			$(this).append(wrapperDiv).children().not($(".show-fieldset, legend")).slideToggle("slow");
		});
		$(".show-fieldset").on('click', function (e)
		{
			$(this).find("i").toggleClass("icon-grid-view icon-menu");
			$(this).parent().children().not($(this).add("legend")).slideToggle("slow");
			return false;
		});
	}

	function toggleStyleEdit()
	{
		var $formFields = $(formFieldTag),
			$fieldsets = $(fieldsetTag).toggle(),
			$styleEditContainer = $("#style-edit-container").toggle();
		var $toggleButton = $(".toggle-all").on('click', function (e)
		{
			$formFields.slideToggle("slow");
			$(this).find("i").toggleClass("icon-minus icon-plus");
			return false;
		}),
		$revealStyleBox = $(".toggle-style-box").on("click", function (e)
		{
			$(this).find("i").toggleClass("icon-refresh");
			$fieldsets.toggle("slow");
			if (!$fieldsets.is(":visible")) {
				$(this).attr("disabled", "disabled");
			}
			else {
				$(this).removeAttr("disabled");
			}
			return false;
		});

		var $toggleContainerButton = $(".show-edit-container").on("click", function (e)
		{
			$styleEditContainer.toggle("slow");
			$(this).find("i").toggleClass("icon-plus icon-minus");
		});
	}

	function generateCSS() {
		var $resultsArea = '<textarea class="results row">Data here</textarea>';
		var $generateButtons = $(".generate-less-css").on("click", function (e)
		{
			var olderResults = $(".results");
			olderResults.remove();
			($(this)).parent().parent().append($resultsArea);
			//then get the CSS here
			return false;
		});

	}

	updateVars();
	addExpandButton();
	toggleStyleEdit();
	generateCSS();
});

