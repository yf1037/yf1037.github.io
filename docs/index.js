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


const headFile = "head.html";
const headerFile = "header.html";
const footerFile = "footer.html";
includeHTML('head'  , headFile);
includeHTML('footer', footerFile);
includeHTML('header', headerFile).then(() => {
    let langDropdown = document.getElementById('languageSelector');
    const pathArray = location.pathname.split('/', 3);

    langDropdown.addEventListener("change", (event) => {
      let lang = event.target.value.toLowerCase()
      if (lang !== "sel") {
        if ((lang !== pathArray[1]) && (lang !== "en")) {
          setLanguage(lang)
        }
        if ((lang === "en") && !(pathArray[1].includes(".html")) && pathArray[1]) {
          setLanguage(lang)
        }
      }
  });
});