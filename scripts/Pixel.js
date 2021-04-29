
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

        document.getElementsByTagName('BODY')[0].style = "Background-Color: white";
        document.getElementsByTagName('H1')[0].style = "color: black";
        document.getElementsByTagName('A')[5].style = "color: black";
        document.getElementsByTagName('P')[0].style = "color: black";
        
        
        
        
    }

    if (document.getElementById('Dark').onclick && day === false) {

        document.getElementsByTagName('BODY')[0].style = "Background-Color: black";
        document.getElementsByTagName('A')[5].style = "color: #696969";
        document.getElementsByTagName('P')[0].style = "color: #696969";
      
        
    }

}

