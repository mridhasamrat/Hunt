var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
   if(window.pageYOffset > 100){
    nav.classList.add('bg-dark','shadow');
}else{
    nav.classList.remove('bg-dark','shadow');
}
});






$('.port-slider').slick({
    slidesToShow:4,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
})



 $('.venobox').venobox(); 



$('.service-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  centerMode:true,
  centerPadding:"0",
  prevArrow: '<i class="fas fa-chevron-up prev-2"></i>',
  nextArrow: '<i class="fas fa-chevron-down next-2"></i>',
});




$('.testi-img-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical:true,
  centerMode:true,
  centerPadding:"0",
  prevArrow: '<i class="fas fa-chevron-up prev-3"></i>',
  nextArrow: '<i class="fas fa-chevron-down next-3"></i>',
  asNavFor: '.text-slider',
});




$('.text-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade:true,
  arrows:false,
  asNavFor: '.testi-img-slider',
});




$('.counter').counterUp({
                delay: 10,
                time: 5000,
            });






$('.team-slider').slick({
    slidesToShow:4,
    arrows:false,
})




$('.sponsor-slider').slick({
    slidesToShow:5,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 2000,
})