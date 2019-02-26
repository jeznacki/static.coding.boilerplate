var post = {

    init:function(){



    },
    function1:function(){

        //animation wayopint example
        new Waypoint({
            element: document.querySelector('..portfolio-list'),
            handler: function (direction) {


                document.querySelector('..portfolio-list').classList.add('animated-section');
                this.destroy();

            },
            offset: '90%'
        });


    },
    function2:function(){


    },
    function3:function(){

        //conditional import example
        System.import("js/vendor/simpleselect.js").then(function(whatever){
            //run something
        });

    }

}

module.exports = post;
