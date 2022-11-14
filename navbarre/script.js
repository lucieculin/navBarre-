let roggy = document.querySelector("#tds1")
let uiz = document.querySelector("#tds2")



document.addEventListener("scroll",() => {
    let value = window.scrollY;
fqz.style.top = value * 1  +200+ "px";
if(value < 390){
    tds1.style.width =  value * 1 + "px" ;
    tds2.style.width =  value * 1 + "px" ;
}