var names = [
    "Veer Sanghavi (Me)", "Milind Sanghavi (Dad)", "Jyoti Taparia (Mom)"
];
var images =[
    "veer.png", "dad.png", "mom.png"
];
var i=0;
function nextslide(){
  document.getElementById("p1").innerHTML=names[i];
  document.getElementById("members").src=images[i];
  i++;
  if(i>2){
    i=0;
  }
}