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
    const pageLanguage = location.pathname.split('/')[1];
    let langDropdown = document.getElementById('languageSelector');
    let options = langDropdown.children;
    
    for(let idx = 0; idx < options.length; idx = idx + 1) {
      let child = options[idx];
      if(child.value === pageLanguage) {
        child.setAttribute("selected", "selected");
        break;
      }
    }

    langDropdown.addEventListener("change", (event) => {
      setLanguage(event.target.value.toLowerCase())
  });
});