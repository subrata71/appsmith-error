export default {
  pageLoad: (params) => {
		if(inputUser.text.length > 3){
			showModal('loaderModal')
			settings.setStore();
			getUserByFilter.run().then(()=> {
				getBalance.run().then(() => {
					this.runQueries()
					showAlert('User Found', 'success')
					closeModal('loaderModal')
				}).catch(()=> {
					closeModal('loaderModal')
					showAlert(getBalance.data.message, 'error')
				})
			})
		} else if(params && params.submit){
			showAlert('Please enter correct input', 'warning')
		}		
	},
	setLoggedInUser () {		
		//ref: https://docs.appsmith.com/reference/appsmith-framework/widget-actions/store-value
		const storeObj = {
			email: inputSelect.selectedOptionValue == 'email'?inputUser.text:appsmith.store.global_search?.email,
			zh_id: inputSelect.selectedOptionValue == 'zh_id'?inputUser.text:appsmith.store.global_search?.zh_id,
			phone: inputSelect.selectedOptionValue == 'phone'?inputUser.text:appsmith.store.global_search?.phone
		}
		storeValue('global_search', storeObj, false)
	},
	runQueries(){
		this.getPortfolioDateFiltered();
		this.getPortfolioData();
		this.getCryptoList();
	},
	getFilterData(){
		return getUserByFilter.data?.data?.filter_data
	},
	getPersonalDetails(){		
		return getUserByFilter.data.data.personal_details
	},
	getPortfolioData(){
		let portfolio = getBalance.data.data?.crypto_account?.zero_hash?.portfolio
		let res = []
		res = settings.getCryptoTemplate()
		for(let item in res){
			res[item]['address'] = portfolio[res[item].short_name]?.address || ''
			res[item]['balance_usd'] = portfolio[res[item].short_name]?.balance_usd || 0
			res[item]['balance'] = portfolio[res[item].short_name]?.balance || 0
		}
		return res
	},
	getCardDropdown(){
		let name = Object.keys(getBalance.data.data.external_wallets_v2)
		let result = [];
		name.forEach((card, index) => {
			let res = {
				"label": `${name[index]}`,
				"value": `${name[index]}`
			}
			result.push(res)
		})
		return result
	},
	getSelectedWalletAddress(){
		return getBalance.data.data?.external_wallets_v2[selectedCryptoExternalAddress.selectedOptionValue]
	},
	getPortfolioDateFiltered(){
		let res = this.getPortfolioData()
		res = res.filter(item => item.balance_usd > 0)
		postWindowMessage(res, 'portfolioIframe', '*')
		return res
	},
	getCryptoList(){
		let res = []
		for(let item of settings.getCryptoTemplate()){
			let temp = {
				label: `${item.long_name} (${item.short_name})`,
				value: item.short_name,
			}
			res.push(temp)
		}
		return res
	}
}