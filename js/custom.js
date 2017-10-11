
$(document).ready(function () {

    // banner
    const video = document.querySelector("video");
    if (window.matchMedia('(prefers-reduced-motion)').matches) {
      video.removeAttribute("autoplay");
      video.pause();
    }
    $('.vid-container').height($('#banner svg').height());

    window.addEventListener('resize', function () {
        $('.vid-container').height($('#banner svg').height());
    });

    // banner play video
    $('button.play').click(function() {
        $('.vid-container').css('height', '100%');
    });

    // button hovers
    $(".single-product .trans-btn").hover(function () {
        $(this).toggleClass("trans-btn");
     });

    $(".shop-more").hover(function () {
        $(this).toggleClass("trans-btn");
     });

    $('.single-product').each(function() {
        let imgSrc = $('.single-product img').attr('src');
        console.log(imgSrc);
    });

    /* image/video functionality on hover
    $('.shred img').hover(function() {
        $(this).attr('src', '../images/Shred_3.jpg');
        }, function() {
          $(this).attr('src', '/arena/images/Muscle-Armor_1.jpg');
    });*/

});
