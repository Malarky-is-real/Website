
/*
document.getElementById('Dark').onclick = function testalert(num)
{

    let sum = num;


    if (sum === 12) {
        alert("Run");
    }

    if (sum !== 12) {
        alert("Stay!");
    }

}

testalert(11);
 */



// Night Mode
let mode = true;
document.getElementById('Dark').onclick = function level() {
    
    console.log(mode)
    mode = !mode;
    if (document.getElementById('Dark').onclick && mode === true) {
        
        document.getElementById('every').style = "Background-Color: white";
        document.getElementById('row').style = "Background-Color: white";
        document.getElementById('main').style = "Background-Color: white";
        document.getElementById('side').style = "Background-Color: #f1f1f1";
        document.getElementById('AboutSec').style = "color: black";
        document.getElementById('info').style = "color: black";
        document.getElementById('Navbar').style = "color: white";
        document.getElementById('List').style = "color: black";
        document.getElementById('links').style = "color: black";
        document.getElementById('Dark').innerHTML = "Dark";
   
    }

    if (document.getElementById('Dark').onclick && mode === false) {

        document.getElementById('every').style = "Background-Color: black";
        document.getElementById('row').style = "Background-Color: black";
        document.getElementById('side').style = "Background-Color: #1B1B1B";
        document.getElementById('Navbar').style = "background-color: lightslategrey";
        document.getElementById('main').style = "Background-Color: black";
        document.getElementById('info').style = "color: #696969";
        document.getElementById('AboutSec').style = "color: #696969";
        document.getElementById('info').style = "color: #696969";
        document.getElementById('Navbar').style = "color: #696969";
        document.getElementById('List').style = "color: #696969";
        document.getElementById('links').style = "color: #696969";
        document.getElementById('Dark').innerHTML = "Light";
        
    }

}

//Date

var a = new Date();
a.setHours(a.getHours())
console.log(a.getHours());

if (a.getHours() >= 21 || a.getHours() < 6 ) {
    console.log('night');
    document.getElementById('every').style = "Background-Color: black";
    document.getElementById('row').style = "Background-Color: black";
    document.getElementById('side').style = "Background-Color: black";
    document.getElementById('Navbar').style = "background-color: lightslategrey";
    document.getElementById('main').style = "Background-Color: black";
    document.getElementById('info').style = "color: #696969";
    document.getElementById('AboutSec').style = "color: #696969";
    document.getElementById('info').style = "color: #696969";
    document.getElementById('Navbar').style = "color: #696969";
    document.getElementById('List').style = "color: #696969";
    document.getElementById('links').style = "color: #696969";
    document.getElementById('Dark').innerHTML = "Light";
    mode = false;
}

else

{

    console.log('day');
    document.getElementById('every').style = "Background-Color: white";
    document.getElementById('row').style = "Background-Color: white";
    document.getElementById('main').style = "Background-Color: white";
    document.getElementById('side').style = "Background-Color: #f1f1f1";
    document.getElementById('AboutSec').style = "color: black";
    document.getElementById('info').style = "color: black";
    document.getElementById('Navbar').style = "color: white";
    document.getElementById('List').style = "color: black";
    document.getElementById('links').style = "color: black";
    document.getElementById('Dark').innerHTML = "Dark";
    mode = true;

}


var d = new Date();
document.getElementById("date").innerHTML = d.getDay();

switch (new Date().getDay())
{
    case 0:
        document.getElementById("date").innerHTML = "Sunday";
        break;

    case 1:
        document.getElementById("date").innerHTML = "Monday";
        break;
    case 2:

        document.getElementById("date").innerHTML = "Tuesday";
        break;

    case 3:
        document.getElementById("date").innerHTML = "Wednesday";
        break;

    case 4:
        document.getElementById("date").innerHTML = "Thursday";
        break;

    case 5:
        document.getElementById("date").innerHTML = "Friday";
        break;

    case 6:
        document.getElementById("date").innerHTML = "Saturday";
        break;
}