$(document).ready(function() {
    // open theme dropdown
    $('[data-contact-us-theme-dropdown-open]').click(function() {
        $('[data-contact-us-theme-list]').toggleClass('d-none');
    });

    // chose element from theme dropdown
    $('[data-contact-us-theme-item]').click(function() {
        const text = $(this).text();
        $('[data-contact-us-theme-value]').text(text);
        $('[data-contact-us-theme-list]').addClass('d-none');
    });
})