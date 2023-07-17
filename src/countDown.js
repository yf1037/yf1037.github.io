const DATE_TARGET = new Date("2024/07/20 15:30:00");

function updateText(elementList, number) {
  if( !elementList) {
    return;
  }

  for( let idx = 0; idx < elementList.length; ++idx) {
    let element = elementList[idx];
    let numberElementList = element.getElementsByClassName('number')[0];
    if( numberElementList.innerHTML !== number ) {
      numberElementList.innerHTML = number;
    }
  }
}

function update(countDown) {
  let diff = (DATE_TARGET - Date.now()) / 1000;

  let days  = Math.floor(diff/(24*60*60));
  diff -= days * 24*60*60;
  let hours = Math.floor(diff/(60*60));
  diff -= hours * 60 * 60;
  let minutes = Math.floor(diff/60);
  diff -= minutes * 60;
  let seconds = Math.floor(diff);

  updateText(countDown["days"], days.toString());
  updateText(countDown["hours"], hours.toString());
  updateText(countDown["minutes"], minutes.toString());
  updateText(countDown["seconds"], seconds.toString());
}

window.addEventListener('load', () => {
  const DELAY = 1000; // in milliseconds

  let countDown = {
    "days": document.getElementsByClassName('countDown-days'),
    "hours": document.getElementsByClassName('countDown-hours'),
    "minutes": document.getElementsByClassName('countDown-minutes'),
    "seconds": document.getElementsByClassName('countDown-seconds')
  };

  update(countDown);
  setInterval(() => update(countDown), DELAY);
});