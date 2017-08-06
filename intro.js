/**
 * Created by vishn on 8/3/2017.
 */
/**
 * Created by vishn on 1/19/2017.
 */
$(document).ready(function(){

    spanword("#part1");
    spanletter("#part2");
    spanletter("#part3");
    spanword("#part4");

    var animations = new TimelineLite();
    $("#part1").css('visibility', 'visible');
    $("#part2").css('visibility', 'visible');
    $("#part3").css('visibility', 'visible');
    $("#part4").css('visibility', 'visible');
    $("#part5").css('visibility', 'visible');
    $("#part6").css('visibility', 'visible');

    animations
        .staggerFromTo($("#part1").find("span"), 1, {autoAlpha:0}, {autoAlpha:1}, 1)
        .staggerFromTo($("#part2").find("span"), 0.1, {autoAlpha:0}, {autoAlpha:1}, 0.1, "+=0.6")
        .staggerFromTo($("#part3").find("span"), 0.8, {autoAlpha:0}, {autoAlpha:1}, 0.1, "+=0.6")
        .staggerFromTo($("#part4").find("span"), 0.8, {autoAlpha:0}, {autoAlpha:1}, 0.8, "+=0.6")
        .staggerFromTo($("#part5").find("span"), 0.5, {autoAlpha:0}, {autoAlpha:1}, 0.2, "+=1.0")
        // .staggerFromTo($("#part6").find("span"), 0, {autoAlpha:0}, {autoAlpha:1})
        .to($("#toknowledge"), 0.1, {visibility: 'visible', opacity: 1}, '+=0.2')
        .add(function(){
            $("#toknowledge").css({visibility: 'visible', opacity: 1});
            intro_over = true;
        });

    animations.play();
    animations.resume();

    function spanword(ID){
        var words = $(ID).text().split(" ");
        $(ID).empty();
        $.each(words, function(i, v) {
            $(ID).append($("<span>").text(v+" "));
        });
    }

    function spanletter(ID){
        var letters = $(ID).text().split('');
        $(ID).empty();
        $.each(letters, function(i, v) {
            $(ID).append($("<span>").text(v));
        });
    }
})