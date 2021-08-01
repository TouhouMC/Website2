
var rclick_cnt = 0;
$('.img-prot').on("contextmenu", function (e){
    rclick_cnt++;
    if(rclick_cnt >= 2){
        rclick_cnt = 0;
        $('body div.protect-alert').css("display", "block");
        $('body div.protect-alert').css("opacity", "1");
        setTimeout(function (){
            $('body div.protect-alert').css("opacity", "0");
        }, 1250);
        setTimeout(function (){
            $('body div.protect-alert').css("display", "none");
        }, 1500);
    }
    setTimeout(function (){
        if (rclick_cnt != 0) rclick_cnt--;
    }, 1000);
    return false;
});
$('body div.protect-alert, .dis-rclick').on("contextmenu", function (){return false;});