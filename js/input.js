$(document).ready(function() {
    $('.text-input input').blur(function() {
        if ($(this).val()) {
            $(this).addClass('has-value')
        } else {
            $(this).removeClass('has-value')
        }
    })

    // email validation
    $('[data-email]').keydown(function() {
        const value =  $(this).val();
        const stateSel = $(this).parents('.input-state')
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(value)) {
            stateSel.addClass('error');
        } else {
            stateSel.removeClass('error');
        }
    })
})