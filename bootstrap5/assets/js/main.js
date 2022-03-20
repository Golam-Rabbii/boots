/* magnific popup */
$(document).ready(function() {
  /* magnific popup */
    $('.image-link').magnificPopup({

        type:'image',
        gallery:{
            enabled:true
          }
    });
    /*counter up*/
    $('.counter').counterUp({
      delay:10,
      time:2000
    });


    /* slick slider */
    $('.testimonials').slick({
      arrows: false,
      dots: true,
      autoplay: true,
    });

    jQuery(window).on('scroll', function(){

      if(jQuery(this).scrollTop()>20){
        
        jQuery('.haeder-area').addClass('stycky');
      }else{
        jQuery('.haeder-area').removeClass('stycky');
      }
    })



  });