

document.getElementById("mode").onclick = function()
{

    console.log = ("change");

    document.getElementsByTagName("body")[0].style.backgroundColor = "black";

    document.getElementsByTagName("body")[0].style.color="white";

    document.getElementById('name').style.color="white"

    document.getElementsByTagName("h1")[1].style.backgroundColor = "black";

    document.getElementsByTagName('h1')[1].style.color = "white";

    document.getElementsByTagName('ul')[1].style.backgroundColor = "black";

    document.getElementsByTagName('ul')[1].style.Color = "white";

    
    

	document.getElementById('mode').innerHTML =  "Light";

    
}

    var links = [
        "youtube.com/watch?v=pBNZevgJH1g",
        "youtube.com/watch?v=SSBWiFGzsyU",
        "youtube.com/watch?v=2owZXPyeilc",
        "youtube.com/watch?v=m5X3FvuwWy8",
        "youtube.com/watch?v=cpNUqNe0U5g",
        "youtube.com/watch?v=Tsk6LRwjPMI",
        "youtube.com/watch?v=IfVmFkjsUtc",
        "youtube.com/watch?v=62xHvBHlrME",
        "youtube.com/watch?v=2oLl8NLtels",
        "youtube.com/watch?v=eHVjqr2Z7EU",
        "youtube.com/watch?v=0fXk_JxBnUc",
        "youtube.com/watch?v=Agn0mWEiF-Y",
        "youtube.com/watch?v=FkSFBcjOKHY",
        "youtube.com/watch?v=KJTeJ5BToJw"];
    
        openStuff = function () {
            // get a random number between 0 and the number of links
            var randIdx = Math.random() * links.length;
            // round it, so it can be used as array index
            randIdx = parseInt(randIdx, 10);
            // construct the link to be opened
            var link = 'http://' + links[randIdx];
            // open it in a new window / tab (depends on browser setting)
            window.open(link);
        };




var d = new Date()
document.getElementById("time").innerHTML = d.getDay();

if(d.getDay() === 3 )
{
    // Change 1
    document.getElementById('AP').style.backgroundColor = "orange";
    document.getElementById('Span').style.backgroundColor = "orange";
    document.getElementById('Bio').style.backgroundColor = "orange";
    //Bolds Words
    document.getElementById('AP').style.fontWeight = "900";
    document.getElementById('Span').style.fontWeight = "900";
    document.getElementById('Bio').style.fontWeight = "900";
    // Mouse over Color Change
    document.getElementById('AP').onmouseover = function(){mouseOver()};
    document.getElementById('Span').onmouseover = function(){mouseOver2()};
    document.getElementById('Bio').onmouseover = function(){mouseOver3()};
    // Mouse out color change
    document.getElementById('AP').onmouseout = function(){mouseOut()};
    document.getElementById('Span').onmouseout = function(){mouseOut2()};
    document.getElementById('Bio').onmouseout = function(){mouseOut3()};

} 


if(d.getDay() === 4 )
{
    // Change 1
    document.getElementById('eng').style.backgroundColor = "orange";
    document.getElementById('mat').style.backgroundColor = "orange";
    document.getElementById('PE').style.backgroundColor = "orange";
    //Bolds Words
    document.getElementById('mat').style.fontWeight = "900";
    document.getElementById('eng').style.fontWeight = "900";
    document.getElementById('PE').style.fontWeight = "900";
    // Mouse over Color Change
    document.getElementById('mat').onmouseover = function(){mouseOver4()};
    document.getElementById('eng').onmouseover = function(){mouseOver5()};
    document.getElementById('PE').onmouseover = function(){mouseOver6()};
    // Mouse out color change
    document.getElementById('mat').onmouseout = function(){mouseOut4()};
    document.getElementById('eng').onmouseout = function(){mouseOut5()};
    document.getElementById('PE').onmouseout = function(){mouseOut6()};

} 


// Mouse Over
function mouseOver(){
    document.getElementById('AP').style.backgroundColor = "Black";
}

function mouseOver2(){
    document.getElementById('Span').style.backgroundColor = "Black";
}

function mouseOver3(){
    document.getElementById('Bio').style.backgroundColor = "Black";
}
// Mouse Out
function mouseOut(){
    document.getElementById('AP').style.backgroundColor = "orange";
    
}

function mouseOut2(){
    document.getElementById('Span').style.backgroundColor = "orange";
    
}

function mouseOut3(){
    document.getElementById('Bio').style.backgroundColor = "orange";
    
}

function mouseOver4(){
    document.getElementById('mat').style.backgroundColor = "Black";
}

function mouseOver5(){
    document.getElementById('eng').style.backgroundColor = "Black";
}

function mouseOver6(){
    document.getElementById('PE').style.backgroundColor = "Black";
}
// Mouse Out
function mouseOut4(){
    document.getElementById('mat').style.backgroundColor = "orange";
    
}

function mouseOut5(){
    document.getElementById('eng').style.backgroundColor = "orange";
    
}

function mouseOut6(){
    document.getElementById('PE').style.backgroundColor = "orange";
    
}

function mouseOver7(){
    document.getElementById('PE').style.backgroundColor = "Orange";
    
}


function mouseOut7(){
    document.getElementById('PE').style.backgroundColor = "grey";
    
}

function mouseOver8(){
    document.getElementById('eng').style.backgroundColor = "Orange";
    
}


function mouseOut8(){
    document.getElementById('eng').style.backgroundColor = "grey";
    
}

function mouseOver9(){
    document.getElementById('mat').style.backgroundColor = "Orange";
    
}


function mouseOut9(){
    document.getElementById('mat').style.backgroundColor = "grey";
    
}

var c = new Date()
var a = new Date()
console.log(a.getHours())

if (a.getHours() >= 9 && a.getHours() < 10 && d.getDay() === 4  ) {
    document.getElementById('mat').style.backgroundColor = 'orange'
    

    document.getElementById('eng').style.backgroundColor = "grey";
    document.getElementById('eng').onmouseover = function(){mouseOver8()};
    document.getElementById('eng').onmouseout = function(){mouseOut8()};

    document.getElementById('PE').onmouseover = function(){mouseOver7()};
    document.getElementById('PE').onmouseout = function(){mouseOut7()};
    document.getElementById('PE').style.backgroundColor = "grey";
}    

if (a.getHours() >= 10 && a.getHours() <= 12 && d.getDay() === 4  ) {
    document.getElementById('mat').style.backgroundColor = 'grey'
    document.getElementById('mat').onmouseover = function(){mouseOver9()};
    document.getElementById('mat').onmouseout = function(){mouseOut9()};
    

    document.getElementById('eng').style.backgroundColor = "orange";
    
    document.getElementById('PE').onmouseover = function(){mouseOver7()};
    document.getElementById('PE').onmouseout = function(){mouseOut7()};
    document.getElementById('PE').style.backgroundColor = "grey";
} 

if (a.getHours() >= 13 && a.getHours() <= 14 && d.getDay() === 4 ) {
    
    document.getElementById('mat').style.backgroundColor = 'grey'
    document.getElementById('mat').onmouseover = function(){mouseOver9()};
    document.getElementById('mat').onmouseout = function(){mouseOut9()};

    document.getElementById('eng').style.backgroundColor = "grey";
    document.getElementById('eng').onmouseover = function(){mouseOver8()};
    document.getElementById('eng').onmouseout = function(){mouseOut8()};

    document.getElementById('PE').style.backgroundColor = "orange";
}    
