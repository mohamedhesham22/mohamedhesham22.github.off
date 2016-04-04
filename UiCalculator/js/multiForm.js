$(document).ready(function () {

    $('.next').click(function () {
        $('.current').removeClass('current').hide().next().show().addClass('current');
        $('#progressbar li.active').next().addClass('active');

    
    });
});