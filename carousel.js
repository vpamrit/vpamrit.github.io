/**
 * Created by vishn on 4/23/2017.
 */
$(document).ready(function() {

    var carousel = [$("#portrait"), $("#skills"), $("#projects"), $("#knowledge"), $("#interests")];
    var menu = [$("#a"), $("#b"), $("#c"), $("#d"), $("#e")];
    var carsize = carousel.length;
    var temp = 0;
    var queue = [];

    $("#right").click(function(){queueright()});
    $("#left").click(function(){queueleft()});

    $(window).on("swipeleft",function(){
        if(scrolledDown) {
            queueleft();
        }
    });

    $(window).on("swiperight",function(){
        if(scrolledDown) {
            queueright();
        }
    });


    function queueright(){
        console.log(queue.size);
        if(queue.length > 0 && queue[0] != 1){
            queue = [];
        }
        queue.push(1);
    }

    function queueleft(){
        if(queue.length > 0 && queue[0] != 2){
            queue = [];
        }
        queue.push(2);
    }

    function moveright () {

        if(curposition == 0 && $(window).innerHeight() > 450 && $(window).innerWidth() > 602) {
            $('#resume').css({display: 'block'});
        }

        menu[curposition].removeClass();
        temp = (curposition-3 + carsize) % carsize;
        carousel[temp].removeClass();
        carousel[temp].addClass("box");
        carousel[temp].addClass("container");
        carousel[temp].addClass("rightside");

        temp = (curposition-2 + carsize) % carsize;
        carousel[temp].removeClass();
        carousel[temp].addClass("box");
        carousel[temp].addClass("container");
        carousel[temp].addClass("routside");

        temp = (curposition-1 + carsize) % carsize;
        carousel[temp].removeClass();
        carousel[temp].addClass("box");
        carousel[temp].addClass("container");
        carousel[temp].addClass("loutside");

        temp = (curposition) % carsize;
        carousel[temp].removeClass();
        carousel[temp].addClass("box");
        carousel[temp].addClass("container");
        carousel[temp].addClass("leftside");


        temp = (curposition+1) % carsize;
        carousel[temp].removeClass();
        carousel[temp].addClass("box");
        carousel[temp].addClass("container");
        carousel[temp].addClass("centered");

        curposition = (curposition+1) % carsize;
        if(queue.length == 0)
            menu[curposition].addClass("focused");
    }

    function moveleft(){
        if(curposition == 0 && $(window).innerHeight() > 450 && $(window).innerWidth() > 602) {
            $('#resume').css({display: 'block'});
        }

            menu[curposition].removeClass();
            temp = (curposition-3 + carsize) % carsize;
            carousel[temp].removeClass();
            carousel[temp].addClass("box");
            carousel[temp].addClass("container");
            carousel[temp].addClass("loutside");

            temp = (curposition-2 + carsize) % carsize;
            carousel[temp].removeClass();
            carousel[temp].addClass("box");
            carousel[temp].addClass("container");
            carousel[temp].addClass("leftside");

            temp = (curposition-1 + carsize) % carsize;
            carousel[temp].removeClass();
            carousel[temp].addClass("box");
            carousel[temp].addClass("container");
            carousel[temp].addClass("centered");

            temp = (curposition) % carsize;
            carousel[temp].removeClass();
            carousel[temp].addClass("box");
            carousel[temp].addClass("container");
            carousel[temp].addClass("rightside");


            temp = (curposition+1) % carsize;
            carousel[temp].removeClass();
            carousel[temp].addClass("box");
            carousel[temp].addClass("container");
            carousel[temp].addClass("routside");

            curposition = (curposition - 1 + carsize) % carsize;

            if(queue.length == 0)
            menu[curposition].addClass("focused");
    }

    $("#a").click(function(){
        spin(0);
        clearAll();
        menu[0].addClass("focused");
        menu[curposition].addClass("after");
    });
    $("#b").click(function(){spin(1);
        clearAll();
        menu[1].addClass("focused");
        menu[curposition].addClass("after");
    });
    $("#c").click(function(){spin(2);
        clearAll();
        menu[2].addClass("focused");
        menu[curposition].addClass("after");
    });
    $("#d").click(function(){spin(3);
        clearAll();
        menu[3].addClass("focused");
        menu[curposition].addClass("after");
    });
    $("#e").click(function(){spin(4);
        clearAll();
        menu[4].addClass("focused");
        menu[curposition].addClass("after");
    });

    function spin(value){
        var ldistance = (curposition-value + carsize) % carsize;
        var rdistance = (value-curposition + carsize) % carsize;
        queue.length = 0;

        if(curposition == value){
            return;
        }
        else if(rdistance <= ldistance){
            for(var x=0; x<rdistance; x++){
                queueright();
            }
        }
        else{
            for(var x=0; x<ldistance; x++){
                queueleft();
            }
        }
    };

    function clearAll(){
        for(var x = 0; x < menu.length; x++){
            menu[x].removeClass();
        }
    }

    function runthread(){
        if(queue.length == 0){
            setTimeout(function(){runthread()}, 50);
        }
        else{
            var type = queue.shift();
            if(type == 1){
                moveright();
                setTimeout(function(){runthread()}, 1020);
            }
            else if(type==2){
                moveleft();
                setTimeout(function(){runthread()}, 1020);
            }
        }
    };

    //one class to denote current location
    //another class to denote location to go (overwritten by any button or arrow) => clear classes
    //final destination recalculated based on current location + queue instructions

    //run crap
    runthread();
    menu[curposition].addClass("focused after");
});
