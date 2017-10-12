
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

    /* image/video functionality on hover
    $('.single-product img').each(function() {
        let imgSrc = $(this).attr('src');

        $(this).hover(function() {
            $(this).attr('src', $(this).attr('src').replace(/\.jpg/, '.gif'));
            }, function() {
              $(this).attr('src', imgSrc);
        });

    });
    */

    // instagram feed
    var feed = new Instafeed({
        get: 'user',
        tagName: '1965815096',
        clientId: '393ac85ea21646a19db4b0a4b258add4'
    });
    feed.run();

});
