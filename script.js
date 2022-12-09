$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("image-badge");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" badge-white", "");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " badge-white";
}
let popup = document.getElementById("popup")
let container = document.getElementById("container")
let popup2 = document.getElementById("popup2")
let popup3 = document.getElementById("popup3")
function openPopup2() {
    let name2 = document.frm2.hoten.value;
    let SĐT2 = document.frm2.SĐT.value;
    let Mess2 = document.frm2.Mess.value;
    if (name2 == "") {
        popup2.classList.add("open-popup")
        container.classList.add("container")
    } else if (SĐT2 == "") {
        popup2.classList.add("open-popup")
        container.classList.add("container")
    } else if (Mess2 == "") {
        popup2.classList.add("open-popup")
        container.classList.add("container")
    } else
        popup.classList.add("open-popup")
    container.classList.add("container")
}
function openPopup() {
    let name = document.frm.hoten.value;
    let SĐT = document.frm.SĐT.value;
    let Mess = document.frm.Mess.value;

    if (name == "") {
        popup2.classList.add("open-popup")
        container.classList.add("container")
    } else if (SĐT == "") {
        popup2.classList.add("open-popup")
        container.classList.add("container")
    } else if (Mess == "") {
        popup2.classList.add("open-popup")
        container.classList.add("container")
    } else
        popup.classList.add("open-popup")
    container.classList.add("container")
}
function closePopup() {
    popup.classList.remove("open-popup")
    container.classList.remove("container")
    popup2.classList.remove("open-popup")
}
function openPopup_Data() {
    container.classList.add("container")
    popup3.classList.add("open-popup")
}
function closePopup_Data() {
    popup3.classList.remove("open-popup")
    container.classList.remove("container")
}
let popupn = document.getElementById('popup3')

window.addEventListener("load", function () {


    setTimeout(function () {
        popupn.classList.add("open-popup");
        container.classList.add("container")
    }, 5000)

})
function showPopup() {
    const timeLimit = 5 // seconds;
    let i = 0;
    const timer = setInterval(function () {
        i++;
        if (i == timeLimit) {
            clearInterval(timer);
            popupn.classList.add("open-popup");
            container.classList.add("container")
        }
        console.log(i)
    }, 1000);
}
close.addEventListener("click", function () {
    loginPopup.classList.remove("open-popup");
})
let btn = document.getElementsByClassName("btn-sb");
btn.addEventListener('click', function () {
    btn.classList.add('spin');
    btn.disabled = true;
    btn.form.firstElementChild.disabled = true;
    window.setTimeout(function () {
        btn.classList.remove('spin');
        btn.disabled = false;
        btn.form.firstElementChild.disabled = false;
    }, 4000);
}, false);



