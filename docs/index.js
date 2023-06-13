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

const languageCode = {
  "EN": 0,
  "CN": 1
}

var lang = "EN";
var langCode = languageCode[lang];

function setLanguage(language) {
  lang = language;
  langCode = languageCode[lang];

  let elements = document.querySelectorAll('[data-l18n]');
  for(let idx = 0; idx < elements.length; idx = idx + 1) {
    let element = elements[idx];
    element.textContent = getI18n(element.getAttribute('data-l18n'));
  }
}

// text: l18n-value: [ENtext, CNtext]
const i18n = {
  "VENUE_INFO": ["VENUE INFO", "VENUE INFO CHINESE"]
};

function getI18n( text ) {
  return i18n[text][langCode];
}



const headFile = "head.html";
const headerFile = "header.html";
const footerFile = "footer.html";
includeHTML('head'  , headFile);
includeHTML('footer', footerFile);
includeHTML('header', headerFile).then(() => {
    document.getElementById('languageSelector').addEventListener("click", (event) => {
      setLanguage(event.target.value)
  });
  setLanguage('EN');
});