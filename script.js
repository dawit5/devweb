function telspace(){
    var newtel = document.getElementById('tel').value;
    if(newtel.length == 0){
        document.getElementById('tel').value = newtel+"+91 ";
    }
    if(newtel.length == 1 || newtel.length == 3 || newtel.length == 7 || newtel.length == 11){
    document.getElementById('tel').value = newtel+" ";
    document.getElementById('tel').max = 1;
}
}

function send(){
var fname = document.getElementById('fname').value;
var lname = document.getElementById('lname').value;
alert(fname + " " + lname + " Thank for fill Contact form . Our tream 24 hours!");
}
window.onscroll = function() { 
    if (window.pageYOffset >= ul.offsetTop) {
    navpro.classList.add("sticky")
  } else {
     
    navpro.classList.remove("sticky");
  }};

var navpro = document.getElementById("navpro");
var ul = document.getElementById("ul");
var sticky = navbar.offsetTop;
const txts=document.querySelector(".animate-text").children,
txtsLen=txts.length;
let index=0;
const textInTimer=3000,
 textOutTimer=2800;

function animateText() {
for(let i=0; i<txtsLen; i++){
txts[i].classList.remove("text-in","text-out");  
}
txts[index].classList.add("text-in");

setTimeout(function(){
 txts[index].classList.add("text-out");              
},textOutTimer)

setTimeout(function(){

if(index == txtsLen-1){
   index=0;
 }
else{
    index++;
  }
 animateText();
},textInTimer); 
}

window.onload=animateText;
