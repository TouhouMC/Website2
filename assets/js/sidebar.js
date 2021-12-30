//pc_menu_open
$('.site-contents .menu_tab .open .pc').on('click', function() {
    console.log($(this));
    if ($('.site-contents .menu_tab').hasClass('is_close')) {
        //OPEN
        console.log("Opening sidemenu")
        $('.site-contents .menu_tab').animate({
            "left": "0px"
        }, 500);
        $('.site-contents * .cont_box').each(function() {
            let b = $(this);
            b.css("width", "calc(100% - 450px)");
        });
        setTimeout(function() {
            $('.site-contents .menu_tab').removeClass('is_close');
        }, 500);
    } else {
        console.log("Closing sidemenu");
        //CLOSE
        $('.site-contents .menu_tab').animate({
            "left": "-400px"
        }, 500);
        setTimeout(function() {
            $('.site-contents * .cont_box').each(function() {
                let b = $(this);
                b.css("width", "100%");
            });
        }, 100);
        $('.site-contents .menu_tab').addClass('is_close');
    }
});