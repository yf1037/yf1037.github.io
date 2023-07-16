const ROTATION_MAX = [
  -20, 
  -15, 
  -10, 
  10, 
  15, 
  30
];

function onHover(title, lavande, posX) {
  let numChild  = lavande.childElementCount
  let childList = lavande.children;

  const windowWidth = window.innerWidth / 2;
  const percent = 1 - Math.abs(posX / windowWidth - 1);
  console.log(percent);

  title.style.transform = 'translateY(' + -100*percent + 'px)'
  title.style.opacity   = percent;

  for(let idx = 0; idx < numChild; ++idx) {
    const maxRot = ROTATION_MAX[idx];
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