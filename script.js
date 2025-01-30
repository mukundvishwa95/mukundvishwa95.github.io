const text =[
    "Hacker",
    "Developer",
    "Red Teammer",
    "CS Teacher",
    "Web Designer"
]

let speed =100;

const textele=document.querySelector(".typewritter-text");

let texti=0;
let chari=0;

function typewritter(){
    if (chari<text[texti].length){
        textele.innerHTML+=text[texti].charAt(chari);
        chari++;
        setTimeout(typewritter,speed);
    }
    else{
        setTimeout(erase,2000)
    }
}

function erase(){
    if (textele.innerHTML.length>0){
        textele.innerHTML = textele.innerHTML.slice(0,-1);
        setTimeout(erase,50);
    }
    else{
        texti=(texti +1)%text.length;
        chari=0;
        setTimeout(typewritter,500);
    }
}

window.onload=typewritter();

const dropdownbtn = document.getElementById("dropdownbtn");
const dropdowncon = document.getElementById("dropdowncontent");

dropdownbtn.addEventListener('click',drop);

function drop(){
    if (dropdowncon.style.display==="none"){
        dropdowncon.style.display="block"
    }
    else{
        dropdowncon.style.display="none"
    }
}

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
});

const hiddentxt = document.querySelectorAll('.hiddentxt');
hiddentxt.forEach((txt)=> observer.observe(txt));

