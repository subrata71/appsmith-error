export default {
	setStore: () => {        
		const data = {
			inputSelect: inputSelect.selectedOptionValue,
			inputValue: inputUser.text || ''
		}
		storeValue('inputData', data, false)
	},
	getInputData: () => {
		return appsmith.store.inputData || {inputSelect: 'email', inputValue: ''}			
	},
	getCryptoTemplate () {
		let res = [
			{
				short_name: "BTC",
				long_name: 'Bitcoin',
				logo: 'https://cdn.juno.finance/native-coins/BTC%403x.png',
				data: {}
			},
			{
				short_name: "ETH",
				long_name: 'Ethereum',
				logo: 'https://cdn.juno.finance/native-coins/ETH%403x.png',
				data: {}
			},
			{
				short_name: "USDT",
				long_name: 'Tether',
				logo: 'https://cdn.juno.finance/native-coins/USDT%403x.png',
				data: {}
			},
			{
				short_name: "SOL",
				long_name: 'Solana',
				logo: 'https://cdn.juno.finance/native-coins/SOL%403x.png',
				data: {}
			},
			{
				short_name: "DOGE",
				long_name: 'Dogecoin',
				logo: 'https://cdn.juno.finance/native-coins/DOGE%403x.png',
				data: {}
			},
			{
				short_name: "SHIB",
				long_name: 'Shiba Inu',
				logo: 'https://cdn.juno.finance/native-coins/SHIB%403x.png',
				data: {}
			},
			{
				short_name: "USDC",
				long_name: 'USD Coin',
				logo: 'https://cdn.juno.finance/native-coins/USDC%403x.png',
				data: {}
			},
			{
				short_name: "BUSD",
				long_name: 'Binance USD',
				logo: 'https://cdn.juno.finance/native-coins/BUSD%403x.png',
				data: {}
			},
			{
				short_name: "MATIC",
				long_name: 'Polygon',
				logo: 'https://cdn.juno.finance/native-coins/MATIC%403x.png',
				data: {}
			},
			{
				short_name: "MUSDC",
				long_name: 'Polygon USDC',
				logo: 'https://cdn.juno.finance/native-coins/MUSDC%403x.png',
				data: {}
			},
			{
				short_name: "MATIC.ETH",
				long_name: 'Polygon',
				logo: 'https://cdn.juno.finance/native-coins/MATIC.ETH%403x.png',
				data: {}
			},
			{
				short_name: "ADA",
				long_name: "Cardano",
				logo: 'https://cdn.juno.finance/native-coins/ADA%403x.png',
				data: {}
			},
			{
				short_name: "XLM",
				long_name: 'Stellar',
				logo: 'https://cdn.juno.finance/native-coins/XLM%403x.png',
				data: {}
			},
			{
				short_name: "SUSDC",
				long_name: 'Stellar USDC',
				logo: 'https://cdn.juno.finance/native-coins/SUSDC%403x.png',
				data: {}
			},
			{
				short_name: "LTC",
				long_name: 'Litecoin',
				logo: 'https://cdn.juno.finance/native-coins/LTC%403x.png',
				data: {}
			},
			{
				short_name: "LINK",
				long_name: 'Chainlink',
				logo: 'https://cdn.juno.finance/native-coins/LINK%403x.png',
				data: {}
			},
			{
				short_name: "AVAX",
				long_name: 'Avalanche',
				logo: 'https://cdn.juno.finance/native-coins/AVAX%403x.png',
				data: {}
			},
			{
				short_name: "MANA",
				long_name: 'Decentraland',
				logo: 'https://cdn.juno.finance/native-coins/MANA%403x.png',
				data: {}
			},
			{
				short_name: "AAVE",
				long_name: 'Aave',
				logo: 'https://cdn.juno.finance/native-coins/AAVE%403x.png',
				data: {}
			},
			{
				short_name: "DAI",
				long_name: 'Dai',
				logo: 'https://cdn.juno.finance/native-coins/DAI%403x.png',
				data: {}
			},
			{
				short_name: "ALGO",
				long_name: 'Algorand',
				logo: 'https://cdn.juno.finance/native-coins/ALGO%403x.png',
				data: {}
			},
			{
				short_name: "APE",
				long_name: 'Apecoin',
				logo: 'https://cdn.juno.finance/native-coins/APE%403x.png',
				data: {}
			},
			{
				short_name: "BAT",
				long_name: 'Basic Access Token',
				logo: 'https://cdn.juno.finance/native-coins/BAT%403x.png',
				data: {}
			},
			{
				short_name: "DOT",
				long_name: 'Polkadot',
				logo: 'https://cdn.juno.finance/native-coins/DOT%403x.png',
				data: {}
			},
			{
				short_name: "HBAR",
				long_name: 'Hedera',
				logo: 'https://cdn.juno.finance/native-coins/HBAR%403x.png',
				data: {}
			},
			{
				short_name: "ENJ",
				long_name: 'Enjin Coin',
				logo: 'https://cdn.juno.finance/native-coins/ENJ%403x.png',
				data: {}
			},
			{
				short_name: "UNI",
				long_name: 'Uniswap',
				logo: 'https://cdn.juno.finance/native-coins/UNI%403x.png',
				data: {}
			},
			{
				short_name: "FTM",
				long_name: 'Fantom',
				logo: 'https://cdn.juno.finance/native-coins/FTM%403x.png',
				data: {}
			},
			{
				short_name: "COMP",
				long_name: 'Compound',
				logo: 'https://cdn.juno.finance/native-coins/COMP%403x.png',
				data: {}
			},
			{
				short_name: "BCH",
				long_name: 'Bitcoin Cash',
				logo: 'https://cdn.juno.finance/native-coins/BCH%403x.png',
				data: {}
			},
			{
				short_name: "EGLD",
				long_name: 'MultiversX / Elrond',
				logo: 'https://cdn.juno.finance/native-coins/EGLD%403x.png',
				data: {}
			},
			{
				short_name: "KNC",
				long_name: 'Kyber Network',
				logo: 'https://cdn.juno.finance/native-coins/KNC%403x.png',
				data: {}
			},
			{
				short_name: "EOS",
				long_name: 'EOS',
				logo: 'https://cdn.juno.finance/native-coins/EOS%403x.png',
				data: {}
			},
			{
				short_name: "PAXG",
				long_name: 'PAX Gold ',
				logo: 'https://cdn.juno.finance/native-coins/PAXG%403x.png',
				data: {}
			},
			{
				short_name: "MKR",
				long_name: 'Maker',
				logo: 'https://cdn.juno.finance/native-coins/MKR%403x.png',
				data: {}
			},
			{
				short_name: "WBTC",
				long_name: 'Wrapped Bitcoin',
				logo: 'https://cdn.juno.finance/native-coins/WBTC%403x.png',
				data: {}
			},
			{
				short_name: "OMG",
				long_name: 'OMG Network',
				logo: 'https://cdn.juno.finance/native-coins/OMG%403x.png',
				data: {}
			},
			{
				short_name: "ZRX",
				long_name: '0x',
				logo: 'https://cdn.juno.finance/native-coins/ZRX%403x.png',
				data: {}
			},
			{
				short_name: "XRP",
				long_name: 'Ripple',
				logo: 'https://cdn.juno.finance/native-coins/XRP%403x.png',
				data: {}
			},
			{
				short_name: "XTZ",
				long_name: 'Tezos',
				logo: 'https://cdn.juno.finance/native-coins/XTZ%403x.png',
				data: {}
			},
			{
				short_name: "USDC.AVAX",
				long_name: 'USDC (Avalanche)',
				logo: 'https://cdn.juno.finance/native-coins/USDC.AVAX%403x.png',
				data: {}
			},
		]
		return res
	}
}