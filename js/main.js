window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadMode = 1;

app.animations = require('js/global.js');

//smart loading / difining modues
// read more
// https://nystudio107.com/blog/using-systemjs-as-javascript-loader

System.config({
    paths: {
        'jquery': 'https://code.jquery.com/jquery-1.12.4.min.js',
        'slick': '//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
    }
});

//conditional import example
System.import("slick").then(function(whatever){
    //run something
});



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

