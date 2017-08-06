// $(function(){
//     alert("My First Jquery Test");
// });
$(document).ready(function(){ $(window).scrollTop(0);});

$(function(){ /* to make sure the script runs after page load */
    $("#body").removeClass("preload");

    $('#toknowledge').css({position: 'fixed', left: $(window).innerWidth()/2 - arrow.outerWidth()/2, bottom: '5vh'});
        runIt();

    $('a.read_more').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide();
        $(this).parents('.text_item').find('.expandable').show(); /* show the .more_text span */
        $(this).parents('.text_item').find('.read_less').show();
        $('#resume2').hide();
        if($(window).innerHeight() <= 450 || $(window).innerWidth() < 602){
            $('#resume').show();
        }

    });

    $('a.read_less').click(function(event){ /* find all a.read_more elements and bind the following code to them */

        event.preventDefault(); /* prevent the a from changing the url */
        $(this).hide();
        $(this).parents('.text_item').find('.expandable').hide(); /* show the .more_text span */
        $(this).parents('.text_item').find('.read_more').show();
        $('#resume2').show();

    });

    $('#dropbutton').click(function(event){
        var nav = $('#menubar').find('nav');
        var button = $('#dropbutton');
        if(open) {
            nav.removeClass('open');
            nav.addClass('closed')

            button.removeClass('button_open');
            button.addClass('button_close');
        }
        else {
            nav.removeClass('closed')
            nav.addClass('open');

            button.removeClass('button_close');
            button.addClass('button_open');
        }
        open = !open;
        console.log( $('#menubar').find('nav'));
    });


});

var arrow = $('#toknowledge');
var complete = 0;
var nav = $("#navigation");
var leftarrow = $("#left");
var rightarrow = $("#right");

var element = document.getElementsByClassName("centered")[0];

if($(window).innerWidth() >= 601) {
    var newPos = ($(window).height()/2 - $('#left').outerHeight()/2);
    var leftar = ($(window).innerWidth() - $($('.centered')[0]).outerWidth())/2 - Math.max(65, $('#left').outerWidth()/2 + $(window).innerWidth()/25);
    leftarrow.css({position: 'fixed', left: leftar, top: newPos + 'px'});
    rightarrow.css({position: 'fixed', right: leftar, bottom: newPos + 'px'});
}
else if($(window).innerWidth() > 390) {
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

//$("#knowledge").offset().top + ($(window).height() - $("#knowledge").outerHeight(true)) / 2

$("#toknowledge").click(function() {
    scrolledDown = true;
    $(this).trigger('scrollDown');
});

$(window).bind('scrollDown', function () {
    var element = document.getElementsByClassName("centered")[0];
    $("#toknowledge").animate({opacity: 0}, 100);
    $('html, body').animate({
            scrollTop: $(element).offset().top - ($(window).height() - $(element).outerHeight(true)) / 2
        },
        2000,
        function () {
            complete = 0;
            popinmenu();
            $('#intro').hide();
            $("#left").css({visibility: 'visible'});
            $("#right").css({visibility: 'visible'});
        });
});

function popinmenu(){
    nav.css({visibility: "visible"});
    $("#menubar").css({visibility: "visible"});

        var left = ($(window).innerWidth() - nav[0].offsetWidth)/2;
        nav.css({top: -1*nav[0].offsetHeight+"px", right: left + 'px'});
        setTimeout(function(){TweenMax.to(nav, 1.2, {top:"0px", ease: Circ.easeOut});}, 250);

    $("#botbar").css({visibility: "visible"});
    $("#botbar").css({bottom: -1*$("#botbar")[0].offsetHeight+"px"});
    setTimeout(function(){TweenMax.to($("#botbar"), 1.2, {bottom:"0px", ease: Circ.easeOut});}, 250);
}

//this can stack animations (which is stupid!)
$(document).keydown(function(e) {
    if(e.keyCode == 40){
        if(complete == 0){
            $("#toknowledge").click();
            complete = 1;
        }
    }
});

function runIt() {
    if(!scrolledDown && !stop){
        arrow.animate({top:'+=20'}, 1000);
        arrow.animate({top:'-=20'}, 1000, runIt);
    }
}
