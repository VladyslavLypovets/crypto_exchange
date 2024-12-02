$(document).ready(function(){
    // toggle lang dropdown
    $('#lang').click(function(){
        $('#lang-list').toggleClass('d-none');
        $(this).find('.selected-lang-text').toggleClass('selected-lang-text-open');
    });

    // change active lang
    $('#lang-list .item').click(function() {
        const activeLang = $(this).data('value');
        const activeLangText = $(this).find('.lang-text').text();
        $('#lang-list .item').removeClass('d-none');
        $(this).addClass('d-none');
        $('#active-lang-text').text(activeLangText);
        $('#active-lang-text-mobile').text(activeLang);
        $('#active-lang-img').attr('src', `./img/${activeLang}.svg`);
    });

    // cookies banner logic
    $('#agree-use-cookies').click(function () {
        localStorage.setItem('useCookies', true);
        $('#cookies-banner').addClass('d-none');
    });

    // initial check use cookies in localstorage
    if(!localStorage.getItem('useCookies')) {
        $('#cookies-banner').removeClass('d-none');
    }

    // close support block
    $('#support-block .close').click(function() {
        $('#support-block').addClass('d-none');
    })

    // order block count animation
    const countTill = cryptoData.length;
    let step = Math.round(countTill / 50);
    let index = 0;
    const interval = setInterval(() => {
        const difference = countTill - index;
        if (index === countTill) {
            clearInterval(interval);
        }
        index += step;
        if (index >= countTill) {
            index = countTill;
        }
        $('#order-block-count').text(index);
    }, 70);
});