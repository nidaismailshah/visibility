(function ($) {

/**
 * Provide the summary information for the block settings vertical tabs.
 */
Drupal.behaviors.postdateSettings = {
  attach: function (context) {

	$('fieldset#edit-post-date', context).drupalSetSummary(function (context) {
      var $radio = $('input[name="start"]:checked', context);
      var $val = $radio.val();
      var $date = $('input[name="res_date"]', context).val();
      if (!$('input[name="start"]',context).is(':checked')) {
        return Drupal.t('Not restricted');
      }
      else {
        return Drupal.t('Show this for all nodes created ')+ $val +" "+ $date;
      }
    });
  }
};

})(jQuery);
