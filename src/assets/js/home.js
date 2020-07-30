

function setNavbar() {
  var scroll = $(window).scrollTop();
  var reachPortfolio;
  var reachContact;

  try {
    reachPortfolio = ($('#portfolio').offset().top - $('#navbar').outerHeight());
    reachContact = $('#contact').offset().top - $('#navbar').outerHeight();
  } catch(e) {
    reachPortfolio = undefined;
    reachContact = undefined;
  }
  

  $('#nav_home').toggleClass('font-menu',
    scroll >= 0 && (reachPortfolio === undefined || scroll < reachPortfolio)
  );
  $('#nav_portfolio').toggleClass('font-menu',
   scroll >= reachPortfolio && scroll < reachContact
  );
  $('#nav_contact').toggleClass('font-menu',
    scroll >= reachContact
  );
}

function checkNavbar() {
  if (window.location.pathname == "/")
    setNavbar();
  else {
    $("#nav_home").removeClass('font-menu');
    $('#nav_portfolio').addClass('font-menu');
    $("#nav_contact").removeClass('font-menu');
  }
}

$(window).scroll(function (event) {
  checkNavbar();
});

$( document ).ready(function() {
  checkNavbar();
});

$(window).scroll();