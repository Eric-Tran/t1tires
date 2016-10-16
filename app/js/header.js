//Header scroll resize

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
    // $(".navbar-header a").animate({
    //   'margin-top': '5px'
    // }, {duration: 300, queue: false});
    // $(".nav-link").animate({
    //   'margin-top': '15px'
    // }, {duration: 300, queue: false});
    // $(".searchbar").animate({
    //   top: '61px'
    // }, {duration: 300, queue: false});
    // $(".searchbar-input").animate({
    //   height: '40px',
    //   'font-size': '15px'
    // }, {duration: 300, queue: false });
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
    // $(".navbar-header a").animate({
    //   'margin-top': '30px'
    // }, {duration: 300, queue: false});
    // $(".nav-link").animate({
    //   'margin-top': '38px'
    // }, {duration: 300, queue: false});
    // $(".searchbar").animate({
    //   top: '116px'
    // }, {duration: 300, queue: false});
    // $(".searchbar-input").animate({
    //   height: '70px',
    //   'font-size': '20px'
    // }, {duration: 300, queue: false });
  }
});