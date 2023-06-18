function createCarouselHTML(tagName, name, images) {
  let section = document.getElementById(tagName);
  if( !section ) {
    console.error('tag ' + tagName + " not found for createCarouselHTML");
    return;
  }

  let innerHTML = "";
  innerHTML += '<section id="main-' + name + '" class="splide"><div class="splide__track"><ul class="splide__list">';
  for( let idx = 0; idx < images.length; idx = idx + 1) {
    innerHTML += '<li class="splide__slide"><img data-splide-lazy="/media/' + images[idx] + '" alt=""></li>';
  }
  innerHTML += '</ul></div></section>';
  innerHTML += '<section id="thumbnail-' + name + '" class="splide"><div class="splide__track"><ul class="splide__list">';
  for( let idx = 0; idx < images.length; idx = idx + 1) {
    innerHTML += '<li class="splide__slide"><img src="/media/thumbnail/' + images[idx].replace('.mp4','.jpg') + '" alt=""></li>';
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
    lazyLoad: 'nearby'
  } );

  var thumbnails = new Splide( '#thumbnail-' + name, {
    fixedWidth  : 125,
    fixedHeight : 80,
    gap         : 10,
    rewind      : true,
    pagination  : false,
    isNavigation: true,
    arrows    : false,
    lazyLoad: 'sequential',
    breakpoints : {
      600: {
        fixedWidth : 60,
        fixedHeight: 44,
      }
    }
  } );

  main.sync( thumbnails );
  main.mount();
  thumbnails.mount();
};

var imageList = [
  [
    'st_patricks_day/Proof 038.jpg',
    'st_patricks_day/Proof 044.jpg',
    'st_patricks_day/Proof 048.jpg',
    'st_patricks_day/Proof 101.jpg',
    'st_patricks_day/Proof 106.jpg',
    'st_patricks_day/Proof 131.jpg',
    'st_patricks_day/Proof 149.jpg',
    'st_patricks_day/Proof 034.jpg',
    'st_patricks_day/Proof 164.jpg',
    'st_patricks_day/Proof 019.jpg'
  ],
  [
    'events/IMG_6878.jpg',
    'events/IMG_6026.jpg',
    'events/IMG_5822.jpg',
    'events/IMG_6877.jpg',
    'events/IMG_6317.jpg',
    'events/WeChat Image_20230602104135.jpg',
    'events/WeChat Image_20230602104112.jpg',
    'events/IMG_E6453.jpg',
    'events/IMG_6755.jpg',
    'events/MVAEE6641.jpg',
    'events/IMG_8358.jpg',
    'events/IMG_6961.jpg',
    'events/IMG_6918.jpg',
    'events/WeChat Image_20230602172222.jpg',
    'events/WeChat Image_20230602172239.jpg',
    'events/WeChat Image_20230531220409.jpg',
    'events/WeChat Image_20230531220338.jpg',
    'events/IMG_9473.jpg',
    'events/DYXA0340.jpg',
    'events/OROG4664.jpg',
    'events/FFQE4978.jpg',  
    'events/IMG_3318.jpg'
  ],
  [
    'say_over_the_years/2019.jpg',
    'say_over_the_years/2020_1.jpg',
    'say_over_the_years/2020_2.jpg',
    'say_over_the_years/2020_3.jpg',
    'say_over_the_years/2021_1.jpg',
    'say_over_the_years/2021_2.jpg',
    'say_over_the_years/2021_3.jpg',
    'say_over_the_years/2022_1.jpg',
    'say_over_the_years/2022_2.jpg',
    'say_over_the_years/2022_3.jpg',
    'say_over_the_years/2022_4.jpg',
    'say_over_the_years/2022_5.jpg',
    'say_over_the_years/2023.jpg',
    'say_over_the_years/2023_2.jpg'
  ],
  [
    'cats/IMG_7621.jpg',
    'cats/IMG_7600.jpg',
    'cats/IMG_7650.jpg',
    'cats/IMG_8152.jpg',
    'cats/IMG_7672.jpg',
    'cats/WeChat Image_20230602165850.jpg',
    'cats/WeChat Image_20230602094438.jpg',
    'cats/IMG_8262.jpg',
    'cats/WeChat Image_20230602165836.jpg',    
    'cats/IMG_8314.jpg',
    'cats/IMG_8324.jpg',
    'cats/WeChat Image_20230602100031.jpg',
    'cats/WeChat Image_20230602100016.jpg',
    'cats/WeChat Image_20230602102239.jpg',
    'cats/IMG_9548.jpg',
    'cats/VYPU7202.jpg',
    'cats/WeChat Image_20230602102606.jpg'
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

document.addEventListener( 'load', createCarousels(4) );
//DOMContentLoaded: 0.95s, no text formating first
//load: 1.1s, text always formated