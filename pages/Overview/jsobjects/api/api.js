export default {
	changeMailingAddressData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async changeMailingAddress(){
		try {
			this.changeMailingAddressData['loading'] = true;
			this.changeMailingAddressData['error'] = null;
			await changeMailingAddress.run();
			if(!this.changeMailingAddressData?.error){
				showAlert(changeMailingAddress.data?.message, 'success')
			}
			this.getUserOverview();
			this.changeMailingAddressData.data = changeMailingAddress.data;
		} catch(err){
			showAlert(changeMailingAddress.data?.message + ' (Error Code: ' + (changeMailingAddress.data?.error_code || '') + ')', 'error');
			this.changeMailingAddressData['error'] = err;
		}
		this.changeMailingAddressData.loading = false;
		return this.changeMailingAddressData
	},

	postFlaggingData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async flagOrUnflagUser(){
			try {
					this.postFlaggingData['loading'] = true;
					this.postFlaggingData['error'] = null;
					await flagOrUnflagUser.run();
					if(!this.postFlaggingData?.error){
						showAlert(flagOrUnflagUser.data?.message, 'success')
					}
					this.postFlaggingData.data = flagOrUnflagUser.data;
					this.getUserOverview();
			} catch(err){
					showAlert(flagOrUnflagUser.data?.message + ' (Error Code: ' + (flagOrUnflagUser.data?.error_code || '') + ')', 'error');
					this.postFlaggingData['error'] = err;
			}
			this.postFlaggingData.loading = false;
			return this.postFlaggingData
	},

	balanceData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getBalance(){
		try {
			this.balanceData['loading'] = true;
			this.balanceData['error'] = null;
			await getBalance.run();
			if(!this.balanceData?.error){
				showAlert(getBalance.data?.message, 'success')
			}
			this.balanceData.data = getBalance.data;
		} catch(err){
			showAlert(getBalance.data?.message + ' (Error Code: ' + (getBalance.data?.error_code || '') + ')', 'error');
			this.balanceData['error'] = err;
		}
		this.balanceData.loading = false;
		return this.balanceData
	},

	creditScoreData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async getCreditScore(){
			try {
					this.creditScoreData['loading'] = true;
					this.creditScoreData['error'] = null;
					await getCreditScore.run();
					if(!this.creditScoreData?.error){
						showAlert(getCreditScore.data?.message, 'success')
					}
					this.creditScoreData.data = getCreditScore.data;
			} catch(err){
					showAlert(getCreditScore.data?.message + ' (Error Code: ' + (getCreditScore.data?.error_code || '') + ')', 'error');
					this.creditScoreData['error'] = err;
			}
			this.creditScoreData.loading = false;
			return this.creditScoreData
	},

	flaggingHistoryData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getFlaggingHistory(){
		try {
			this.flaggingHistoryData['loading'] = true;
			this.flaggingHistoryData['error'] = null;
			await getFlaggingHistoryAPI.run();
			if(!this.flaggingHistoryData?.error){
				// showAlert(getFlaggingHistoryAPI.data?.message, 'success')
			}
			this.flaggingHistoryData.data = getFlaggingHistoryAPI.data;
		} catch(err){
			showAlert(getFlaggingHistoryAPI.data?.message + ' (Error Code: ' + (getFlaggingHistoryAPI.data?.error_code || '') + ')', 'error');
			this.flaggingHistoryData['error'] = err;
		}
		this.flaggingHistoryData.loading = false;
		return this.flaggingHistoryData
	},

	piiUpdateHistoryData:{
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getPiiUpdateHistory(){
		try {
			this.piiUpdateHistoryData['loading'] = true;
			this.piiUpdateHistoryData['error'] = null;
			await getPIIUpdateHistory.run();
			if(!this.piiUpdateHistoryData?.error){
				// showAlert(getPIIUpdateHistory.data?.message, 'success')
			}
			this.piiUpdateHistoryData.data = getPIIUpdateHistory.data;
		} catch(err){
			showAlert(getPIIUpdateHistory.data?.message + ' (Error Code: ' + (getPIIUpdateHistory.data?.error_code || '') + ')', 'error');
			this.piiUpdateHistoryData['error'] = err;
		}
		this.piiUpdateHistoryData.loading = false;
		return this.piiUpdateHistoryData
	},
	
	userOverviewData: {
		'loading': false,
		'error': null,
		'data': {
			
		}
	},
	async getUserOverview(){
		try {
			this.userOverviewData['loading'] = true;
			this.userOverviewData['error'] = null;
			await getUserOverview.run();
			this.userOverviewData.data = getUserOverview.data;
		} catch(err){
			showAlert(getUserOverview.data.message || err?.message, 'error')
			this.userOverviewData['error'] = err
		}
		this.userOverviewData.loading = false;
		return this.userOverviewData
	},
	
	giveJcoinData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async postJcoinData(){
			try {
					this.giveJcoinData['loading'] = true;
					this.giveJcoinData['error'] = null;
					await giveJCoin.run();
					if(!this.giveJcoinData?.error){
						showAlert(giveJCoin.data?.message, 'success')
					}
					this.giveJcoinData.data = giveJCoin.data;
			} catch(err){
					showAlert(giveJCoin.data?.message + ' (Error Code: ' + (giveJCoin.data?.error_code || '') + ')', 'error');
					this.giveJcoinData['error'] = err;
			}
			this.giveJcoinData.loading = false;
			return this.giveJcoinData
	},
	
	googleAuthResetData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async postGoogleAuthReset(){
			try {
					this.googleAuthResetData['loading'] = true;
					this.googleAuthResetData['error'] = null;
					await googleAuthReset.run();
					if(!this.googleAuthResetData?.error){
						showAlert(googleAuthReset.data?.message, 'success')
					}
					this.getUserOverview();
					this.googleAuthResetData.data = googleAuthReset.data;
			} catch(err){
					showAlert(googleAuthReset.data?.message + ' (Error Code: ' + (googleAuthReset.data?.error_code || '') + ')', 'error');
					this.googleAuthResetData['error'] = err;
			}
			this.googleAuthResetData.loading = false;
			return this.googleAuthResetData
	},
	
	logoutAllDevicesData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async getLogoutAllDevices(){
			try {
					this.logoutAllDevicesData['loading'] = true;
					this.logoutAllDevicesData['error'] = null;
					await logoutAllDevices.run();
					if(!this.logoutAllDevicesData?.error){
						showAlert(logoutAllDevices.data?.message, 'success')
					}
					this.logoutAllDevicesData.data = logoutAllDevices.data;
			} catch(err){
					showAlert(logoutAllDevices.data?.message + ' (Error Code: ' + (logoutAllDevices.data?.error_code || '') + ')', 'error');
					this.logoutAllDevicesData['error'] = err;
			}
			this.logoutAllDevicesData.loading = false;
			return this.logoutAllDevicesData
	},

	postUserNotesData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async postUserNotes(){
			try {
					this.postUserNotesData['loading'] = true;
					this.postUserNotesData['error'] = null;
					console.log('Control till here');
					await postUserNotes.run();
					if(!this.postUserNotesData?.error){
						showAlert(postUserNotes.data?.message, 'success')
					}
					this.postUserNotesData.data = postUserNotes?.data;
			} catch(err){
					showAlert(postUserNotes.data?.message + ' (Error Code: ' + (postUserNotes.data?.error_code || '') + ')', 'error');
					this.postUserNotesData['error'] = err;
			}
			this.postUserNotesData.loading = false;
			return this.postUserNotesData
	},
	
	pushToSynapseData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async pushToSynapse(){
			try {
					this.pushToSynapseData['loading'] = true;
					this.pushToSynapseData['error'] = null;
					await pushToSynapse.run();
					if(!this.pushToSynapseData?.error){
						showAlert(pushToSynapse.data?.message, 'success')
					}
					this.pushToSynapseData.data = pushToSynapse.data;
			} catch(err){
					showAlert(pushToSynapse.data?.message + ' (Error Code: ' + (pushToSynapse.data?.error_code || '') + ')', 'error');
					this.pushToSynapseData['error'] = err;
			}
			this.pushToSynapseData.loading = false;
			return this.pushToSynapseData
	},
	
	reinitUserData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async reinitUser(){
			try {
					this.reinitUserData['loading'] = true;
					this.reinitUserData['error'] = null;
					await reinitUser.run();
					if(!this.reinitUserData?.error){
						showAlert(reinitUser.data?.message, 'success')
					}
					this.reinitUserData.data = reinitUser.data;
			} catch(err){
					showAlert(reinitUser.data?.message + ' (Error Code: ' + (reinitUser.data?.error_code || '') + ')', 'error');
					this.reinitUserData['error'] = err;
			}
			this.reinitUserData.loading = false;
			return this.reinitUserData
	},

	rejectUserData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async rejectUser(){
			try {
					this.rejectUserData['loading'] = true;
					this.rejectUserData['error'] = null;
					await rejectUser.run();
					if(!this.rejectUserData?.error){
						showAlert(rejectUser.data?.message, 'success')
					}
					this.rejectUserData.data = rejectUser.data;
			} catch(err){
					showAlert(rejectUser.data?.message + ' (Error Code: ' + (rejectUser.data?.error_code || '') + ')', 'error');
					this.rejectUserData['error'] = err;
			}
			this.rejectUserData.loading = false;
			return this.rejectUserData
	},
	
	triggerBonusData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async triggerBonus(){
			try {
					this.triggerBonusData['loading'] = true;
					this.triggerBonusData['error'] = null;
					await triggerBonus.run();
					if(!this.triggerBonusData?.error){
						showAlert(triggerBonus.data?.message, 'success')
					}
					this.triggerBonusData.data = triggerBonus.data;
			} catch(err){
					showAlert(triggerBonus.data?.message + ' (Error Code: ' + (triggerBonus.data?.error_code || '') + ')', 'error');
					this.triggerBonusData['error'] = err;
			}
			this.triggerBonusData.loading = false;
			return this.triggerBonusData
	},
	
	updateEmailData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async updateEmail(){
			try {
					this.updateEmailData['loading'] = true;
					this.updateEmailData['error'] = null;
					await updateEmail.run();
					if(!this.updateEmailData?.error){
						showAlert(updateEmail.data?.message, 'success')
					}
					this.updateEmailData.data = updateEmail.data;
			} catch(err){
					showAlert(updateEmail.data?.message + ' (Error Code: ' + (updateEmail.data?.error_code || '') + ')', 'error');
					this.updateEmailData['error'] = err;
			}
			this.updateEmailData.loading = false;
			return this.updateEmailData
	},
	
	updateNameData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async updateName(){
			try {
					this.updateNameData['loading'] = true;
					this.updateNameData['error'] = null;
					await updateName.run();
					if(!this.updateEmailData?.error){
						showAlert(updateEmail.data?.message, 'success')
					}
					this.getUserOverview();
					this.updateNameData.data = updateName.data;
			} catch(err){
					showAlert(updateName.data?.message + ' (Error Code: ' + (updateName.data?.error_code || '') + ')', 'error');
					this.updateNameData['error'] = err;
			}
			this.updateNameData.loading = false;
			return this.updateNameData
	},
	
	updatePhoneData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async updatePhone(){
			try {
					this.updatePhoneData['loading'] = true;
					this.updatePhoneData['error'] = null;
					await updatePhone.run();
					if(!this.updatePhoneData?.error){
						showAlert(updatePhone.data?.message, 'success');
					}
					this.getUserOverview();
					this.updatePhoneData.data = updatePhone.data;
			} catch(err){
					showAlert(updatePhone.data?.message + ' (Error Code: ' + (updatePhone.data?.error_code || '') + ')', 'error');
					this.updatePhoneData['error'] = err;
			}
			this.updatePhoneData.loading = false;
			return this.updatePhoneData
	},
	
	updateSynapseNodePermissionData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async updateSynapseNodePermission(){
			try {
					this.updateSynapseNodePermissionData['loading'] = true;
					this.updateSynapseNodePermissionData['error'] = null;
					await updateSynapseNodePermission.run();
					if(!this.updateSynapseNodePermissionData?.error){
						showAlert(updateSynapseNodePermission.data?.message, 'success');
					}
					this.updateSynapseNodePermissionData.data = updateSynapseNodePermission.data;
			} catch(err){
					showAlert(updateSynapseNodePermission.data?.message + ' (Error Code: ' + (updateSynapseNodePermission.data?.error_code || '') + ')', 'error');
					this.updateSynapseNodePermissionData['error'] = err;
			}
			this.updateSynapseNodePermissionData.loading = false;
			return this.updateSynapseNodePermissionData
	},

	userPermissionsData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async updateUserPermissions(){
			try {
					this.userPermissionsData['loading'] = true;
					this.userPermissionsData['error'] = null;
					await updateUserPermissions.run();
					if(!this.userPermissionsData?.error){
						showAlert(updateUserPermissions.data?.message, 'success');
					}
					await this.getUserOverview();
					this.userPermissionsData.data = updateUserPermissions.data;
			} catch(err){
					showAlert(updateUserPermissions.data?.message + ' (Error Code: ' + (updateUserPermissions.data?.error_code || '') + ')', 'error');
					this.userPermissionsData['error'] = err;
			}
			this.userPermissionsData.loading = false;
			return this.userPermissionsData
	},

	upgradeTierData:{
			'loading': false,
			'error': null,
			'data': {

			}
	},
	async upgradeTier(){
			try {
					this.upgradeTierData['loading'] = true;
					this.upgradeTierData['error'] = null;
					await upgradeTier.run();
					if(!this.upgradeTierData?.error){
						showAlert(upgradeTier.data?.message, 'success');
					}
					await this.getUserOverview();
					this.upgradeTierData.data = upgradeTier.data;
			} catch(err){
					showAlert(upgradeTier.data?.message + ' (Error Code: ' + (upgradeTier.data?.error_code || '') + ')', 'error');
					this.upgradeTierData['error'] = err;
			}
			this.upgradeTierData.loading = false;
			return this.upgradeTierData
	},
}