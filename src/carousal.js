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
    focus      : 'center',
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
  ],
  [
    'WA/CPZUE4313.jpg',
    'WA/IMG_0147.jpg',
    'WA/WeChat Image_20230531213241.jpg',
    'WA/WeChat Image_20230531213303.jpg',
    'WA/WeChat Image_20230531213234.jpg',
    'WA/WeChat Image_20230531213226.jpg',
    'WA/WeChat Image_20230531213249.jpg',
    'WA/WeChat Image_20230531213152.jpg',
    'WA/WeChat Image_20230531213205.jpg',
    'WA/WeChat Image_20230531213219.jpg',
    'WA/WeChat Image_20230531213040.jpg',
    'WA/WeChat Image_20230531213009.jpg',
    'WA/WeChat Image_20230531213139.jpg',
    'WA/IMG_9910.jpg',
    'WA/WeChat Image_20230531213310.jpg',
    'WA/WeChat Image_20230531212616.jpg',
    'WA/IMG_0022.jpg',
    'WA/WeChat Image_20230531212851.jpg',
    'WA/WeChat Image_20230531212628.jpg',
    'WA/WeChat Image_20230531212548.jpg',
    'WA/IMG_0042.jpg',
    'WA/WeChat Image_20230531212952.jpg',
    'WA/WeChat Image_20230531212928.jpg',
    'WA/WeChat Image_20230531210909.jpg',
    'WA/WeChat Image_20230531213317.jpg',
    'WA/WeChat Image_20230531215303.jpg',
    'WA/IMG_9762.jpg'
  ],
  [
    'CO/WeChat Image_20230602101217.jpg'
  ],
  [
    'DC/IMG_7242.jpg',
    'DC/IMG_7295.jpg',
    'DC/IMG_7227.jpg',
    'DC/IMG_7234.jpg',
    'DC/IMG_7239.jpg',
    'DC/IMG_7252.jpg',
    'DC/IMG_7291.jpg',
    'DC/IMG_7301.jpg',
    'DC/WeChat Image_20230602105239.jpg',
    'DC/WeChat Image_20230602105250.jpg'
  ],
  [
    'acadia/IMG_6772.jpg',
    'acadia/IMG_6771.jpg',
    'acadia/IMG_6769.jpg',
    'acadia/WeChat Image_20230602112944.jpg',
    'acadia/WeChat Image_20230602112936.jpg',
    'acadia/WeChat Image_20230602112843.jpg',
    'acadia/IMG_6790.jpg',
    'acadia/IMG_6841.jpg',
    'acadia/IMG_6802.jpg',
    'acadia/WeChat Image_20230602112828.jpg',
    'acadia/WeChat Image_20230602112849.jpg',
    'acadia/WeChat Image_20230602112819.jpg',
    'acadia/WeChat Image_20230602112836.jpg',
    'acadia/WeChat Image_20230602112906.jpg',
    'acadia/WeChat Image_20230602112858.jpg',
    'acadia/WeChat Image_20230602112711.jpg',
    'acadia/WeChat Image_20230602112736.jpg',
    'acadia/IMG_6783.jpg',
    'acadia/WeChat Image_20230602112921.jpg',
    'acadia/IMG_6829.jpg',
    'acadia/WeChat Image_20230602112914.jpg',
    'acadia/WeChat Image_20230602112751.jpg'
  ],
  [
    'canada/IMG_5646.jpg',
    'canada/IMG_5624.jpg',
    'canada/IMG_5648.jpg',
    'canada/IMG_5605.jpg',
    'canada/20200226_142206.jpg',
    'canada/IMG_5662.jpg',
    'canada/UFCZ0057.jpg',
    'canada/IMG_5660.jpg'
  ],
  [
    'home/WeChat Image_20230602164720.jpg',
    'home/WeChat Image_20230602164746.jpg',
    'home/IMG_8506.jpg',
    'home/IMG_8504.jpg',
    'home/IMG_6677.jpg',
    'home/IMG_6680.jpg',
    'home/IMG_6675.jpg',
    'home/IMG_6674.jpg',
    'home/WeChat Image_20230602165825.jpg',
    'home/WeChat Image_20230602104326.jpg',
    'home/IMG_E7157.jpg',
    'home/IMG_E7160.jpg',
    'home/WeChat Image_20230602105151.jpg',
    'home/WeChat Image_20230602105128.jpg',
    'home/WeChat Image_20230602105141.jpg',
    'home/IMG_7044.jpg'
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

document.addEventListener( 'load', createCarousels(10) );
//DOMContentLoaded: 0.95s, no text formating first
//load: 1.1s, text always formated