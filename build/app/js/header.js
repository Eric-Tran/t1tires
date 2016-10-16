$(window).scroll(function(event) {
  var scrollPos = $(window).scrollTop();
  if ( scrollPos > 100) {
    $(".navbar-brand").hide();
    $("nav").animate({
      height: '10%'
    }, {duration: 400, queue: false});
    $(".navbar-nav").animate({
      height: '50px',
      marginLeft: '327px'
    }, {duration: 50, queue: false});
     $(".nav-item").animate({
      paddingTop: '15px'
    }, {duration: 400, queue: false});

  }
  if ( scrollPos <= 100) {
    $(".navbar-brand").show();
    $("nav").animate({
      height: '100%'
    }, {duration: 400, queue: false });
    $(".navbar-nav").animate({
      height: '100px',
      marginLeft: '0'
    }, {duration: 50, queue: false});
    $(".nav-item").animate({
      paddingTop: '70px'
    }, {duration: 400, queue: false});
  }
});