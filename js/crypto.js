const cryptoData = [
    {
        name: "Bitcoin",
        code: "BTC",
        img: "btc.png",
        availableTypes: [
            {
                name: "Bitcoin",
                code: "BTC"
            },
            {
                name: "Bitcoin Cash",
                code: "BCH"
            },
            {
                name: "Wrapped Bitcoin",
                code: "WBTC"
            }
        ]
    },
    {
        name: "Ethereum",
        code: "ETH",
        img: "eth.png",
        availableTypes: [
            {
                name: "Ethereum",
                code: "ETH"
            },
            {
                name: "Ethereum 2.0",
                code: "ETH2"
            },
            {
                name: "Wrapped Ethereum",
                code: "WETH"
            }
        ]
    },
    {
        name: "Tether",
        code: "USDT",
        img: 'usdt.png',
        availableTypes: [
            {
                name: "Tether (ERC-20)",
                code: "USDT"
            },
            {
                name: "Tether (TRC-20)",
                code: "USDT_TRC20"
            },
            {
                name: "Tether (BEP-20)",
                code: "USDT_BEP20"
            }
        ]
    },
    {
        name: "Binance Coin",
        code: "BNB",
        img: "bnb.png",
        availableTypes: [
            {
                name: "Binance Coin (BEP-20)",
                code: "BNB"
            },
            {
                name: "Binance Coin (ERC-20)",
                code: "BNB_ERC20"
            },
            {
                name: "Binance Smart Chain Native",
                code: "BNB_NATIVE"
            }
        ]
    },
    {
        name: "Cardano",
        code: "ADA",
        img: "ada.png",
        availableTypes: [
            {
                name: "Cardano",
                code: "ADA"
            },
            {
                name: "Cardano Native Token",
                code: "ADA_NATIVE"
            }
        ]
    },
    {
        name: "Solana",
        code: "SOL",
        img: "sol.png",
        availableTypes: [
            {
                name: "Solana",
                code: "SOL"
            },
            {
                name: "Wrapped Solana",
                code: "WSOL"
            }
        ]
    },
    {
        name: "Ripple",
        code: "XRP",
        img: "btc.png",
        availableTypes: [
            { name: "Ripple", code: "XRP" },
            { name: "Ripple Native Token", code: "XRP_NATIVE" }
        ]
    },
    {
        name: "Polkadot",
        code: "DOT",
        img: "btc.png",
        availableTypes: [
            { name: "Polkadot", code: "DOT" },
            { name: "Polkadot Parachain Token", code: "DOT_PARACHAIN" }
        ]
    },
    {
        name: "Chainlink",
        code: "LINK",
        img: "btc.png",
        availableTypes: [
            { name: "Chainlink", code: "LINK" },
            { name: "Chainlink Wrapped Token", code: "WLINK" }
        ]
    },
    {
        name: "Litecoin",
        code: "LTC",
        img: "btc.png",
        availableTypes: [
            { name: "Litecoin", code: "LTC" },
            { name: "Litecoin Wrapped Token", code: "WLTC" }
        ]
    },
    {
        name: "Stellar",
        code: "XLM",
        img: "btc.png",
        availableTypes: [
            { name: "Stellar", code: "XLM" },
            { name: "Stellar Lumens", code: "XLM_LUMENS" }
        ]
    },
    {
        name: "Tron",
        code: "TRX",
        img: "btc.png",
        availableTypes: [
            { name: "Tron", code: "TRX" },
            { name: "Tron Wrapped Token", code: "WTRX" }
        ]
    },
    {
        name: "Avalanche",
        code: "AVAX",
        img: "btc.png",
        availableTypes: [
            { name: "Avalanche", code: "AVAX" },
            { name: "Avalanche C-Chain", code: "AVAX_CCHAIN" }
        ]
    },
    {
        name: "Cosmos",
        code: "ATOM",
        img: "btc.png",
        availableTypes: [
            { name: "Cosmos", code: "ATOM" },
            { name: "Cosmos Hub", code: "ATOM_HUB" }
        ]
    },
    {
        name: "Dogecoin",
        code: "DOGE",
        img: "btc.png",
        availableTypes: [
            { name: "Dogecoin", code: "DOGE" },
            { name: "Wrapped Dogecoin", code: "WDOGE" }
        ]
    },
    {
        name: "Algorand",
        code: "ALGO",
        img: "btc.png",
        availableTypes: [
            { name: "Algorand", code: "ALGO" },
            { name: "Algorand Standard Asset", code: "ALGO_ASA" }
        ]
    },
    {
        name: "VeChain",
        code: "VET",
        img: "btc.png",
        availableTypes: [
            { name: "VeChain", code: "VET" },
            { name: "VeChainThor Token", code: "VTHO" }
        ]
    },
    {
        name: "Tezos",
        code: "XTZ",
        img: "btc.png",
        availableTypes: [
            { name: "Tezos", code: "XTZ" },
            { name: "Tezos Smart Contract Token", code: "XTZ_SMART" }
        ]
    },
    {
        name: "Aave",
        code: "AAVE",
        img: "btc.png",
        availableTypes: [
            { name: "Aave", code: "AAVE" },
            { name: "Aave Interest Bearing Token", code: "AAVE_IB" }
        ]
    },
    {
        name: "Uniswap",
        code: "UNI",
        img: "btc.png",
        availableTypes: [
            { name: "Uniswap", code: "UNI" },
            { name: "Uniswap Governance Token", code: "UNI_GOV" }
        ]
    },
    {
        name: "Filecoin",
        code: "FIL",
        img: "btc.png",
        availableTypes: [
            { name: "Filecoin", code: "FIL" },
            { name: "Wrapped Filecoin", code: "WFIL" }
        ]
    },
    {
        name: "Zcash",
        code: "ZEC",
        img: "btc.png",
        availableTypes: [
            { name: "Zcash", code: "ZEC" },
            { name: "Zcash Shielded Token", code: "ZEC_SHIELDED" }
        ]
    },
    {
        name: "PancakeSwap",
        code: "CAKE",
        img: "btc.png",
        availableTypes: [
            { name: "PancakeSwap", code: "CAKE" },
            { name: "PancakeSwap Syrup Pool Token", code: "CAKE_POOL" }
        ]
    },
    {
        name: "Elrond",
        code: "EGLD",
        img: "btc.png",
        availableTypes: [
            { name: "Elrond", code: "EGLD" },
            { name: "Wrapped Elrond", code: "WEGLD" }
        ]
    },
    {
        name: "Theta Network",
        code: "THETA",
        img: "btc.png",
        availableTypes: [
            { name: "Theta", code: "THETA" },
            { name: "Theta Fuel", code: "TFUEL" }
        ]
    },
    {
        name: "Hedera",
        code: "HBAR",
        img: "btc.png",
        availableTypes: [
            { name: "Hedera", code: "HBAR" },
            { name: "Hedera Token Service", code: "HBAR_HTS" }
        ]
    },
    {
        name: "Neo",
        code: "NEO",
        img: "btc.png",
        availableTypes: [
            { name: "Neo", code: "NEO" },
            { name: "Gas (Neo)", code: "GAS" }
        ]
    },
    {
        name: "Kusama",
        code: "KSM",
        img: "btc.png",
        availableTypes: [
            { name: "Kusama", code: "KSM" },
            { name: "Kusama Parachain Token", code: "KSM_PARACHAIN" }
        ]
    },
    {
        name: "Quant",
        code: "QNT",
        img: "btc.png",
        availableTypes: [
            { name: "Quant", code: "QNT" },
            { name: "Quant Utility Token", code: "QNT_UTILITY" }
        ]
    },
    {
        name: "Decentraland",
        code: "MANA",
        img: "btc.png",
        availableTypes: [
            { name: "Decentraland", code: "MANA" },
            { name: "Decentraland Land Token", code: "MANA_LAND" }
        ]
    },
    {
        name: "The Sandbox",
        code: "SAND",
        img: "btc.png",
        availableTypes: [
            { name: "The Sandbox", code: "SAND" },
            { name: "Sandbox Game Token", code: "SAND_GAME" }
        ]
    },
    {
        name: "Axie Infinity",
        code: "AXS",
        img: "btc.png",
        availableTypes: [
            { name: "Axie Infinity", code: "AXS" },
            { name: "Axie Shard Token", code: "AXS_SHARD" }
        ]
    },
    {
        name: "Chiliz",
        code: "CHZ",
        img: "btc.png",
        availableTypes: [
            { name: "Chiliz", code: "CHZ" },
            { name: "Fan Token", code: "CHZ_FAN" }
        ]
    },
    {
        name: "Curve DAO",
        code: "CRV",
        img: "btc.png",
        availableTypes: [
            { name: "Curve DAO", code: "CRV" },
            { name: "Curve Liquidity Token", code: "CRV_LIQUIDITY" }
        ]
    },
    {
        name: "Enjin Coin",
        code: "ENJ",
        img: "btc.png",
        availableTypes: [
            { name: "Enjin Coin", code: "ENJ" },
            { name: "Enjin Multiverse Token", code: "ENJ_MULTIVERSE" }
        ]
    },
    {
        name: "Maker",
        code: "MKR",
        img: "btc.png",
        availableTypes: [
            { name: "Maker", code: "MKR" },
            { name: "Dai Stablecoin Governance", code: "MKR_DAI" }
        ]
    }
];
