$(function() {
    $('ul.nav a').bind('click', function(event) {
        event.preventDefault();        

        var $anchor = $(this);

        //Update active link
        makeNavActive($anchor);

        //Animate scroll position
        $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
        }, 1000);
    });
  });
  
  function makeNavActive($elem) {
    if (typeof $elem !== "jQuery") {
      $elem = $($elem);
    }
    var navLink  = $('ul.nav li');
    navLink.removeClass('current');
    $elem.parent().addClass('current');
  }
  
  function waypointHandler() {
    var elementID = this.element.id;
    if (elementID == "fake_home"){
        elementID = "home";
    }
    makeNavActive("[href='#" + elementID + "']");
  }
  
  var waypointA = new Waypoint({
    element: document.getElementById('fake_home'),
    handler: waypointHandler,
    offset: 100
  });
  
  var waypointB = new Waypoint({
    element: document.getElementById('about'),
    handler: waypointHandler,
    offset: 38
  });
  
  var waypointC = new Waypoint({
    element: document.getElementById('works'),
    handler: waypointHandler,
    offset: 38
  });
  
  
  var waypointE = new Waypoint({
    element: document.getElementById('contact'),
    handler: waypointHandler,
    offset: 38
  });