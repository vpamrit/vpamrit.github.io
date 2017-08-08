/**
 * Created by vishn on 7/28/2017.
 */

// $(window).on("orientationchange",function(){
//     alert("The orientation has changed!");
//     $('#body').addClass('preload');
//     onResize();
//     $('#body').removeClass('preload');
// });

$(window).bind('center', function(){
        var el = $(document.getElementsByClassName("centered")[0]);
        el.css({top: ($(window).height() - $(el).outerHeight(true)) / 2});

    $('#body').find('.box').each(function(){
        $(this).css({top: el.offset().top});
    });

    $('#body').find('.box').each(function(){
        // if($(this).outerWidth(true) > 800) {
        //     $(this).css({width: 800+'px'});
        //     $(this).css({right: ($(window).innerWidth() - $(this).outerWidth(true)) / 2});
        // }
        // if($(this).outerHeight(true) > 400) {
        //     $(this).css({height: 400+'px'});
        //     $(this).css({top: ($(window).innerHeight() - $(this).outerHeight(true)) / 2});
        // }
    });


    //
    // el = $(document.getElementsByClassName("centered")[0]);
    //
    // $('#body').find('.box').each(function(){
    //     $(this).css({top: (el.offset().top)});
    // });
});


$(window).resize(function(){
    // alert("Resize has changed!");
    $('#body').addClass('preload');
    onResize();
    if(scrolledDown) {
        $(window).trigger('center');
    }
    $('#body').removeClass('preload');
});

function runIt() {
    if(!scrolledDown){
        console.log(parseInt($('#toknowledge').css('bottom') + 30));
        arrow.animate({bottom: parseInt($('#toknowledge').css('bottom')) + 20}, 1000);
        arrow.animate({bottom: parseInt($('#toknowledge').css('bottom')) - 20}, 1000, runIt);
    }
}


function onResize() {
    if(!scrolledDown || $(window).innerHeight() <= 450 || $(window).innerWidth() < 602) {
        $('#resume').hide();
    }
    else {
        $('#resume').show();
    }

    if (!scrolledDown) {
        $('#toknowledge').remove();

        $(document.body).append("<a id ='toknowledge' href='#'></a>");
        $('#toknowledge').addClass('middle-arrow');
        $('#toknowledge').css({
            position: 'fixed',
            left: $(window).innerWidth() / 2 - arrow.innerWidth() / 2,
            bottom: '5vh'
        });
        if (intro_over && !scrolledDown) {
            $('#toknowledge').css({visibility: 'visible', opacity: 1});
            setTimeout(function(){runIt()}, 5000);
        }
        $("#toknowledge").click(function () {
            scrolledDown = true;
            $(this).trigger('scrollDown');
        });
    }
    var leftarrow = $("#left");
    var rightarrow = $("#right");

    console.log($(window).innerWidth());

    if($(window).innerWidth() > 601) {
        var newPos = ($(window).height()/2 - $('#left').outerHeight()/2);
        var leftar = ($(window).innerWidth() - $($('.centered')[0]).outerWidth())/2 - Math.max(65, $('#left').outerWidth()/2 + $(window).innerWidth()/25);
        leftarrow.css({position: 'fixed', left: leftar, top: newPos + 'px'});
        rightarrow.css({position: 'fixed', right: leftar, bottom: newPos + 'px'});
    }
    else if($(window).innerWidth() >= 395) {
        var newPos = ($(window).height()/2 - $('#left').outerHeight()/2);
        var leftar = ($(window).innerWidth() - $($('.centered')[0]).outerWidth())/2 - Math.max(40, $('#left').outerWidth()/2 + $(window).innerWidth()/25);
        leftarrow.css({position: 'fixed', left: leftar, top: newPos + 'px'});
        rightarrow.css({position: 'fixed', right: leftar, bottom: newPos + 'px'});
    }
    else {
        var newPos = 5;
        var leftar = ($(window).innerWidth()/2 - $('#left').outerWidth()/2);
        leftarrow.css({position: 'fixed', left: leftar, top: newPos + 'px'});
        rightarrow.css({position: 'fixed', right: leftar, bottom: newPos + 'px'});
    }

    if(scrolledDown) {
        var nav = $("#navigation");
        var left = ($(window).innerWidth() - nav[0].offsetWidth) / 2;
        nav.animate({right: left + 'px'}, 50);
        // var element = document.getElementsByClassName("centered")[0];
        // $('html, body').css({scrollTop: $(element).scrollTop() - ($(window).height() - $(element).outerHeight(true)) / 2});

        if($(window).innerWidth() < 1150) {
            $("#portrait").find('.read_less').click();
        }
    }
}