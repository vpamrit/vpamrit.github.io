// /**
//  * Created by vishn on 1/3/2017.
//  */
// $(document).ready(function(){
//
//     var flightpath = {
//         entry : {
//             curviness: 1.25,
//             autoRotate: true,
//             values: [
//                 {x: 100,	y: -20},
//                 {x: 300,	y: 10}
//             ]
//         }
//     };
//     // init controller
//     var controller = new ScrollMagic.Controller();
//
//     // create tween
//     // var tween = new TimelineMax()
//     //     .add(TweenMax.to($("#wrench"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}));
//
//     // var tween = TweenMax.to("#wrench", 2, {css:{x:600}, ease: Power1.easeOut});
//     //
//     // // build scene
//     // var scene = new ScrollMagic.Scene({triggerElement:"#skills", duration: 500, offset: 50})
//     //     .setTween(tween);
//
//    var tween1 = new TimelineMax()
//        .add(TweenMax.staggerFrom(".logo.left", 1,
//            {opacity: 0, rotation: 240, x:600, scale: 2, ease: Power2.easeOut}))
//        .add(TweenMax.staggerFrom(".logo.right", 1,
//            {opacity: 0, rotation: 240, x:-600, scale: 2, ease: Power2.easeOut}));
//
//    var scene = new ScrollMagic.Scene({triggerElement:"#skills", duration: 0, offset:-50})
//     .setTween(tween1);
//
//     controller.addScene(scene);
//
// })

