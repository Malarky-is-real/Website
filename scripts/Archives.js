function replaceImage(imgid, source, mapid) {
    var image = document.getElementById(imgid);
    image.src = source;
    var newmap = document.getElementById(mapid);
    var origin = document.getElementById("mapgeneric");
    
}
var myobj = document.getElementById("door");
door.onclick = function()
{

    document.getElementById("img1").src = "images/Archives-Updated-Recovered2.png";
    myobj.remove();
    console.log("deez nut");
}