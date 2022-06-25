/* for  mobile view search button */
searchForm = document.querySelector('search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}

/* login form hide and show*/
let loginForm =document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=() =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick=() =>{
    loginForm.classList.remove('active');
}



/* */
window.onscroll = () =>{

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
/*
var swiper = new Swiper(".book-slider",{
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction:false,
    },
    brekpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        },
    },  
},);*/
/*
var swipe = 1;
showDivs(swipe);
function plusDivs(n){
    showDivs(swipe += n);
}
function showDivs(n){
    var i;
    var x =
    document.getElementsByClassName("slide");
    if(n>x.lenght){swipe = 1}
    if(n <1 ){swipe = x.length};
    for(i=0;i<x.lenth; i++){
        x[i].style.display="none";
    }
    x[swipe-1].style.display = "block";
}*/