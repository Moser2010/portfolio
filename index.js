$(document).ready(function() {
    $(".About").click(function() {
        $("#bgvid, .position").css('display', 'none');
        $("#About").css('display', 'block');
        $('.videoBG').css('display', 'none')


    });
    $('.Home').click(function() {
        $("#bgvid, .position").css('display', 'block');
        $('#About').css('display', 'none');
        $('.videoBG').css('display', 'block')
        $("#bgvid")[0].autoplay = true;
    });
    $(".eduButton").click(function() {
        $('.me').css('display', 'none')
        $('.edu').css('display', 'block')
        $('.exp').css('display', 'none')
    });
    $(".meButton").click(function() {
        $('.me').css('display', 'block')
        $('.edu').css('display', 'none')
        $('.exp').css('display', 'none')
    });
    $(".expButton").click(function() {
        $('.me').css('display', 'none')
        $('.edu').css('display', 'none')
        $('.exp').css('display', 'block')
    });
});
$(document).ready(function() {
    $(window).resize(function() {

        if ($(window).width() >= 501) {
            
            // is mobile device

        }

    });
});;                