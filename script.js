// preloader Annimation script 
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
  // preloader.remove();
})
// navbar Animation script
const mainButton = document.getElementById('mainbutton');
const mainicon = document.getElementById('mainicon');
const one = document.getElementById('one')
const two = document.getElementById('two');
const three = document.getElementById('three');
mainButton.addEventListener('click', () => {
  mainicon.classList.toggle('burger');
  two.classList.toggle('dugi')
  one.classList.toggle('ekki')
  three.classList.toggle('thiki')
}
)
// scroll event script 
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 580) { /* adjust scroll threshold */
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// navbar navigation links script 
document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  const options = {
    threshold: 0.5
  };

  let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('under-start');
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('under-start');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});

// typed js Animation script 
let typed = new Typed('#role', {
  strings: ['Designer', 'Developer'],
      loop: true,
      typeSpeed: 80,
      backSpeed: 80,
});
//  email js script  
// function sendEmail(){
//   Email.send({
//     Host : "smtp.elasticemail.com", //godaddy host name 
//     Username : "imdemon9802@gmail.com",
//     Password : "8D11003D6DA778ED12668E0226F16BCF1F48",
//     To : 'imdemon9802@gmai.com', //kisk0 krni jisko bhejna 
//     From :"imdemon9801@gmail.com", //iske pass jayegi 
//     Subject : document.getElementById("subject").value,
//     Body : "Name :- " + document.getElementById("name").value + "<br>" +
//            "Email :- " + document.getElementById("email").value + "<br>" +
//            "Subject :- " + document.getElementById("subject").value + "<br>" +
//            "Message :- " + document.getElementById("textarea").value + "<br>"
//           }).then(
//             message => alert("message sent")
// );
// }

// filter portfolio gallery 
//  $('.portfolio-item').isotope({
//          	itemSelector: '.item',
//          	layoutMode: 'fitRows'
//          });
        $('.portfolio-menu ul li').click(function(){
          $('.portfolio-menu ul li').removeClass('active');
          $(this).addClass('active');
          
          var selector = $(this).attr('data-filter');
          $('.portfolio-item').isotope({
            filter:selector
          });
          return  false;
        });
        $(document).ready(function() {
        var popup_btn = $('.popup-btn');
        popup_btn.magnificPopup({
        type : 'image',
        gallery : {
          enabled : true
        }
        });
        });












