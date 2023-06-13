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

const headFile = "head.html";
const headerFile = "header.html";
const footerFile = "footer.html";
includeHTML('head'  , headFile);
includeHTML('header', headerFile);
includeHTML('footer', footerFile);