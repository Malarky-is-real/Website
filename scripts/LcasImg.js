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
        document.getElementById('img2').src = "images/lucas/RFacing.png";
        document.getElementById('img4').style = "images/lucas/LFacing.png";
        document.getElementById('txt1').innerHTML = "Walk";
        
    }

   
    
}
var slideIndex = 1;
let SI = slideIndex;
showSlides(slideIndex);

//Changes name based on slide number




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
    console.log(slideIndex)
    slides[slideIndex - 1].style.display = "block";
    switch (slideIndex) {
        case 1:
            console.log("Lucas Facing Right")
            document.getElementById("pov").innerHTML = "Lucas Facing Forward";
            break;

        case 2:
            document.getElementById("pov").innerHTML = "Lucas Facing Right";
            break;

        case 3:
            document.getElementById("pov").innerHTML = "Lucas Facing Away";
            break;

        case 4:
            document.getElementById("pov").innerHTML = "Lucas Facing Left";
            break;

    }

} 