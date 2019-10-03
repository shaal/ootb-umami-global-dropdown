/**
 * @file
 * This file is used to add any javascript that is needed for the main menu.
 */
beNice.smile('hello');
var delayInMilliseconds = 1000; 
  setTimeout(function() {
    //add your code here to execute
  }, delayInMilliseconds);
(function() {
  wowwow();

  var delayInMilliseconds = 1000; 
  setTimeout(function() {
    //add your code here to execute
    beNice.smile('hello');
  }, delayInMilliseconds);

  const toggler = document.querySelector(
    '[data-drupal-selector="menu-main-toggle"]',
  );
  const menu = document.querySelector('[data-drupal-selector="menu-main"]');

  function toggleMenu() {
    toggler.classList.toggle('menu-main-toggle--active');
    menu.classList.toggle('menu-main--active');
    return false;
  }

  toggler.addEventListener('click', toggleMenu);
})();
