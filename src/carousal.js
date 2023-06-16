// import Splide from './libs/splide-4.1.3';

document.addEventListener( 'DOMContentLoaded', function () {
  var main = new Splide( '#main-carousel', {
    Width: '100%',
    height: "30vw",
    type      : 'fade',
    rewind    : true,
    pagination: true,
    arrows    : true,
  } );

  var thumbnails = new Splide( '#thumbnail-carousel', {
    fixedWidth  : 125,
    fixedHeight : 80,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    arrows    : false,
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      },
    },
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
} );

