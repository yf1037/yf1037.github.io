// redirect user to CN version of site
let hrefParts = document.location.href.split('/');
if(hrefParts.length !== 0 && hrefParts[1] !== 'index.html') {

  let userlang = navigator.language || navigator.languages[0];
  if(userlang) {

    let language = userlang.split('-', 2)[0].toLowerCase();
    
    if( language === 'cn') {
      document.location.href = hrefParts[1] + language;
    }
  }
}



const ROTATION_MAX = [
  -20, 
  -15, 
  -10, 
  10, 
  15, 
  25
];

function onHover(title, lavande, posX) {
  let numChild  = lavande.childElementCount
  let childList = lavande.children;

  const windowWidth = window.innerWidth / 2;
  const percent = 1 - Math.abs(posX / windowWidth - 1);

  title.style.transform = 'translateY(' + -100*percent + 'px)'
  title.style.opacity   = percent;

  for(let idx = 0; idx < numChild; ++idx) {
    let maxRot = ROTATION_MAX[idx];
    const sign = Math.abs(maxRot) / maxRot;
    const rot  = Math.abs(maxRot);
    maxRot = Math.min(rot, window.innerWidth*rot/500*0.6) * sign;
    const rotate = percent * maxRot;

    let child = childList[idx];
    child.style.transform = 'rotate(' + rotate + 'deg)';
  }
}

function onTouch(title, lavande) {
  const DELAY = 1
  let posX = 0;

  let timer = setInterval(() => {
    if(posX >= window.innerWidth / 2) {
      clearInterval(timer);
    }
    posX += window.innerWidth / 100;
    onHover(title, lavande, posX);
  }, DELAY);
}

window.addEventListener('load', () => {
  let hasTouched = false;

  let title   = document.getElementById('title');
  let lavande = document.getElementById('lavande');
  document.addEventListener('mousemove',  (event) => !hasTouched ? onHover(title, lavande, event.clientX) : null);
  document.addEventListener('touchstart', (event) => {
    if(!hasTouched) {
      hasTouched = true;
      onTouch(title, lavande);
    }
  });
});