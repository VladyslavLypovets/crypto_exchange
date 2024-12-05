$(document).ready(function() {
    const getCoindImgSel = $('[data-get-coin-img]'),
    getCoindNameSel = $('[data-get-coin-name]'),
    getCoindNetworkSel = $('[data-get-coin-network]'),
    sendCoindImgSel = $('[data-send-coin-img]'),
    sendCoindNameSel = $('[data-send-coin-name]'),
    sendCoindNetworkSel = $('[data-send-coin-network]');

    // open crypto select
    $('[data-select]').click(function() {
        $(this).next().removeClass('d-none').addClass('open');
        $('[data-exchange-overlay]').addClass('open');
    });

    // open crypto network
    $('[data-crypto-item]').click(function(){
        $(this).toggleClass('coins-list_selected-active');
        $(this).next().toggleClass('d-none');
    });

    // click data-exchange-overlay
    $('[data-exchange-overlay]').click(function() {
        $('[data-select-list]').addClass('d-none');
        $(this).removeClass('open');
    });

    // select network
    $('[data-network]').click(function() {
        $('[data-select-list]').addClass('d-none');
        $('[data-exchange-overlay]').removeClass('open');
        selectNetwork(this);
    });

    // switch type
    $('.fixed-rate_text-container').click(function() {
        $('.fixed-rate_text-container').toggleClass('d-none');
    });

    // order block count animation
    const countTill = 812;
    let step = Math.round(countTill / 50);
    let index = 0;
    const interval = setInterval(() => {
        if (index === countTill) {
            clearInterval(interval);
        }
        index += step;
        if (index >= countTill) {
            index = countTill;
        }
        $('#order-block-count').text(index);
    }, 70);


    setTimeout(() => {
        loaded();
    }, 1000)

    // hide loader
    function loaded() {
        $('#exchange-loader').addClass('d-none');
        $('#exchange-form').removeClass('d-none');
    }

    // click on main button
    $('[data-main-button]').click(function(){
        window.location.href = './exchange.html'
    });

    // swap coins click
    $('[data-swap-coins]').click(function() {
        const timeImgSrc = sendCoindImgSel.attr('src'),
        timeImgAlt = sendCoindImgSel.attr('alt'),
        timeName = sendCoindNameSel.text(),
        timeNetwork = sendCoindNetworkSel.text();

        sendCoindImgSel.attr('src', getCoindImgSel.attr('src'));
        sendCoindImgSel.attr('alt', getCoindImgSel.attr('alt'));
        sendCoindNameSel.text(getCoindNameSel.text());
        sendCoindNetworkSel.text(getCoindNetworkSel.text());

        getCoindImgSel.attr('src', timeImgSrc);
        getCoindImgSel.attr('alt', timeImgAlt);
        getCoindNameSel.text(timeName);
        getCoindNetworkSel.text(timeNetwork);

    });

    // click on create an exchange button
    $('[data-create-exchange-button]').click(function(){
        // $('[data-step]').removeClass('active');
        // $('[data-step="2"]').addClass('active');
        // $('[data-exchange-id]').removeClass('d-none');
        fillSecondStepInfo();
        fillThirdStepInfo();
        // run time for 1 hour and 30 min
        runTimer(5400);
    });

    // click copy address
    $('[data-copy-button]').click(function () {
        const selector = $(this).data('copy-button');
        const text = $(`[${selector}]`).text();
        navigator.clipboard.writeText(text);
        $('[data-copy-tooltip]').removeClass('d-none');
        setTimeout(() => {
            $('[data-copy-tooltip]').addClass('hide');
            setTimeout(() => {$('[data-copy-tooltip]').addClass('d-none'); $('[data-copy-tooltip]').removeClass('hide');}, 500)
        }, 2000)
    });

    function fillSecondStepInfo() {
        $('[data-second-step-img]').attr('src', sendCoindImgSel.attr('src'));
        $('[data-second-step-img]').attr('alt', sendCoindImgSel.attr('alt'));
        $('[data-second-step-coin-code]').text(sendCoindNameSel.text());
        $('[data-second-step-network-code]').text(sendCoindNetworkSel.text());
        $('[data-second-step-send-amount]').text($('[data-send-input]').val() || '0.00');
    }

    function fillThirdStepInfo() {
        $('[data-third-step-send-img]').attr('src', sendCoindImgSel.attr('src'));
        $('[data-third-step-send-img]').attr('alt', sendCoindImgSel.attr('alt'));
        $('[data-third-step-send-coin-code]').text(sendCoindNameSel.text());
        $('[data-third-step-send-network-code]').text(sendCoindNetworkSel.text());
        $('[data-third-step-send-amount]').text($('[data-send-input]').val() || '0.00');


        $('[data-third-step-get-img]').attr('src', getCoindImgSel.attr('src'));
        $('[data-third-step-get-img]').attr('alt', getCoindImgSel.attr('alt'));
        $('[data-third-step-get-coin-code]').text(getCoindNameSel.text());
        $('[data-second-step-get-network-code]').text(getCoindNetworkSel.text());
        $('[data-third-step-get-amount]').text($('[data-get-input]').val() || '0.00');

    }

    function runTimer(timeLeft) {
        if (timeLeft > 0) {
            const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
            const minutes = Math.floor((timeLeft % 3600) / 60).toString().padStart(2, '0');
            const seconds = (timeLeft % 60).toString().padStart(2, '0');
            
            $('[data-status-timer]').text(`${hours}:${minutes}:${seconds}`);
            
            // Виклик функції через 1 секунду
            setTimeout(function () {
                runTimer(timeLeft - 1);
            }, 1000);
        } else {
            $('[data-status-timer]').text('00:00:00');
        }
    }

    function selectNetwork(self) {
        const field = $(self).parents('[data-select-list]').data('select-list'),
        newCoinCode = $(self).parents('[data-coin-info-code]').data('coin-info-code'),
        newNetworkCode = $(self).find('[data-network-code]').text(),
        imgAlt = $(self).parents('.coins-list_item').find('.image img').attr('alt'),
        imgSrc = $(self).parents('.coins-list_item').find('.image img').attr('src');


        if (field === 'get') {
            getCoindImgSel.attr('alt', imgAlt);
            getCoindImgSel.attr('src', imgSrc); 
            getCoindNameSel.text(newCoinCode);
            getCoindNetworkSel.text(newNetworkCode);
        } else {
            sendCoindImgSel.attr('alt', imgAlt);
            sendCoindImgSel.attr('src', imgSrc); 
            sendCoindNameSel.text(newCoinCode);
            sendCoindNetworkSel.text(newNetworkCode);
        }
    }
})