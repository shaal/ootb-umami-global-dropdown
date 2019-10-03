/**
 * @file
 * This file is used to add javascript code for the dropdown.
 */

  var dropdown = (function () {

    // My public methods will get added to this object
	  var publicAPIs = {};

    // A private method
    var saySomethingNice = function (somethingNice) {
      alert(somethingNice);
    };

    // A public method
    publicAPIs.smile = function (message) {
      if (message) {
        saySomethingNice(message);
      } else {
        saySomethingNice('You make the world better just by being you!');
      }
    };

    // Return our public methods so that they can be accessed
    return publicAPIs;

  })();


  function wowow() {
    console.log('hi!!!');
  }
  var beNice = (function () {

	'use strict';

  console.log('indsidebenice!!!');
	// My public methods will get added to this object
	var publicAPIs = {};

	// A private method
	var saySomethingNice = function (somethingNice) {
		alert(somethingNice);
	};

	// A public method
	publicAPIs.smile = function (message) {
		if (message) {
			saySomethingNice(message);
		} else {
			saySomethingNice('You make the world better just by being you!');
		}
	};

	// Return our public methods so that they can be accessed
	return publicAPIs;

})();

  function init(toggler, menu, element) {
    // When javascript is enabled, set the height to 0, collapsed menu.
    menu.style.height = "0";
    toggler.setAttribute('aria-expanded', 'false');
    menu.classList.add(element + 'items--collapsed');
    toggler.setAttribute('aria-controls', menu.getAttribute('id'));
  }

  function collapseSection(element) {
    // Get the height of the element's inner content,
    // regardless of its actual size.
    var sectionHeight = element.scrollHeight;

    // Temporarily disable all css transitions.
    var elementTransition = element.style.transition;
    element.style.transition = '';

    // On the next frame (as soon as the previous style change has taken
    // effect), explicitly set the element's height to its current pixel height,
    // so we aren't transitioning out of 'auto'.
    return requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;

      // On the next frame (as soon as the previous style change has taken
      // effect), have the element transition to height: 0.
      return requestAnimationFrame(function() {
        element.style.height = 0;
      });
    });
  }

  function expandSection(element) {
    // Get the height of the element's inner content,
    // regardless of its actual size.
    var sectionHeight = element.scrollHeight;

    // Have the element transition to the height of its inner content.
    element.style.height = sectionHeight + 'px';
  }

  function toggleMenu(element) {
    const expanded = this.getAttribute('aria-expanded');
    const menu = this.parentElement.querySelector('[data-drupal-selector="' + element + '-items]"');

    if (expanded === 'false') {
      this.setAttribute('aria-expanded', 'true');
      menu.classList.remove(element + '-items--collapsed');
      expandSection(menu);
    } else {
      this.setAttribute('aria-expanded', 'false');
      collapseSection(menu);
    }
  }

  function toggleVisibility(event, element) {
    if (event.propertyName === 'height') {
      // Waiting for drop-down to fully collapse before hiding the items.
      // Avoid hiding items if menu is still open (when user use double-click).
      if (this.previousElementSibling.getAttribute('aria-expanded') === 'false') {
        this.classList.add(element + '-items--collapsed');
      }
    }
  }

  Drupal.behaviors.umamiDropdown = {
    attach: function (context, element) {
      const toggler = context.querySelectorAll(
        '[data-drupal-selector="' + element + '-toggler"]'
      );
      const menu = context.querySelectorAll('[data-drupal-selector="' + element + '-items]"');
      // The template doesn't have the aria-expanded attribute, so we can
      // use that as a proxy for the first run.
      if (menu && menu.length > 0 && toggler && toggler[0].getAttribute('aria-expanded') === null) {
        for (i = 0; i < toggler.length; i++) {
          // Create dropdown only when there is content to display under.
          if (menu[i] && toggler[i]) {
            init(toggler[i], menu[i]);
            toggler[i].addEventListener('click', toggleMenu);
            menu[i].addEventListener('transitionend', toggleVisibility);
          }
        }
      }
    }
  };
  */
 (function(Drupal) {
})(Drupal);
