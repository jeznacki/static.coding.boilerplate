var animations = {

    singleHeader: function(){

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
    contactHeader: function(){

        if(document.querySelector('h1')){

            return new TimelineMax({immediateRender:true}).fromTo(document.querySelector('h1'),
                0.7,{
                    opacity: 0,
                    y:30
                }, {
                    opacity: 1,
                    y:0
                },0);

        }

    },
    categoryHeader:function(){

        return new TimelineMax({immediateRender:true}).staggerFromTo(document.querySelectorAll('.category-nav > *'),
            0.8,{
                cycle:{

                    x:[20, 0, -20],
                    opacity:[0],
                    y:[0, -10, 0]
                }
            },{
                cycle:{

                    x:[0],
                    opacity:[1],
                    y:[0]
                }
            },0);

    },
    categoryGrid:function(){

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

    },
    relatedContent:function(){

        if(document.querySelector('.related-articles-content')) {

            new Waypoint({
                element: document.querySelector('.related-articles-content'),
                handler: function (direction) {

                    new TimelineMax({immediateRender: true}).staggerFromTo(document.querySelectorAll('.related-articles-content .article-item'),
                        0.5, {
                            opacity: 0
                        }, {
                            opacity: 1
                        }, 0.2);

                    this.destroy();

                },
                offset: '90%'
            });

        }


    },
    mobileMenu:function(){


        var mobNav = document.querySelector('.page-menu__content');
        var mobNavLi = mobNav.getElementsByTagName('ul')[0].getElementsByTagName('li');
        var mobNav1lvLi = [];

        for (i=0;i<mobNavLi.length;i++) {
            if (mobNavLi[i].parentNode === mobNav.getElementsByTagName('ul')[0]) {
                mobNav1lvLi.push(mobNavLi[i]);
            }
        };

        return new TimelineMax({paused:true}).fromTo( document.querySelector('.page-menu'), 0.3,{
            autoAlpha:0,
            display:'none'
        },{
            autoAlpha:1,
            display:'flex'
        }).staggerFromTo(mobNav1lvLi, 0.2, {
            opacity: 0,
            y: 10
        }, {opacity: 1, y: 0}, 0.1);


    },
    showContactForm: function(){

         app.contactFormEl = document.querySelector('.form');
         app.inputsElems = document.querySelectorAll('.form .input');

        return new TimelineMax({immediateRender:true,paused:true}).to(app.contactFormEl, 0.5, {
            autoAlpha: 1
        }).staggerTo(document.querySelectorAll('.input-field'), 0.5,{css:{className:"-=label"}},0.3)
            .staggerTo(app.inputsElems, 0.65,{css:{className:"+=draw"}},0.3,0.3)
            .staggerTo(document.querySelector('.form').querySelectorAll('label'), 0.5,{opacity:1,x:0},0.3,1)
            .staggerTo(app.inputsElems, 0.4,{css:{className:"-=inprogress draw"}},0.3,1.5);

    }
}

module.exports = animations;