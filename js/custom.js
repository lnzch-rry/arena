
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
    $('.single-product .image').each(function() {
        let imgClass = $(this).attr('class').split(' ')[1];
        $(this).css("background-image", "url(/arena/images/" + imgClass + ".jpg)");

        if (imgClass != 'night') {
            $(this).hover(function() {
                $(this).css("background-image", "url(/arena/images/" + imgClass + ".gif)");
                }, function() {
                  $(this).css("background-image", "url(/arena/images/" + imgClass + ".jpg)");
            });
        }

    });

    // instagram feed
    var feed = new Instafeed({
        get: 'user',
        userId: '1965815096',
        resolution: 'standard_resolution',
        limit: '4',
        accessToken: '212631272.393ac85.2f0f841481004e2ab4b0f53c064dca03',
        template: '<a href="{{link}}" class="{{orientation}}" target="_blank"><img src="{{image}}" /></a>'
    });
    feed.run();

});
