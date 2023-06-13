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
  if(language === "EN") {
    document.location.href="/";
  }
  else {
    document.location.href="/" + language;
  }
}



const headFile = "head.html";
const headerFile = "header.html";
const footerFile = "footer.html";
includeHTML('head'  , headFile);
includeHTML('footer', footerFile);
includeHTML('header', headerFile).then(() => {
    document.getElementById('languageSelector').addEventListener("change", (event) => {
      setLanguage(event.target.value)
  });
});