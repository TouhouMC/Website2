//pc_menu_open
$('.site-contents .menu_tab .open .pc').on('click', function(){
    console.log($(this));
    if($('.site-contents .menu_tab').hasClass('is_close')){
        //OPEN
        console.log("Menu Opening")
        $('.site-contents .menu_tab .open').animate({
            "left": "400px"
        }, 500);
        $('.site-contents .menu_tab .menu').animate({
            "left": "0px"
        }, 500);
        $('.site-contents * .cont').each(function (){
            let b = $(this);
            console.log(b.width());
            b.css("transition-duration", "500ms");
            b.css("width", "calc(100% - 450px)");
        });
        setTimeout(function (){
            $('.site-contents .menu_tab').removeClass('is_close');
        }, 500);
    }else{
        console.log("Menu Closing");
        //CLOSE
        $('.site-contents .menu_tab .open').animate({
            "left": "0px"
        }, 500);
        $('.site-contents .menu_tab .menu').animate({
            "left": "-400px"
        }, 500);
        setTimeout(function (){
            $('.site-contents * .cont').each(function (){
                let b = $(this);
                console.log(b.width());
                b.css("width","100%");
            });
        }, 100);
        $('.site-contents .menu_tab').addClass('is_close');
    }
});