const [current, imgs] = [
  document.querySelector('#current'),
  document.querySelectorAll('.imgs img')
];
const opacity = 0.6;

//Set first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  // Reset the opacity
  imgs.forEach(img => (img.style.opacity = 1));

  //Change current image to src of clicked image
  current.src = e.target.src;

  //Add fade in class
  current.classList.add('fade-in');

  //Remowe fade-in class after .5 seconds
  setTimeout (() => current.classList.remove('fade-in'), 500)
  ;

  //Change the opacity to opacity var
  e.target.style.opacity = opacity;
}



// Animation
$(document).ready(function() {

  function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  $(window).scroll(function () {
      $('.animate').each(function () {
          if (isScrolledIntoView(this)) {
              $(this).addClass('start')
          }
      });

  });
  
});