export default {
	pageLoad(params){
		if(inputUser.text.length > 3){
			showModal('loaderModal')
			settings.setStore();
			getUserByFilter.run().then(() => {
				getCards.run();
				getUserDetailsByEmail.run().then(() => {
					this.runQueries();
					showAlert('User Found', 'success')
					closeModal('loaderModal')
				})
			}).catch(() => {
				showAlert(getUserByFilter.data.message, 'error')
				closeModal('loaderModal')
			});
		} else if(params && params.submit) {
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
	async runQueries(){
		getTotalCashback.run()
		getTotalCashbackCount.run()

		// let res = await action.getTotalTxnCount()
		// console.log('res', res)
		// if(res.type == 'error'){
			// showAlert(res.data.message)
		// }
	},
	getFilterData(){
		return getUserByFilter.data?.data?.filter_data
	},
	getPersonalDetails(){		
		return getUserByFilter.data.data.personal_details
	},
	getMerchants(){
		let result = ''
		let mer = getUserDetailsByEmail.data.data.selected_merchants
		mer.forEach(m => {
			result += '<b>' + m.name + '</b>' + ': (' + moment(m.added_on).format('Do MMMM, YYYY') + ')' + '\n'
		});
		return result
	},
	getCardDropdown(){
		let cards = getCards.data.data
		let result = [];
		const statusMap = {1: 'ACTIVE', 2: 'INACTIVE', 3: 'TERMINATED'}
		cards.forEach((card, index) => {
			let res = {
				"label": `XXXX ${card.number} - ${card.type} ( ${card.sub_type ? card.sub_type : 'basic'} ) - ${statusMap[card.status]}`,
				"value": `${index}`,
			}
			result.push(res)
		})
		return result
	},
	getSelectedCardDetails(){
		let index = selectedCard.selectedOptionValue
		let res = getCards?.data?.data && getCards?.data?.data[index]
		// if(res.sub_type == 'metal'){
			// trackingLinkLabel.setVisibility(true)
		// } else {
			// trackingLinkLabel.setVisibility(false)
		// }
		return res
	},
	getShippingInfo(){
		let address = this.getSelectedCardDetails()?.shipping_info?.address
		if(address){
			return {
				status: this.getSelectedCardDetails().shipping_info.status,
				address: address.address_street + ' ' + address.address_city + ', ' + address.address_subdivision + ', ' + address.address_country_code + ' ' + address.address_postal_code
			}
		}
	},
	getPrefences(){
		return this.getSelectedCardDetails()?.preferences
	},
	getOverviewObject(){
		let res = {
			"cashback_earned": {
				"body": getTotalCashback?.data && getTotalCashback.data[0] && getTotalCashback.data[0].total_cashback ? utils.formatCurrency(getTotalCashback.data[0].total_cashback.toFixed(2)) : '$0.00',
				"sub_body": getTotalCashbackCount?.data && getTotalCashbackCount?.data[0] && getTotalCashbackCount.data[0].total_txns ? `${getTotalCashbackCount.data[0].total_txns} transactions` : '0 transactions',
			},
			"foreign_transactions": {
				"body": this.getPrefences()?.allow_foreign_transactions ?  this.getPrefences().allow_foreign_transactions : '',
			},
		}

		return res
	}
}