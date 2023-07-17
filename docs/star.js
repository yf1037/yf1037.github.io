
function generatestar(num){
    let section = document.getElementById('star');
    let innerHTML = "";

    for (let idx = 0; idx < num/2; idx = idx + 1){
        leftpos = Math.random()*90; //aviod exceed the edge of the page
        toppos = Math.random()*80;
        size = Math.random()*70 + 30;
        innerHTML += '<div class="star" style="position: absolute;left:'+ leftpos +'%;top: '+ toppos +'%;"><img style = "width: '+ size +'px" src="/media/star.png" alt="star image"></div>';
    }

    for (let idx = 0; idx < num/2; idx = idx + 1){
        rightpos = Math.random()*90; //aviod exceed the edge of the page
        toppos = Math.random()*80;
        size = Math.random()*70 + 30;
        innerHTML += '<div class="star" style="position: absolute;right:'+ rightpos +'%;top: '+ toppos +'%;"><img style = "width: '+ size +'px" src="/media/star.png" alt="star image"></div>';
    }
    
    section.innerHTML += innerHTML;
}

document.addEventListener( 'DOMContentLoaded', () => generatestar(36) );

