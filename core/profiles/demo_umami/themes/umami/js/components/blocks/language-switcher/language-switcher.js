/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal) {

  function init(toggler, menu) {
    menu.style.height = "0";
    toggler.setAttribute('aria-expanded', 'false');
    menu.classList.add('language-switcher-languages--collapsed');
    toggler.setAttribute('aria-controls', menu.getAttribute('id'));
  }

  function collapseSection(element) {
    var sectionHeight = element.scrollHeight;

    var elementTransition = element.style.transition;
    element.style.transition = '';

    return requestAnimationFrame(function () {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;

      return requestAnimationFrame(function () {
        element.style.height = 0;
      });
    });
  }

  function expandSection(element) {
    var sectionHeight = element.scrollHeight;

    element.style.height = sectionHeight + 'px';
  }

  function toggleMenu() {
    var expanded = this.getAttribute('aria-expanded');
    var menu = this.parentElement.querySelector('[data-drupal-selector="language-switcher-languages"]');

    if (expanded === 'false') {
      this.setAttribute('aria-expanded', 'true');
      menu.classList.remove('language-switcher-languages--collapsed');
      expandSection(menu);
    } else {
      this.setAttribute('aria-expanded', 'false');
      collapseSection(menu);
    }
  }

  function toggleVisibility(event) {
    if (event.propertyName === 'height') {
      if (this.previousElementSibling.getAttribute('aria-expanded') === 'false') {
        this.classList.add('language-switcher-languages--collapsed');
      }
    }
  }

  Drupal.behaviors.umamiLanguageSwitcher = {
    attach: function attach(context) {
      var toggler = context.querySelectorAll('[data-drupal-selector="language-switcher-toggle"]');
      var menu = context.querySelectorAll('[data-drupal-selector="language-switcher-languages"]');

      if (menu && menu.length > 0 && toggler && toggler[0].getAttribute('aria-expanded') === null) {
        for (i = 0; i < toggler.length; i++) {
          if (menu[i] && toggler[i]) {
            init(toggler[i], menu[i]);
            toggler[i].addEventListener('click', toggleMenu);
            menu[i].addEventListener('transitionend', toggleVisibility);
          }
        }
      }
    }
  };
})(Drupal);