// let menu = document.querySelector('#menu-bars');
// let navbar = document.querySelector('.navbar');

// menu.onclick = () => {
//     menu.classList.toggle('fa-times');
//     navbar.classList.toggle('active');
// }

// let section = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header .navbar a');

// window.onscroll = () => {

//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');

//     section.forEach(sec =>{

//         let top = window.scrollY;
//         let height = sec.offsetHeight;
//         let offset = sec.offsetTop - 150;
//         let id = sec.getAttribute('id');

//         if(top => offset && top < offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
//             });
//         };
//     });
// }

// document.querySelector('#search-icon').onclick = () => {
//     document.querySelector('#search-form').classList.toggle('active');
// }

// document.querySelector('#close').onclick = () => {
//     document.querySelector('#search-form').classList.remove('active');
// }

  

let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{

        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#search-form').classList.remove('active');
}




$(document).ready(function(){
   
    
      orderFilter($(".filter-btn.active").attr("data-target"))
      $(".filter-btn").click(function(){
        if(!$(this).hasClass("active")){
          orderFilter($(this).attr("data-target"))
        }
        
      })
      function orderFilter(target){
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".food-item").hide();
        $(".food-item[data-category='"+target+"']").fadeIn();
      }
  
  
  
})