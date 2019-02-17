window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadMode = 1;

app.animations = require('js/animation.js');



/* ================================================GLOBAL FUNCTIONS */
/* ================================================GLOBAL FUNCTIONS */


var scrollTop$ = Rx.Observable.fromEvent(document.querySelector('.js-btn-top'), 'click').throttle(500 /* ms */);;

scrollTop$.subscribe(function(e){
    e.preventDefault();
    console.log(e);

});

//========================================================SINGLE PAGES


if(document.querySelector('.single-page-content')){

    app.single = require('js/single.js');
    app.single.init();

}

