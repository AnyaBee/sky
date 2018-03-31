'use strict';

document.addEventListener("keypress", lightenUpCircle);
document.addEventListener("keypress", lightenUpMovies);
document.addEventListener("keydown", lightenUpImage);

//Pressing F will change the background color of the middle round item in Chrome!
function lightenUpCircle(e) {
    event.preventDefault();
    var element = document.getElementById('circle-large');
    //e = event.which || event.keyCode;
    if(e.keyCode == 77 || e.keyCode == 109)
        element.classList.toggle('transition');
}

//Pressing M will change the background color of the top right item
function lightenUpMovies(e) {
    event.preventDefault();
    var element = document.getElementById('movies-block');
    //e = event.which || event.keyCode;
    if(e.keyCode == 70 || e.keyCode == 102)

    element.classList.toggle('movies-lightened');
}

var images = {68: false, 69: false, 86: false};
function lightenUpImage (e) {
        if (e.keyCode in images) {
            images[e.keyCode] = true;
            if (images[68] && images[69] && images[86]) {
                var element1 = document.getElementById('image-1');
                var element2 = document.getElementById('image-2');
                var element3 = document.getElementById('image-3');
                element1.classList.toggle('image-lightened');
                element2.classList.toggle('image-lightened');
                element3.classList.toggle('image-lightened');
            }
        }
    }

