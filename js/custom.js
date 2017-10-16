
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

    // image/video functionality on hover
    $('.single-product img').each(function() {
        let imgClass = $(this).class();
        console.log(imgClass);


    });


});
