// @ts-nocheck
	function checkForm() {

		var error = false;
		var errorText = "";
		var contactName =  document.getElementById("contactName");
		var contactLastName = document.getElementById("contactLastName");
		var contactEmail = document.getElementById("contactEmail");

		if (contactName.value == "") {
			document.getElementById('errorName').className = 'alert alertdanger'
			document.getElementById('true').className = 'glyphicon glyphicon-remove form-control-feedback'
			document.getElementById('success').className = 'row form-group has-error has-feedback'
			error = true;
		} else {
			document.getElementById('errorName').className = 'hide'
			document.getElementById('success').className = 'row form-group has-success has-feedback'
			document.getElementById('true').className = 'glyphicon glyphicon-ok form-control-feedback'

		}

		if (contactLastName.value == "") {
			document.getElementById('errorLastName').className = 'alert alertdanger'
			document.getElementById('true2').className = 'glyphicon glyphicon-remove form-control-feedback'
			document.getElementById('success2').className = 'row form-group has-error has-feedback'
			error = true;
		} else {
			document.getElementById('errorLastName').className = 'hide'
			document.getElementById('success2').className = 'row form-group has-success has-feedback'
			document.getElementById('true2').className = 'glyphicon glyphicon-ok form-control-feedback'
		}

		if (contactEmail.value == "") {
			document.getElementById('errorEmail').className = 'alert alertdanger'
			document.getElementById('true3').className = 'glyphicon glyphicon-remove form-control-feedback'
			document.getElementById('success3').className = 'row form-group has-error has-feedback'
			error = true;
		} else {
			document.getElementById('errorEmail').className = 'hide'
			document.getElementById('success3').className = 'row form-group has-success has-feedback'
			document.getElementById('true3').className = 'glyphicon glyphicon-ok form-control-feedback'
			var email = contactEmail.value;
			var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
			if (regex.test(email) == false) {
				document.getElementById('errorEmail2').className = 'alert alertdanger'
				document.getElementById('true3').className = 'glyphicon glyphicon-remove form-control-feedback'
				document.getElementById('success3').className = 'row form-group has-error has-feedback'
				error = true;
			} else {
				document.getElementById('errorEmail2').className = 'hide'
			}
		}

		if (!error) {
			return true;
		} else {
			return false;
		}
	}

	function checkName() {

		var error = false;
		var contactName = document.getElementById("contactName");

		if (contactName.value == "") {
			document.getElementById('errorName').className = 'alert alertdanger'
			document.getElementById('true').className = 'glyphicon glyphicon-remove form-control-feedback'
			document.getElementById('success').className = 'row form-group has-error has-feedback'
			error = true;
		} else {

			document.getElementById('errorName').className = 'hide'
			document.getElementById('success').className = 'row form-group has-success has-feedback'
			document.getElementById('true').className = 'glyphicon glyphicon-ok form-control-feedback'


		}
		
		if (!error) {
			return true;
		} else {
			return false;
		}
	}

	function checkLastName() {

		var error = false;
		var contactLastName = document.getElementById("contactLastName");

		if (contactLastName.value == "") {
			document.getElementById('errorLastName').className = 'alert alertdanger'
			document.getElementById('true2').className = 'glyphicon glyphicon-remove form-control-feedback'
			document.getElementById('success2').className = 'row form-group has-error has-feedback'
			error = true;
		} else {
			document.getElementById('errorLastName').className = 'hide'
			document.getElementById('success2').className = 'row form-group has-success has-feedback'
			document.getElementById('true2').className = 'glyphicon glyphicon-ok form-control-feedback'
		}

		if (!error) {
			return true;
		} else {
			return false;
		}
	}

	function checkEmail() {

		var error = false;
		var contactEmail = document.getElementById("contactEmail");

		if (contactEmail.value == "") {
			document.getElementById('errorEmail').className = 'alert alertdanger'
			document.getElementById('true3').className = 'glyphicon glyphicon-remove form-control-feedback'
			document.getElementById('success3').className = 'row form-group has-error has-feedback'
			error = true;
		} else {
			document.getElementById('errorEmail').className = 'hide'
			document.getElementById('success3').className = 'row form-group has-success has-feedback'
			document.getElementById('true3').className = 'glyphicon glyphicon-ok form-control-feedback'
			var email = contactEmail.value;
			var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
			if (regex.test(email) == false) {
				document.getElementById('errorEmail2').className = 'alert alertdanger'
				document.getElementById('true3').className = 'glyphicon glyphicon-remove form-control-feedback'
				document.getElementById('success3').className = 'row form-group has-error has-feedback'
				error = true;
			} else {
				document.getElementById('errorEmail2').className = 'hide'
			}
		}

		if (!error) {
			return true;
		} else {
			return false;
		}
	}