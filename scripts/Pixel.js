
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


let mode = true;
document.getElementById('Dark').onclick = function level() {

    console.log(mode)
    mode = !mode;
    if (document.getElementById('Dark').onclick && mode === true) {

        document.getElementById('every').style.backgroundColor = "black";
        document.getElementById('every').style.color = "#696969";
        document.getElementById('Main-head').style.backgroundColor = "#2B2B2B";
        document.getElementById('Main-head').style.color = "#696969";
        document.getElementById('Navbar').style.backgroundColor = "#303030";
        document.getElementById('Navbar').style.color = "black";
        document.getElementById('Dark').innerHTML = "Light";

    }

    if (document.getElementById('Dark').onclick && mode === false) {

        document.getElementById('every').style.backgroundColor = "white";
        document.getElementById('every').style.color = "black";
        document.getElementById('Main-head').style.backgroundColor = "dimgray";
        document.getElementById('Main-head').style.color = "black";
        document.getElementById('Navbar').style.backgroundColor = "lightslategrey";
        document.getElementById('Navbar').style.color = "black";
        document.getElementById('Dark').innerHTML = "Light";

    }

}

//Date

var a = new Date();
a.setHours(a.getHours())
console.log(a.getHours());

if (a.getHours() >= 21 || a.getHours() < 6) {

    console.log('night');
    document.getElementById('every').style.backgroundColor = "black";
    document.getElementById('every').style.color = "#696969";
    document.getElementById('Main-head').style.backgroundColor = "#2B2B2B";
    document.getElementById('Main-head').style.color = "#696969";
    document.getElementById('Navbar').style.backgroundColor = "#303030";
    document.getElementById('Navbar').style.color = "black";
    document.getElementById('Dark').innerHTML = "Light";
    mode = true;
}

else {

    console.log('day');
    document.getElementById('every').style.color = "black";
    document.getElementById('every').style.color = "white";
    document.getElementById('Dark').innerHTML = "Dark";
    mode = false;

}
