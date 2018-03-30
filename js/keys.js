'use strict';
/*
document.getElementById('circle-large').addEventListener('keypress', myFunction);

function myFunction() {
    event.preventDefault();
    document.getElementById('circle-large').style.backgroundColor = 'yellow';
    console.log('pressed');
}

//event.preventDefault()


document.getElementById('circle-large'). = function(e) { // or document.onkeypress
    e = e || window.event;
    if (e.keyCode == 115 || e.keyCode == 83) {
        alert("do something");
    }
};

/*
document.getElementById('circle-large').addEventListener('keypress', myFunction);

function myFunction(e) {
    event.preventDefault();
    e = e || window.event;
    if (e.keyCode == 115 || e.keyCode == 83) {
        alert("do something");
    }
}


document.getElementById('circle-large').addEventListener('keypress', myFunction);

function myFunction(event) {
    var x = event.which || event.keyCode;
    if (x.keyCode == 115 || x.keyCode == 83){
    document.getElementById('circle-large').innerHTML.add.style.backgroundColor = 'yellow';
    console.log('event happened!');
    }
}



document.getElementById('circle-large').addEventListener('keypress', function (e) {

    if (e.keyCode == 115 || x.keyCode == 83) {

        console.log('you pressed S');

    }

}, false);



document.getElementById('circle-large').onkeypress = function(e) { // or document.onkeypress
    e = event.which || event.keyCode;
    if (e.keyCode == 115 || e.keyCode == 83) {
        alert("do something");
    }
};
*/

//Pressing M will change the color of the middle round item, in Chrome!

document.addEventListener("keypress", lightenUpCircle);

function lightenUpCircle(e) {
    event.preventDefault();
    //e = event.which || event.keyCode;
    if(e.keyCode == 77 || e.keyCode == 109)
    //document.getElementById('circle-large').style.backgroundColor = 'yellow';
        var element = document.getElementById('circle-large');
        element.classList.toggle('yellow');
}
