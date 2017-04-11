$(document).ready(function() {
   var stickyNavTop = $('#cardbar').offset().top;

   var stickyNav = function(){
   var scrollTop = $(window).scrollTop();

   if (scrollTop > stickyNavTop) { 
      $('#cardbar').addClass('sticky');
   } else {
      $('#cardbar').removeClass('sticky');
    }
   };

   stickyNav();

   $(window).scroll(function() {
      stickyNav();
   });
});