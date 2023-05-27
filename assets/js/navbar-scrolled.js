$(function () {
  $(document).scroll(function () {
    var $nav = $(".nav-scroll");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
    
  $(document).scroll(function () {
    var $nav = $(".blast-off");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

//When any link in navbar is clicked
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navcol-1')
const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})