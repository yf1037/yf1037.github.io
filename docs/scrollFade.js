const TIME_DELAY = 400; //1sec

let timeLastFadeIn = 0;

function fadeIn(shouldDelay) {
  const VIEW_PORT_OFFSET = -50;
  const pageBottom = (window.innerHeight || document.documentElement.clientHeight) + VIEW_PORT_OFFSET;

  let toFadeList = document.getElementsByClassName('fadeIn');
  for( let idx = 0; idx < toFadeList.length; ++idx ) {
    let element = toFadeList[idx];
    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < pageBottom) {
      if(!shouldDelay) {
        element.classList.add('visible');
      }
      else {
        setTimeout(() => element.classList.add('visible'), timeLastFadeIn);
        timeLastFadeIn += TIME_DELAY;
      }
    }
  }
}

document.addEventListener("scroll", () => fadeIn(false));
document.addEventListener('DOMContentLoaded', () => fadeIn(true));