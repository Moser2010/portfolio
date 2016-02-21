$(document).ready(function() {
    $(".About").click(function() {
        $("#bgvid, .position").css('display', 'none');
        $("#About").css('display', 'block');
        $('.videoBG').css('display', 'none')
        $('.contactPage').css('display', 'none')
    });
    $('.Home').click(function() {
        $("#bgvid, .position").css('display', 'block');
        $('#About').css('display', 'none');
        $('.videoBG').css('display', 'block')
        $('.contactPage').css('display', 'none')
        $("#bgvid")[0].autoplay = true;
    });
    $(".eduButton").click(function() {
        $('.me').css('display', 'none')
        $('.edu').css('display', 'block')
        $('.exp').css('display', 'none')
        $('.contactPage').css('display', 'none')
    });
    $(".meButton").click(function() {
        $('.me').css('display', 'block')
        $('.edu').css('display', 'none')
        $('.exp').css('display', 'none')
        $('.contactPage').css('display', 'none')
    });
    $(".expButton").click(function() {
        $('.me').css('display', 'none')
        $('.edu').css('display', 'none')
        $('.contactPage').css('display', 'none')
        $('.exp').css('display', 'block')
    });
    $('.contactButton').click(function() {
       $("#bgvid, .position").css('display', 'none');
        $("#About").css('display', 'none');
        $('.videoBG').css('display', 'none')
        $('.contactPage').css('display', 'none')
        $('.contactPage').css('display', 'block')
    })
});

$(window).resize(function() {
    var width = $(window).width();
    if (width < 960) {
        //Do Something
    }
    else {
        //Do Something Else
    }
});