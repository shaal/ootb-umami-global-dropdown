/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

beNice.smile('hello');
var delayInMilliseconds = 1000;
setTimeout(function () {}, delayInMilliseconds);
(function () {
  wowwow();

  var delayInMilliseconds = 1000;
  setTimeout(function () {
    beNice.smile('hello');
  }, delayInMilliseconds);

  var toggler = document.querySelector('[data-drupal-selector="menu-main-toggle"]');
  var menu = document.querySelector('[data-drupal-selector="menu-main"]');

  function toggleMenu() {
    toggler.classList.toggle('menu-main-toggle--active');
    menu.classList.toggle('menu-main--active');
    return false;
  }

  toggler.addEventListener('click', toggleMenu);
})();