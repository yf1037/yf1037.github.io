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
  "VENUE_INFO": ["VENUE INFO", "会场信息"],
  "ACCOMMODATION":["Accomodation", "住宿"],
  "GALLERY":["GALLERY", "照片墙"],
  "REGISTRY":["REGISTRY", "礼物单"],
  "CONGRATS":["CONGRATS", "贺词"],
  "Our Wedding":["Our Wedding", "婚礼"],
  "Date: MM/DD/YYY":["Date: MM/DD/YYYY", "时间：XXXX年XX月XX日"],
  "More info": ["More info >", "更多信息 >"],
  "Top": ["Top", "顶部"],
  "More to come": ["MOre to come...", "实时更新中。。。"],
  "Under construction": ["Under construction...", "建设中。。。"],
  "Direction": ["Direction:", "出行指南："]
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