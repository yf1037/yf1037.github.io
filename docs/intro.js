const classes = ['R1', 'R2', 'R3', 'L1', 'L2', 'L3'];

function onHover(lavande) {
  let numChild  = lavande.childElementCount
  let childList = lavande.children;

  for(let idx = 0; idx < numChild; ++idx) {
    let child = childList[idx];
    child.classList.add('Anim' + classes[idx]);
  }
}

window.addEventListener('load', () => {
  let lavande = document.getElementById('lavande');
  lavande.addEventListener('hover', () => onHover(lavande));
});