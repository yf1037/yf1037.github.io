function createCarouselHTML(tagName, name, images) {
  let section = document.getElementById(tagName);
  if( !section ) {
    console.error('tag ' + tagName + " not found for createCarouselHTML");
    return;
  }

  let innerHTML = "";
  innerHTML += '<section id="main-' + name + '" class="splide"><div class="splide__track"><ul class="splide__list">';
  for( let idx = 0; idx < images.length; idx = idx + 1) {
    innerHTML += '<li class="splide__slide"><img src="' + images[idx] + '" alt=""></li>';
  }
  innerHTML += '</ul></div></section>';
  innerHTML += '<section id="thumbnail-' + name + '" class="splide"><div class="splide__track"><ul class="splide__list">';
  for( let idx = 0; idx < images.length; idx = idx + 1) {
    innerHTML += '<li class="splide__slide"><img src="' + images[idx] + '" alt=""></li>';
  }
  innerHTML += '</ul></div></section>';

  section.innerHTML += innerHTML;
}

function createCarouselJS(name) {
  var main = new Splide( '#main-' + name, {
    Width: '100%',
    height: "30vw",
    type      : 'fade',
    rewind    : true,
    pagination: true,
    arrows    : true,
  } );

  var thumbnails = new Splide( '#thumbnail-' + name, {
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
};

var imageList = [
  [
    'media/st_patricks_day/Proof 038.jpg',
    'media/st_patricks_day/Proof 044.jpg',
    'media/st_patricks_day/Proof 048.jpg',
    'media/st_patricks_day/Proof 101.jpg',
    'media/st_patricks_day/Proof 106.jpg',
    'media/st_patricks_day/Proof 131.jpg',
    'media/st_patricks_day/Proof 149.jpg',
    'media/st_patricks_day/Proof 034.jpg',
    'media/st_patricks_day/Proof 164.jpg',
    'media/st_patricks_day/Proof 019.jpg'
  ],
  [
    'media/events/IMG_6878.jpg',
    'media/events/IMG_6026.jpg',
    'media/events/IMG_5822.jpg',
    'media/events/IMG_6877.jpg',
    'media/events/IMG_6317.jpg',
    'media/events/WeChat Image_20230602104135.jpg',
    'media/events/WeChat Image_20230602104112.jpg',
    'media/events/IMG_E6453.jpg',
    'media/events/IMG_6755.jpg',
    'media/events/MVAEE6641.jpg',
    'media/events/IMG_8358.jpg',
    'media/events/IMG_6961.jpg',
    'media/events/IMG_6918.jpg',
    'media/events/WeChat Image_20230602172222.jpg',
    'media/events/WeChat Image_20230602172239.jpg',
    'media/events/WeChat Image_20230531220409.jpg',
    'media/events/WeChat Image_20230531220338.jpg',
    'media/events/IMG_9473.jpg',
    'media/events/DYXA0340.jpg',
    'media/events/OROG4664.jpg',
    'media/events/FFQE4978.jpg',  
    'media/events/IMG_3318.jpg'
  ]
];

function createCarousels(num) {
  for(var idx = 0; idx < num; idx = idx + 1) {
    let name = 'carousel' + idx;
    let tagName = 'car' + idx;
    createCarouselHTML(tagName, name, imageList[idx]);
    createCarouselJS(name);
  }
}

document.addEventListener( 'DOMContentLoaded', createCarousels(2) );