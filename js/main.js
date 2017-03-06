$(document).ready(function () {
    $('.reg_form').click(function (e) {
        $('.form-area').css("margin-top", "60px");
        e.preventDefault();
        $('#log_from').hide();
        $('#reg_form').fadeIn('slow');
    });
    $('.log_form').click(function (e) {
        $('.form-area').css("margin-top", "100px");
        e.preventDefault();
        $('#reg_form').hide();
        $('#log_from').fadeIn('slow');
    });
});