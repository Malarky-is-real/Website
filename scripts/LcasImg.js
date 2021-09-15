//Slide show code

let change = true
document.getElementById('change1').onclick = function look()
{
    console.log(change)
    change = !change
    
    if (document.getElementById('change1').onclick && change === false)
    {

        document.getElementById('img1').src = "images/lucas/Man-Forward-Walk.gif";
        document.getElementById('img2').src = "images/lucas/RSideWalkBetter.gif";
        document.getElementById('txt1').innerHTML = "Idle";
      
    }
    
    if (document.getElementById('change1').onclick && change === true)
    {

        document.getElementById('img1').src = "images/lucas/Ffacing.png";
        document.getElementById('img2').src = "images/lucas/RFacing.png"
        document.getElementById('txt1').innerHTML = "Walk";
        
    }
    
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "block";

} 