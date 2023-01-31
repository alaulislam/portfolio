(function ($) {
    "use strict";

    jQuery(document).ready(function () {
       
        
        bibtexify("#bibtex", "pubTable");
        $('#pubTablepubchart').hide();
        $('.legend').hide();
        $('#pubTable_filter').hide();
        /***MENU TOGGLE ANIMATION***/
        $('.toggle-normal').on('click', function() {
                $('.top-bar').toggleClass('top-transform');
                $('.middle-bar').toggleClass('middle-transform');
                $('.bottom-bar').toggleClass('bottom-transform');
            });


        })

})(jQuery);


