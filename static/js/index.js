console.log("test successfull")
var typed = new Typed('.element', {
    strings: ["I'am  <strong class='cp'>Faisal.</strong>",
    "I'am a <strong class='cp'>Freelancer.</strong>",
    "I'am a <strong class='cp'>Tutor.<strong>",
    "I'am a <strong class='cp'>Developer.</strong>"],
    typeSpeed: 30,
    backSpeed:40,
    loop:true
  });

  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60,
      stretch: 0,
      depth: 100,
      modifier: 5,
      slideShadows : true,
      autoplay:true
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

 $(document).ready(function(){
   $('.grid').isotope({
     itemSelector:'.item'
   });
   $('.filter-button-group').on('click','li',function(){
     var filterValue = $(this).attr('data-filter');
     $('.grid').isotope({filter:filterValue});
     $('.filter-button-group li').removeClass('active');
     $(this).addClass('active');
   });
 });


  