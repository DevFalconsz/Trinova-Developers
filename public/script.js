// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//Redirecionamentos de butões
//function ir_para_home() {
//    window.location.href = "../";
//}
//document.getElementById("value-1").addEventListener("click", ir_para_home);

function ir_para_about() {
    window.location.href = "/About/";
}
document.getElementById("value-2").addEventListener("click", ir_para_about);

function ir_para_skill() {
    window.location.href = "/Skills/";
}
document.getElementById("value-3").addEventListener("click", ir_para_skill);

function ir_para_projetos() {
    window.location.href = "/Projects/";
}
document.getElementById("value-4").addEventListener("click", ir_para_projetos);

function ir_para_curriculum() {
    window.location.href = "/Curriculum/";
}
document.getElementById("value-5").addEventListener("click", ir_para_curriculum);

function ir_para_contato() {
    window.location.href = "/Contact/";
}
document.getElementById("value-6").addEventListener("click", ir_para_contato);

function ir_para_faq() {
    window.location.href = "/FAQ/";
}
document.getElementById("value-7").addEventListener("click", ir_para_faq);