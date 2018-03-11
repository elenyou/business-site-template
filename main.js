(function() {
  
    var Menu = (function() {
      var burger = document.querySelector('.burger');
      var menu = document.querySelector('.menu');
      var menuList = document.querySelector('.menu__list');
      var menuItems = document.querySelectorAll('.menu__item');
      
      var active = false;
      
      var toggleMenu = function() {
        if (!active) {
          menu.classList.add('menu--active');
          menuList.classList.add('menu__list--active');
          burger.classList.add('burger--close');
          for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.add('menu__item--active');
          }
          
          active = true;
        } else {
          menu.classList.remove('menu--active');
          menuList.classList.remove('menu__list--active');
          burger.classList.remove('burger--close');
          for (var i = 0; i < menuItems.length; i++) {
            menuItems[i].classList.remove('menu__item--active');
          }
          
          active = false;
        }
      };
      
      var bindActions = function() {
        burger.addEventListener('click', toggleMenu, false);
      };
      
      var init = function() {
        bindActions();
      };
      
      for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', () => {
          toggleMenu();
        })
      }
      
      return {
        init: init
      };
      
    }());
    
    Menu.init();
    
}());

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