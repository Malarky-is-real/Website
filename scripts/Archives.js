//Front Page
function replaceImage(imgid, source, mapid) {
    var image = document.getElementById(imgid);
    image.src = source;
    var newmap = document.getElementById(mapid);
    var origin = document.getElementById("mapgeneric");
    origin.innerHTML = newmap.innerHTML;
}




var a = document.getElementById("home");

a.href = "file:///C:/Users/Anthony/Desktop/Website/Javascript/test-site/Pixel%20Art.html";


let click = false;

document.getElementById('entrance').onclick = function level()

{
    console.log(click)

    click = !click;

    var x = document.getElementById("gallery");

    if (document.getElementById('entrance').onclick && click == true)
    {
 
        document.getElementById("img1").src = "images/Archives/Mainbuilding/Archives-Updated-Recovered2.png";
        document.getElementById("entrance").src = "images/icons/Back2.png";
        x.style.display = "block";


    }


    if (document.getElementById('entrance').onclick && click === false)
    {

    
        document.getElementById("img1").src = "images/Archives/Mainbuilding/Archives-Updated.png";
        document.getElementById("entrance").src = "images/icons/Front.png";
        x.style.display = "none"
        a.href = "file:///C:/Users/Anthony/Desktop/Website/web-projects/test-site/Pixel%20Art.html";

    } 

}



var slideIndex = 1;
showSlides(slideIndex);


// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
  console.log(slideIndex)
}



function showSlides(n) {
  var i;
  var slideMax = 6
  var slideMin = 1
  var slides = document.getElementsByClassName("mySlides");
  if (slideIndex > slideMax) {slideIndex = 1}
  if (slideIndex < slideMin) {slideIndex = 1}

  
  switch (slideIndex) {
    case 1:
      document.getElementById("imgs").innerHTML = '<img src=\'images/Archives/Archive/FollowerFightExample.png\'>';
      document.getElementById("caption").innerHTML = "Follower Fight Example"
      
      
      break;

    case 2:
      
      document.getElementById("imgs").innerHTML = '<img src=\'images/Archives/Archive/Monster.png\'>';
      document.getElementById("caption").innerHTML = "Lucas House "
      console.log("Lucas")
      break;
    
    case 3:
      document.getElementById("imgs").innerHTML = '<img src=\'images/Archives/Archive/LucasHouseRundown.png\'>';
      document.getElementById("caption").innerHTML = "OilFire"
      break;
    case 4:
      document.getElementById("imgs").innerHTML = '<img src=\'images/Archives/Archive/OilMatch.gif\'>';
      document.getElementById("caption").innerHTML = "OilFire"
      break;
    case 5: 
      document.getElementById("imgs").innerHTML = '<img src=\'images/Archives/Archive/MantestLookandWeirded.gif\'>'
      document.getElementById("caption").innerHTML = "Old Lucas looking around weird"
      break;
    }     




  document.getElementById("mySlide").innerHTML = slideIndex + "/" + slideMax;
  
}

//Controls the images and when they show up
