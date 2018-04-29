(function($) {
  "use strict"; // Start of use strict

  var paths = ['./js/inc/privacy-policy.html', './js/inc/terms-of-use.html'];
  //var els = [{$('#privacy')}, {$('#terms')}];

  $.ajax({
    url: paths[0], //ex. js/templates/mytemplate.handlebars
    cache: true,
    success: function(data) {
      var source = data;
      var template = Handlebars.compile(source);
      $('#privacy').html(template);
    }
  });


  $.ajax({
    url: paths[1], //ex. js/templates/mytemplate.handlebars
    cache: true,
    success: function(data) {
      var source = data;
      var template = Handlebars.compile(source);
      $('#terms').html(template);
    }
  });

  $.contactButtons({
  effect  : 'slide-on-scroll',
  buttons : {
        'facebook':   { class: 'facebook',  use: true, icon: 'facebook',    link: 'https://www.facebook.com/digitalseedmedia/', title: 'Follow on Facebook' },
        'twitter':    { class: 'twitter',   use: true, icon: 'twitter',     link: 'https://twitter.com/digitalseedmedi/', title: 'Follow on Twitter' },
        'instagram':  { class: 'instagram', use: true, icon: 'instagram', link: 'https://www.instagram.com/digitalseedmedia/', title: 'Follow on Instagram' },
        'linkedin':   { class: 'linkedin',  use: true, icon: 'linkedin',    link: 'https://www.linkedin.com/digitalseedmedia/', title: 'Visit on LinkedIn' },
        'google':     { class: 'gplus',     use: false, icon: 'google-plus', link: '', title: 'Visit on Google Plus' },
        'pinterest':  { class: 'pinterest', use: false, icon: 'pinterest',   link: '', title: 'Follow on Pinterest' },
        'email':      { class: 'email',     use: false, icon: 'envelope',    link: '', title: 'Send us an email', type: 'email' }
      } 
});


  setTimeout(function () {
    $("#cookieConsent").fadeIn(200);
  }, 4000);

  $("#closeCookieConsent, .cookieConsentOK").click(function(e) {
    e.preventDefault();
    $("#cookieConsent").fadeOut(200);
    return false;
  });


  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict
