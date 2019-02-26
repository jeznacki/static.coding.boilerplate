var global = {

    gsapAnimation: function(){

        if(document.querySelector('.single-page__article header')){

            return new TimelineMax({immediateRender:true,delay:0.3}).to(document.querySelector('.single-page__article header h1'),
                0.7, {
                    opacity: 1,
                    y:0
                },0).add(function(){

                if(document.querySelector('.single-page__article header h2')){
                    TweenMax.to(document.querySelector('.single-page__article header h2'),
                        0.5, {
                            opacity: 1
                        });
                }

            },0.3);

        }

    },
    waypointsMultipleExample:function(){

        var a = 0 ;

        [].slice.call(document.querySelectorAll('.article-item')).forEach(function(el){

            new Waypoint({
                element: el,
                handler: function(direction) {

                    a += 0.15;
                    if(a == 0.75){
                        a = 0.15;
                    }

                    new TimelineMax({immediateRender:true}).fromTo(el,
                        0.7,{
                            opacity: 0,
                            y:30
                        }, {
                            opacity: 1,
                            y:0
                        },a);

                    this.destroy();

                },
                offset:'90%'
            });
        });

    }
}

module.exports = global;