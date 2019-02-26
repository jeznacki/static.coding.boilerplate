window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadMode = 1;

app.animations = require('js/global.js');



/* ================================================GLOBAL FUNCTIONS */
/* ================================================GLOBAL FUNCTIONS */

//RxJS example usage

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

