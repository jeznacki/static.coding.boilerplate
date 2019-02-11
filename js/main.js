window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadMode = 1;

app.animations = require('js/animation.js');



/* ================================================GLOBAL FUNCTIONS */
/* ================================================GLOBAL FUNCTIONS */




//========================================================SINGLE PAGES


if(document.querySelector('.single-page-content')){

    app.single = require('js/single.js');
    app.single.init();

}

