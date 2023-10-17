export default {
	globalSkeleton: 'Fetching data',
	async pageLoad(params) {
		settings.setStore();
		if(inputUser.text.length > 3){
			showModal('loaderModal');
			await api.getUserOverview();
			if(this.getFiatAccount()?.partner?.user_status == 'CLOSED'){
				 closeAccountButton.setDisabled(true);
			} else {
				 closeAccountButton.setDisabled(false);
			}
			if(!api.userOverviewData?.error){
				showAlert('User Found Successfully', 'success');
				this.runQueries();
			}
			closeModal('loaderModal')
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
		let promises = [api.getFlaggingHistory(), api.getPiiUpdateHistory(), query.getDayCountOverHundred(), query.getTotalVolumeTxns(), query.getNegativeBalance(), query.getTransactionDisputes(), query.getDisputesInfo(), query.getChildReferrals(), query.getAstraCardDetails(), query.getCurrentLocation(), query.getLocationData(), query.getLoggedInDevices(), query.getTotalTradingRevenue(), query.getJ2JSent(), query.getJ2JReceived(), query.getP2pIncoming(), query.getP2pOutgoing(), query.getPiiUpdateBeforeFirstTxn(), query.getPiiUpdateCount(), query.getCancelledTransactionsPercent(), query.getIpHoppingUser(), query.getProvisionalCredit(), query.getPositiveStrike()]

		await Promise.all(promises);
	},
	getData(){
		return getUserOverview.data?.data
	},
	getPersonalDetails(){		
		return getUserOverview.data?.data?.personal_details
	},
	getAccountDetails(){
		return getUserOverview.data?.data?.account_details
	},
	getFiatAccount(){
		return getUserOverview?.data?.data?.account_details?.fiat && getUserOverview?.data?.data?.account_details?.fiat[0]
	},
	getCryptoAccount(){
		return getUserOverview?.data?.data?.account_details?.crypto && getUserOverview?.data?.data?.account_details.crypto[0]
	},
	getFlaggingInfo(){
		return getUserOverview?.data?.data?.account_details?.flagging_info
	},
	getLifetimeInterestEarned(){
		return getUserOverview.data?.data?.account_details?.lifetime_interest_earned
	},
	getTierInfo(){
		return getUserOverview?.data?.data?.subscription
	},
	getThirdPartyScores(){
		return getUserOverview.data.data.third_party_scores
	},
	getReferrals(){
		return getUserOverview.data.data.referrals
	},
	getInterestEarning(){
		return getUserOverview?.data?.data?.interest_earning
	},
	getLoggedInDevices(){
		return getUserOverview.data.data.logged_in_devices
	},
	getGraphData(){
		let temp = getUserOverview.data.data.interest_earning?.last_12_months?.monthly_breakdown || []
		let res = temp.reverse()
		return res
	},
	getTwoFaData(){
		let type = lib.getData().device_info.two_fa
		let img = 'https://cdn.juno.finance/crm/edit-2fa-method.png'
		
		if(type == 'SMS'){
			return {img: '', data: type}
		} else {
			return {img: img, data: type}
		}
	},

	//THIRD PARTY SCORES LABEL
	getMedianHouseholdIncome(){
		let householdIncome = this.getThirdPartyScores()?.median_household_income

		if(!householdIncome) return ''
		if(householdIncome > 55000){
			return utils.formatCurrency(householdIncome)
		} else {
			return `<div style="display: flex;">
            <span style="align-self: center;">${utils.formatCurrency(householdIncome)} </span>
            <span style="margin-left:4px; height:10px; max-width:10px; background-color:#D13B3B; border-radius:50%; display:inline-block; align-self:center;"> </span>
        </div>`
		}
	},
	getSentilinkTheftScore(){
		let theftScore = this.getThirdPartyScores()?.sentilink?.scores?.theft_score
		if(!theftScore) return ''
		if(theftScore < 150){
			return theftScore
		} else {
			return `<div style="display: flex;">
            <span style="align-self: center;">${theftScore} </span>
            <span style="margin-left:4px; height:10px; max-width:10px; background-color:#D13B3B; border-radius:50%; display:inline-block; align-self:center;"> </span>
        </div>`
		}
	},
	getSynapseIdScore(){
		let score = this.getThirdPartyScores()?.synapse?.id_score
		if(!score) return ''
		if(score > 0.2){
			return score
		} else {
			return `<div style="display: flex;">
            <span style="align-self: center;">${score} </span>
            <span style="margin-left:4px; height:10px; max-width:10px; background-color:#D13B3B; border-radius:50%; display:inline-block; align-self:center;"> </span>
        </div>`
		}
	},
	getCreditScoreJS(){
		let score = getUserOverview.data.data.third_party_scores.methodfi?.credit_score?.score || null, img = '', newScore = ''
		if(!score){
			img = 'https://cdn.juno.finance/crm/generate-credit-score.png'
			newScore = ''
		} else {
			if(score > 600){
				newScore = score
			} else {
				newScore = `<div style="display: flex;">
							<span style="align-self: center;">${score} </span>
							<span style="margin-left:4px; height:10px; max-width:10px; background-color:#D13B3B; border-radius:50%; display:inline-block; align-self:center;"> </span>
					</div>`
			}
		} 
		return {img: img, score: newScore }
	},
	getCountryCount(){
		let country = getLocationData.data && getLocationData.data[0] && getLocationData.data[0].unique_country_count || 0
		if(country < 2){
			return country
		} else {
			return `<span style="align-self: center; color:#D13B3B">${country} </span>`
		}
	},
	getJunoToJunoTransfers(){
		let txnSent = Array.isArray(getJ2JSent.data) ? getJ2JSent.data.length: 0
		let txnReceived = Array.isArray(getJ2JReceived.data) ? getJ2JReceived.data.length : 0
		let res = {}
		if(txnSent > 3){
			res['sent'] = `<span style="align-self: center; color:#D13B3B">${txnSent}</span>`
		} else {
			res['sent'] = txnSent
		}

		if(txnReceived > 3){
			res['received'] = `<span style="align-self: center; color:#D13B3B">${txnReceived}</span>`
		} else {
			res['received'] = txnReceived
		}
		return res
	},
	getCopyImage(){
		return '<img style="width:18px; height: 18px;" src="https://cdn.juno.finance/spending-account/copy.svg" alt="">'
	},
	getUserStatusBreakdown(){
		let res = this.getFiatAccount().partner.user_status
		res = res.split("-");
		console.log(res)
		return res
	},
	async initiateManualKYCActions(){
		if(manualKYCAction.selectedOptionValue == 'push-to-synapse'){
			await api.pushToSynapse();
			// pushToSynapse.run().then(() => {
				// showAlert(pushToSynapse.data.message, 'success');
			// }).catch(() => {
				// showAlert(pushToSynapse.data.message + ' (Error Code: ' + pushToSynapse.data.error_code + ')', 'error');
			// });
		} else if(manualKYCAction.selectedOptionValue == 'reinitiate-kyc'){
			await api.reinitUser();
			// reinitUser.run().then(() => {
				// showAlert(reinitUser.data.message, 'success');
			// }).catch(() => {
				// showAlert(reinitUser.data.message + ' (Error Code: ' + reinitUser.data.error_code + ')', 'error');
			// });
		} else if(manualKYCAction.selectedOptionValue == 'reject'){
			await api.rejectUser();
			// rejectUser.run().then(() => {
				// showAlert(rejectUser.data.message, 'success');
			// }).catch(() => {
				// showAlert(rejectUser.data.message + ' (Error Code: ' + rejectUser.data.error_code + ')', 'error');
			// });
		}
	},
	handleEightSection(){
		console.log('params', Iframe1.message)
		if(Iframe1.message.action == 'limitsTier'){
			getTierHistory.run();
			showModal('tierHistoryModal');
		} else if(Iframe1.message.action == 'junoAccountStatus'){
			getFlaggingHistory.run()
			showModal('flaggingHistoryModal')
		} else if(Iframe1.message.action == 'checkingBalance'){
			showModal('interestEarnedModal')
		} else if(Iframe1.message.action == 'lifetimeInterest'){
			showModal('interestEarnedModal')
		}
	},
	getBalanceOverHundred(){
		let res
		if(query.dayCountOverHundredData.loading){
			res = this.globalSkeleton;
		} else if(query.dayCountOverHundredData.error){
			res = 'Error'
		} else {
			let days = getDaysBalanceOverHundred?.data && getDaysBalanceOverHundred?.data[0] && getDaysBalanceOverHundred?.data[0]?.no_of_days ? (getDaysBalanceOverHundred.data[0]?.no_of_days > 7 ? getDaysBalanceOverHundred.data[0]?.no_of_days : `<span style="color:#D13B3B"> ${getDaysBalanceOverHundred.data[0]?.no_of_days} </span>`) : `<span style="color:#D13B3B"> 0 </span>`
			res = `<span
               style="color: #373737; font-family: Lettera Text LL; font-size: 32px; font-style: normal; font-weight: 500;"
             >
                ${days}
                <span style="font-size: 16px; color:#777676">
                  / 90 days
                </span>
             </span>`
		}
		return res
	},
	getTotalVolumeProcessed(){
		let volume, count
		if(query.totalVolumeTxnsData?.loading){
			// volume = ` <span class="skeleton-box" style="width:80%;"></span>`;
			volume = this.globalSkeleton;
			count = this.globalSkeleton;
		} else if(query.totalVolumeTxnsData?.error){
			volume = 'Error';
			count = 'Error';
		} else {
			volume = getTotalTransactionVolume?.data && getTotalTransactionVolume.data[0] && getTotalTransactionVolume.data[0].volume ? getTotalTransactionVolume.data[0].volume : '$0.00';
			count = getTotalTransactionVolume?.data && getTotalTransactionVolume.data[0] && getTotalTransactionVolume.data[0].txns ? `${getTotalTransactionVolume.data[0].txns} Transactions` : '';
		}
		return {volume, count}
	},
	getOverviewObject(){
		let res = {
			"limits_tier": {
				"body": this.getTierInfo()?.name ? getUserOverview?.data?.data?.subscription.name : '',
			},
			"juno_account_status": {
				"body": lib.getFiatAccount()?.partner?.user_status == 'CLOSED' ? `<span style="color:#D13B3B"> ${lib.getFiatAccount().partner.user_status} </span>` : (this.getPersonalDetails()?.account_status && this.getPersonalDetails()?.account_status?.is_kyc_verified !== 1 ?  this.getPersonalDetails().account_status?.kyc_status : (this.getFlaggingInfo()?.flagged == 'Hard Flag' ? `<span style="color:#D13B3B;">${this.getFlaggingInfo().flagged}</span>` : this.getFlaggingInfo()?.flagged ? this.getFlaggingInfo()?.flagged : '')),
				"sub_body": this.getAccountClosure() ? `<span style="color:#D13B3B;  font-weight:500; font-size: 14px;">Closes on ${moment(this.getAccountClosure()).format("MMMM Do YYYY")}</span>` : (this.getPersonalDetails()?.account_status && this.getPersonalDetails()?.account_status?.is_kyc_verified !== 1 ? this.getPersonalDetails()?.account_status?.kyc_status_display : (this.getFlaggingInfo()?.flag_date_display ? this.getFlaggingInfo().flag_date_display : ''))
			},
			"total_volume_processed": {
				"body": this.getTotalVolumeProcessed()?.volume,
				"sub_body": this.getTotalVolumeProcessed()?.count
			},
			"balance_over_hundred": {
				"body": this.getBalanceOverHundred(),
			},
			"checking_balance": {
				"body": this.getFiatAccount()?.total_balance && this.getFiatAccount()?.total_balance[0]?.amount ? utils.formatCurrency(this.getFiatAccount().total_balance[0].amount) : '$0.00',
			},
			"lifetime_interest_earned": {
				"body": this.getInterestEarning() && this.getInterestEarning().total_amount ? utils.formatCurrency(this.getInterestEarning().total_amount) : '$0.00',
			},
			"crypto_amount": {
				"body": this.getCryptoAccount()?.total_balance && this.getCryptoAccount()?.total_balance[0] && this.getCryptoAccount().total_balance[0].amount ? utils.formatCurrency(this.getCryptoAccount().total_balance[0].amount) : '$0.00',
			},
			"crypto_trading_revenue": {
				"body": this.getTotalCryptoTradingRevenue()
			}
		}
		return res
	},
	getTotalCryptoTradingRevenue(){
		let res
		if(query.totalTradingRevenue?.loading){
			res = this.globalSkeleton;
		} else if(query.totalTradingRevenue?.error){
			res = 'Error'
		} else {
			res = getTotalTradingRevenue?.data && getTotalTradingRevenue.data[0] && getTotalTradingRevenue.data[0].revenue ? `+${utils.formatCurrency(getTotalTradingRevenue?.data[0]?.revenue?.toFixed(2))}` : '+$0.00'
		}
		return res
	},
	postFlaggingActions(){
		let payload = {}
		if(flagUnflagAction.selectedOptionValue == 'unflag'){
			payload = {
				"email": this.getPersonalDetails().email,
				"permission_flag": false,
				"skip_email": false,
				"note": flagUnflagNote.text
			}
		} else {
			payload = {
				"email": this.getPersonalDetails().email,
				"permission_flag": true,
				"skip_email": false,
				"flag_type": flagUnflagAction.selectedOptionValue,
				"note": flagUnflagNote.text
			}
		}
		return payload
	},
	getTotalDisputes(){
		let sum = 0, txns = 0
		Array.isArray(disputesInfo.data) && disputesInfo.data.forEach(item => {
			sum += item.volume
			txns += item.txns
		})
		return { 'sum': utils.formatCurrency(sum), 'count': txns}
	},
	getSynapseDeliveryStatus(){
		if(lib.getPersonalDetails().mailing_address.synapse_status == 'deliverable'){
			return '<img src="https://cdn.juno.finance/crypto/green-tick.svg" width="14px" height="14px">'
		} else {
			return ''
		}
	},
	getCloseAccountReasonDropdown(){
		let res = [
			{
				"name": "User Request",
				"code": "USER_REQUEST"
			},
			{
				"name": "Platform Request",
				"code": "PLATFORM_REQUEST_NOW"
			},
		]
		if(closeAccountPermission.selectedOptionValue == 'CLOSED_30D' || closeAccountPermission.selectedOptionValue == 'LOCKED') {
			res = [
				{
					"name": "Duplicate Account",
					"code": "DUPLICATE_ACCOUNT"
				},
				{
					"name": "Not Known",
					"code": "NOT_KNOWN"
				},
				{
					"name": "Platform Request",
					"code": "PLATFORM_REQUEST_LATER"
				},
				{
					"name": "Platform Terminated",
					"code": "PLATFORM_TERMINATED"
				},
				{
					"name": "Blocked Industry",
					"code": "BLOCKED_INDUSTRY"
				},
				{
					"name": "Docs Not Provided",
					"code": "DOCS_NOT_PROVIDED"
				},
				{
					"name": "Dormant Account",
					"code": "DORMANT_ACCOUNT"
				},
				{
					"name": "KYC Fraud | Blocked List",
					"code": "KYC_FRAUD|BLOCKED_LIST"
				},
				{
					"name": "KYC Fraud | Fraudulent Docs",
					"code": "KYC_FRAUD|FRAUDULENT_DOCS"
				},
				{
					"name": "High Returns",
					"code": "HIGH_RETURNS"
				},
				{
					"name": "Negative Balance",
					"code": "NEGATIVE_BALANCE"
				},
				{
					"name": "Unusual Activity | Compliance Suspicious",
					"code": "UNUSUAL_ACTIVITY|COMPLIANCE_SUSPICIOUS"
				},
				{
					"name": "Unsual Activity | Legal Request",
					"code": "UNUSUAL_ACTIVITY|LEGAL_REQUEST"
				}
			]
		}
		return res
	},
	getAccountClosure(){
		let closureDate = this.getData() && this.getData().closure_request && this.getData().closure_request.closure_date
		return closureDate
	},
	async handleFlaggingActions(){
		if(flagUnflagAction.selectedOptionValue == 'cleared' || flagUnflagAction.selectedOptionValue == 'rfi'){
			await api.postUserNotes();
		} else {
			await api.flagOrUnflagUser();
		}
	},
	getTransactionDisputesLib(){
		let res
		if(query.transactionDisputesData?.loading){
			res = `(${this.globalSkeleton})`;
		} else if(query.transactionDisputesData?.error){
			res = '(Error)'
		} else {
			res = `(${getTransactionDisputes?.data && getTransactionDisputes.data.length || 0}  updates)`
		}
		return res
	},
	getPIIUpdateHistoryLib(){
		let res
		if(api.piiUpdateHistoryData?.loading){
			res = this.globalSkeleton;
		} else if(api.piiUpdateHistoryData?.error){
			res = '(Error)';
		} else {
			res = `(${getPIIUpdateHistory.data?.data?.length || 0}  updates)`;
		}
		return res
	},
	getChildReferralsWrapper(){
		let res
		if(query.childReferralsData?.loading){
			res = this.globalSkeleton;
		} else if(query.childReferralsData?.error){
			res = 'Error';
		} else {
			res = `(${getChildReferrals.data && Array.isArray(getChildReferrals.data) && getChildReferrals.data[0].child_email? getChildReferrals.data?.length : 0}  child)`;
		}
		return res
	},
	getLoggedinDevicesLength(){
		let res
		if(query.loggedInDevicesData?.loading){
			res = this.globalSkeleton;
		} else if(query.loggedInDevicesData?.error){
			res = 'Error'
		} else {
			res = `(${loggedInDevices.data && Array.isArray(loggedInDevices.data) && loggedInDevices.data[0].device_info? loggedInDevices.data?.length : 0}  devices)`;
		}
		return res
	},
	getAstraCardDetailsLength(){
		let res
		if(query.astraCardDetails?.loading){
			res = this.globalSkeleton;
		} else if(query.astraCardDetails?.error){
			res = 'Error'
		} else {
			res = `(${getAstraCardDetails.data && Array.isArray(getAstraCardDetails.data) && getAstraCardDetails.data[0].last_four_digits? getAstraCardDetails.data?.length : 0}  cards)`;
		}
		return res
	}
}