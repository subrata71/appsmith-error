export default {
  pageLoad: (params) => {
		settings.setStore();
		if(inputUser.text.length > 3){
			showModal('loaderModal')
			getUserOverview.run().then(()=>{
				getTransactionOverview.run().then(()=>{
					getAllTransactions.run();
					getBalance.run();
					showAlert('User Found', 'success')
					this.runQueries()
					closeModal('loaderModal')
				}).catch(() => {
					closeModal('loaderModal')
					showAlert(getTransactionOverview.data.message, 'error');
				});
			});
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
		this.getTxnOverviewObj()
		getTransactionsCount.run()
		getTransactionTable.run()
	},
	getData(){
		return getUserOverview.data.data
	},
	getPersonalDetails(){		
		return getUserOverview.data.data.personal_details
	},
	getAccountDetails(){
		return getUserOverview.data.data.account_details
	},
	getFiatAccount(){
		return getUserOverview.data.data.account_details.fiat[0]
	},
	getCryptoAccount(){
		return getUserOverview.data.data.account_details.crypto[0]
	},
	getFlaggingInfo(){
		return getUserOverview.data.data.account_details.flagging_info
	},
	getLifetimeInterestEarned(){
		return getUserOverview.data.data.account_details.lifetime_interest_earned
	},
	getTierInfo(){
		return getUserOverview.data.data.subscription
	},
	getThirdPartyScores(){
		return getUserOverview.data.data.third_party_scores
	},
	getReferrals(){
		return getUserOverview.data.data.referrals
	},
	getInterestEarning(){
		return getUserOverview.data.data.interest_earning
	},
	getLoggedInDevices(){
		return getUserOverview.data.data.logged_in_devices
	},
	getGraphData(){
		return getUserOverview.data.data.interest_earning?.last_12_months?.monthly_breakdown || []
	},
	initiateManualKYCActions(){
		if(manualKYCAction.selectedOptionValue == 'push-to-synapse'){
			pushToSynapse.run().then(() => {
				showAlert(pushToSynapse.data.message, 'success');
			}).catch(() => {
				showAlert(pushToSynapse.data.message + ' (Error Code: ' + pushToSynapse.data.error_code + ')', 'error');
			});
		} else if(manualKYCAction.selectedOptionValue == 'reinitiate-kyc'){
			reinitUser.run().then(() => {
				showAlert(reinitUser.data.message, 'success');
			}).catch(() => {
				showAlert(reinitUser.data.message + ' (Error Code: ' + reinitUser.data.error_code + ')', 'error');
			});
		} else if(manualKYCAction.selectedOptionValue == 'reject'){
			rejectUser.run().then(() => {
				showAlert(rejectUser.data.message, 'success');
			}).catch(() => {
				showAlert(rejectUser.data.message + ' (Error Code: ' + rejectUser.data.error_code + ')', 'error');
			});
		}
	},
	handleEightSection(){
		console.log('params', Iframe1.message)
		if(Iframe1.message.action == 'limitsTier'){
			showModal('tierHistoryModal')
		} else if(Iframe1.message.action == 'junoAccountStatus'){
			showModal('flaggingHistoryModal')
		} else if(Iframe1.message.action == 'checkingBalance'){
			showModal('interestEarnedModal')
		} else if(Iframe1.message.action == 'lifetimeInterest'){
			showModal('interestEarnedModal')
		}
	},
	getTxnOverviewObj(){
		let data = getTransactionOverview && getTransactionOverview.data && getTransactionOverview.data[0]
		let res = {
			"total_transactions": {
				"volume": data?.total_volume ? `${utils.formatCurrency(data.total_volume.toFixed(2))}` : '$0.00',
				"count" : data?.total_txn_count ? `${data.total_txn_count} Transactions` : '',
			},
			"cash_deposits": {
				"volume": data?.cash_deposits ? `${utils.formatCurrency(data.cash_deposits.toFixed(2))}` : '$0.00',
				"count" : data?.cash_deposits_count ? `${data.cash_deposits_count} Transactions` : '',
			},
			"crypto_withdrawals": {
				"volume": data?.crypto_withdrawal_amount ? `${utils.formatCurrency(data.crypto_withdrawal_amount.toFixed(2))}` : '$0.00',
				"count" : this.getExternalWalletAddressLength() ? `${this.getExternalWalletAddressLength()} Wallets` : '',
			},
			"total_disputes": {
				"count": data?.disputed_txn_count || 0,
			},
			"cancelled_transactions": {
				"volume": data?.cancelled_txn_amount ? `${utils.formatCurrency(data.cancelled_txn_amount.toFixed(2))}` : '$0.00',
				"count" : data?.cancelled_txn_count ? `${data.cancelled_txn_count} Transactions` : '',
			},
			"returned_transactions": {
				"volume": data?.returned_txn_amount ? `${utils.formatCurrency(data.returned_txn_amount.toFixed(2))}` : '$0.00',
				"count" : data?.returned_txn_count ? `${data.returned_txn_count} Transactions` : '',
			},
			"cashback_transactions": {
				"volume": data?.cashback_amount ? `${utils.formatCurrency(data.cashback_amount.toFixed(2))}` : '$0.00',
				"count" : data?.cashback_txn_count ? `${data.cashback_txn_count} Transactions` : '',
			},
			"card_spends": {
				"volume": data?.card_purchase_amount ? `${utils.formatCurrency(data.card_purchase_amount.toFixed(2))}` : '$0.00',
				"count" : data?.card_purchase_txn_count ? `${data.card_purchase_txn_count} Transactions` : '',
			}
		}
		
		return res
	},
	getSelectedTransaction(){
		return transactionTable.selectedRow
	},
	getTimeline(){
		let result =  '';
		this.getSelectedTransaction().timeline.forEach(e => {
			  result += `---------\n<b>Title: </b>${e.title}\n<b>Note: </b>${e.note ? e.note : ''}\n<b>Date: </b>${moment(e.date).format('DD MMM yy hh:mm:ss a')}\n---------` 
		})
		return result;
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
	getTransactions(){
		const txns = getAllTransactions.data && getAllTransactions.data.data?.list || []    
    const TXN_TYPES_CONFIG = {
        fiatCredit: {
            bg: 'GREEN',
        text: 'WHITE',
        title: 'USD Credit'
        },
        fiatDebit: {
            bg: 'BLUE',
        text: 'WHITE',
        title: 'USD Debit'
        },
        cryptoBuy: {
            bg: 'GREEN',
        text: 'WHITE',
        title: 'Crypto Buy'
        },
        cryptoSell: {
            bg: 'BLUE',
        text: 'WHITE',
        title: 'Crypto Sell'
        },
        cryptoSend: {
            bg: '#93CBF4',
        text: '#27272a',
        title: 'Crypto Send'
        },
        cryptoReceive: {
            bg: '#95F2A9',
            text: '#27272a',
            title: 'Crypto Receive'
        },
        ddCredit: {
            bg: '#F4F493',
            text: 'BLACK',
            title: 'Direct Deposit'
        },
        default: {
        bg: 'WHITE',
            text: 'BLACK',
            title: 'Default'
        }
    }

    return txns.map(txn => {
        const cryptoTxnInfo = txn.crypto_transaction_info;
        const synpaseFrom = txn.synapse_from;
        const synpaseTo = txn.synapse_to;
        const txnType = txn.transaction_type;
        let colorTag = 'default';
        if (txnType.name == 'crypto_trade') {
            colorTag = txn.side == 1 ? 'cryptoBuy' : 'cryptoSell';
        } else if (txnType.name == 'crypto_transaction') {
            colorTag = txn.side == 1 ? 'cryptoSend' : 'cryptoReceive';
        } else if (txn.is_dd == 1) {
            colorTag = 'ddCredit';
        } else {
            colorTag = txn.side == 1 ? 'fiatDebit' : 'fiatCredit';
            TXN_TYPES_CONFIG[colorTag].title = txnType.name;
        }
        return {
            _id: txn._id,
            from_name: synpaseFrom && synpaseFrom.user.legal_names[0],
            from_type: synpaseFrom && synpaseFrom.type,
            from_meta_type: synpaseFrom && synpaseFrom.meta && synpaseFrom.meta.type,
            to_name: synpaseTo && synpaseTo.user.legal_names[0],
            to_type: synpaseTo && synpaseTo.type,
            to_meta_type: synpaseTo && synpaseTo.meta && synpaseTo.meta.type,
            txn_type: txnType.name,
            synapse_transaction_id: txn.synapse_transaction_id,
            amount_USD: (txn.amount || txn.crypto_transaction_info.predicted_fiat_amount['$numberDecimal']),
            status: txn.status.title,
            statusObj: txn.status,
            added_on: txn.added_on,
            side: txn.side,
            is_dd: txn.is_dd,
            timeline: txn.timeline,
            cashback_status: txn.cashback_status,
            card_info: txn.card && txn.card.number && txn.card.number.concat("\n", txn.card.name),
            extra_txn_info: txn.to,
						crypto_transaction_info: txn.crypto_transaction_info,
            jcoin: txn.juno_coin,
            synapse_from: synpaseFrom,
            synapse_to: synpaseTo,
            synapse_extra: txn.synapse_extra,
            cashback_bonus: txn.cashback_bonus,
            crm_data: {
                bg: TXN_TYPES_CONFIG[colorTag].bg,
                text: TXN_TYPES_CONFIG[colorTag].text,
                txn_type_title: TXN_TYPES_CONFIG[colorTag].title
            }
        };
    });
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
	getExternalWalletAddressLength(){
		let external_wallets = getBalance.data && getBalance.data.data && getBalance?.data?.data?.external_wallets_v2 || {}
		let coins = Object.keys(external_wallets)
		let sum = 0
		if(coins && coins.length > 0){
			coins.forEach((item => {
				sum += external_wallets[item].length
			}))
		}
		
		return sum
	},
	getAccountClosure(){
		let closureDate = getUserOverview?.data?.data && getUserOverview?.data?.data?.closure_request && getUserOverview?.data?.data?.closure_request.closure_date
		return closureDate
	},
	handleFlaggingActions(){
		if(flagUnflagAction.selectedOptionValue == 'cleared' || flagUnflagAction.selectedOptionValue == 'rfi'){
			postUserNotes.run().then(() => {
				showAlert(postUserNotes.data.message, 'success');
			}).catch(() => {
				showAlert(postUserNotes.data.message + ' (Error Code: ' + postUserNotes.data.error_code + ')', 'error');
			});
		} else {
			flagOrUnflagUser.run().then(() => {
				showAlert(flagOrUnflagUser.data.message, 'success');
			}).catch(() => {
				showAlert(flagOrUnflagUser.data.message + ' (Error Code: ' + flagOrUnflagUser.data.error_code + ')', 'error');
			});
		}
	}
}