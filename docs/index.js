async function includeHTML(element, file) {
  let header = document.getElementsByTagName(element)[0];
  if( !header ) {
    console.error('Element ' + element + ' does not exist');
  } 
  await fetch(file)
  .then((resp) => {
    if(resp.ok)
      return resp.text();
    throw new Error();
  })
  .then((resp) => {
    header.innerHTML = resp;
  }).catch(() => {
    console.error('Could not load file: ' + file);
  });
}


//i18n below
function setLanguage(language) {
  const pathArray = location.pathname.split('/', 3);
  let path = pathArray[2];

  let url = "/";
  if(language !== "en") {
    url = url + language + "/";
    path = pathArray[1];
  }
  if(path && (language !== path)) {
    url = url + path;
  }

  document.location.href = url;
}

// menu dropdown
function dropDownHref(id) {
  let dropDown = document.getElementById(id);

  dropDown.addEventListener("change", (event) => {
    if(event.selectedIndex == 0){
      return;
    }

    let option = event.target.value.toLowerCase();
    const pathArray = location.pathname.split('/', 3);
    if (pathArray[1] === "cn"){
      document.location.href = "/cn/" + option;
    }
    else{
      document.location.href = "/" + option;
    }
  });
}


const headFile = "head.html";
const headerFile = "header.html";
const footerFile = "footer.html";
includeHTML('head'  , headFile);
includeHTML('footer', footerFile);
includeHTML('header', headerFile).then(() => {
    const pathArray = location.pathname.split('/', 3);

    /* Language selection */
    let langDropdown = document.getElementById('languageSelector');

    langDropdown.addEventListener("change", (event) => {
      let lang = event.target.value.toLowerCase();
      if (lang !== "sel") {
        if ((lang !== pathArray[1]) && (lang !== "en")) {
          setLanguage(lang)
        }
        if ((lang === "en") && !(pathArray[1].includes(".html")) && pathArray[1]) {
          setLanguage(lang)
        }
      }
  });
  
    /* Mobile menu */
    dropDownHref('menuSelector'); 
});

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height();
  var tags = $(".tag");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];
    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    } 
  }
});