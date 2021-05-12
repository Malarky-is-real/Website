
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


let day = true;
document.getElementById('Dark').onclick = function level() {
    
    console.log(day)
    day = !day;
    if (document.getElementById('Dark').onclick && day === true) {
        
        document.getElementById('every').style = "Background-Color: white";
        document.getElementById('AboutSec').style = "color: black";
        document.getElementById('end').style = "color: black";
        document.getElementById('Navbar').style = "color: white";
        document.getElementById('List').style = "color: black";
        document.getElementById('links').style = "color: black";
        document.getElementById('Dark').innerHTML = "Dark"
   
    }

    if (document.getElementById('Dark').onclick && day === false) {

        document.getElementById('every').style = "Background-Color: black";
        document.getElementById('AboutSec').style = "color: #696969";
        document.getElementById('end').style = "color: #696969";
        document.getElementById('Navbar').style = "color: #696969";
        document.getElementById('List').style = "color: #696969";
        document.getElementById('links').style = "color:  #696969";
        document.getElementById('Dark').innerHTML = "Light";
        
    }

}

