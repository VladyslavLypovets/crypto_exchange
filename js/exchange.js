$(document).ready(function() {
    const defaultImgUrl = "./img/crypto/";
    const mode = "fixed";
    let send, get;
    // send crypto set by default
    let sendCrypto = {
        ...cryptoData[1],
        selected: true,
        availableTypes: cryptoData[1].availableTypes.map((type, index) => ({
            ...type,
            selected: index === 0
        }))
    }
    
    let cryptosDataSend = [];
    setSendCrypto(sendCrypto);
    setSendCryptosData();
    loaded();

    
    // set visible type
    $('.fixed-rate_text-container').addClass('d-none');
    $(`#${mode}`).removeClass('d-none');
    
    
    // switch type
    $('.fixed-rate_text-container').click(function() {
        $('.fixed-rate_text-container').toggleClass('d-none');
    })

    // input send blur logic
    $('[data-send-input]').blur(function() {
        if($(this).val()) {
            // todo send can be used in future
            send = $(this).val()
            $(this).addClass('has-value')
        } else {
            $(this).removeClass('has-value')
        }
    });

    // open send select
    $('[data-crypto-send-select]').click(function() {
        drawSelectData('data-crypto-send-select', sendCrypto, cryptosDataSend)
        $('[data-crypto-send-select-inner]').removeClass('d-none')
    })

    function drawSelectData(dataName, selectedCoin, cryptosData) {
        const selectInner = $(`[${dataName}-inner]`);
        drawSelectedBlock(selectInner, selectedCoin);
    }

    function drawSelectedBlock(selectInner, selectedCoin) {
        selectInner.find('[data-selected-img]').attr('src', defaultImgUrl + selectedCoin.img);
        selectInner.find('[data-selected-img]').attr('alt', selectedCoin.code);
        selectInner.find('[data-code]').text(selectedCoin.code);
        selectInner.find('[data-name]').text(selectedCoin.name);
        

    }


    function cutLongString(string) {
        if (string.length > 6) {
            return `${string.substring(0, 4)}..`; 
        }
        return string;
    }

    function loaded() {
        $('#exchange-loader').addClass('d-none');
        $('#exchange-form').removeClass('d-none');
    }

    function setSendCryptosData() {
        cryptosDataSend = cryptoData.map(crypto => ({
            ...crypto,
            selected: crypto.code === sendCrypto.code,
            availableTypes: crypto.availableTypes.map(type => ({
                ...type,
            }))
        })).filter((crypto) => !crypto.selected)
    }

    function setSendCrypto(crypto) {
        const selectedType = getSelectedType(crypto)
        $('[data-crypto-send-img]').attr('src', defaultImgUrl + crypto.img);
        $('[data-crypto-send-code]').text(cutLongString(crypto.code));
        $('[data-crypto-send-type]').text(cutLongString(selectedType.name));
    }

    function getSelectedType(crypto) {
        return crypto.availableTypes.find(type => type.selected)
    }

});