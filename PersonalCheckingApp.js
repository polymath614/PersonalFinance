var epiphany = epiphany || {};

epiphany.main = (function () {

	//////* THE ACCOUNT CLASS */////

	/** @constructor */
	function Account() {
		this.id = Account.idCounter++;
		this.accountType = "basic";
		this.accountName = "default account";
		this.transactions = [];
		this.balance = 0;

		Object.defineProperty(this, "accountName", {
			get: function () { return this.accountName; },
			set: function(accountName) { this.accountName = accountName }
		})

		Object.defineProperty(this, "accountType", {
			get: function () { return this.accountType; },
			set: function(accountType) { this.accountType = accountType }
		})

		Object.defineProperty(this, "balance", {
			get: function () { return this.balance; }
		})
	}

	Account.idCounter = 0;
	Account.prototype.minBalance = 0;
	Account.prototype.maxBalance = 50000;

	Account.prototype.getIndexOfTransaction = function (
		/** !string */ transaction) {
		return this.transactions.indexOf(transaction);
	}

	Account.prototype.addTransaction = function (
		/** !Transaction */ transaction) {
		this.transactions.push(transaction);
	}

	Account.prototype.removeTransaction = function (
		/** !Transaction */ transaction) {
		this.transactions.splice(this.getIndexOfTransaction(transaction), 1);
	}

	Account.prototype.applyTransaction = function (
		/** !Transaction */ transaction) {
		this.balance += transaction.amount;
	}

	Account.prototype.rollbackTransaction = function (
		/** !Transaction */ transaction) {
		this.balance -= transaction.amount;
	}

	Account.prototype.toString = function () {
		var string;
		for (var i in this) {
			if(this.hasOwnProperty(i))
				string = i + ":" + this[i] + "; ");
		}
		return string;
	}

	Account.prototype.sortTransactionByName = function(){
		var array = this.transactions.sort(function(a, b){
	    if(a.recipient.name < b.recipient.name) return -1;
	    if(a.recipient.name > b.recipient.name) return 1;
	    return 0;
		});

		return array;
	}

	Account.prototype.sortTransactionByAmount(){
		this.transactions.sort(function(a, b){
	    if(a.amount < b.amount) return -1;
	    if(a.amount > b.amount) return 1;
	    return 0;
		})
	}
	// Account.prototype.toString = function () {
	// 	var fullString = "Account Type: " + this.accountType + ", Account Name: " + this.accountName + ", Balance: " + this.balance;
	// 	return this.fullString;
	// }




	/* THE TRANSACTION CLASS */

	/** @constructor */
	function Transaction() {
		this.id = Transaction.idCounter++;
		this.amount = 0;
		this.date = 0;
		this.kind = "Withdraw";
		this.recipient = new Recipient();

		Object.defineProperty(this, "amount", {
			//space for validation, or event handling - structured access to your class' data
			get: function () { return this.amount; },
			set: function(difAmount) { this.amount = difAmount }
		})

		Object.defineProperty(this, "id", {
			get: function () { return this.id; },
			set: function(difId) { if(difId>0 && difId>Transaction.idCounter) {this.id = difId;
				} else {Console.log("Id must be greater than zero and greater than other ids.")}}
		})

		Object.defineProperty(this, "kind", {
			//space for validation, or event handling - structured access to your class' data
			get: function () { return this.kind; },
			set: function() {
				if(this.amount < 0) {
					this.kind = "Withdraw";
				} else {
					"Deposit";
				}}
		})
	}

	Transaction.idCounter = 0;

	Transaction.prototype.getIndexOfRecipient = function (
		/** !string */ recipient) {
		return this.recipients.indexOf(recipient);
	}

	Transaction.prototype.addRecipient = function (
		/** !Recipient */ recipient) {
		this.recipients.push(recipient);
	}

	Transaction.prototype.removeRecipient = function (
		/** !Recipient */ recipient) {
		this.recipients.splice(getIndexOfRecipient(recipient), 1);
	}

	Transaction.prototype.toString = function () {
		var string;
		for (var i in this) {
			if(this.hasOwnProperty(i))
				string = i + ":" + this[i] + "; ");
		}
		return string;
	}



	/* THE RECIPIENT CLASS */

	/** @constructor */
	function Recipient() {
		this.id = Recipient.idCounter++;
		this.name = "";

		Object.defineProperty(this, "id", {
			get: function () { return this.id; },
			set: function(difId) { if(difId>0 && difId>Recipient.idCounter) {this.id = difId;
				} else {Console.log("Id must be greater than zero and greater than other ids.")}}
		})

		Object.defineProperty(this, "name", {
			get: function () { return this.name; },
			set: function(name) { this.name = name }
		})
	}

	Recipient.idCounter = 0;

	Recipient.prototype.setAddressStreetNumber = function(
		/** !number */ number) {
		this.Address.streetNumber = number;
	}

	Recipient.prototype.getAddressStreetNumber = function () {
		return this.Address.streetNumber
	}


	Recipient.prototype.setAddressStreet = function(
		/** !number */ street) {
		this.Address.street = street;
	}

	Recipient.prototype.getAddressStreet = function () {
		return this.Address.street
	}

	Recipient.prototype.setAddressCity = function(
		/** !string */ city) {
		this.Address.city = city;
	}

	Recipient.prototype.getAddressCity = function () {
		return this.Address.city;
	}

	Recipient.prototype.setAddressState = function(
		/** !string */ state) {
		this.Address.state = state;
	}

	Recipient.prototype.getAddressState = function () {
		return this.Address.state;
	}

	Recipient.prototype.setAddressZipCode = function(
		/** !number */ zip) {
		this.Address.zipCode = zip;
	}

	Recipient.prototype.getAddressZipCode = function () {
		return this.Address.zipCode;
	}

	Recipient.prototype.setAddressCountry = function(
		/** !number */ country) {
		this.Address.country = county;
	}

	Recipient.prototype.getAddressCountry = function () {
		return this.Address.country;
	}

	Recipient.prototype.toString = function () {
		var string;
		for (var i in this) {
			if(this.hasOwnProperty(i))
				string = i + ":" + this[i] + "; ");
		}
		return string;
	}

	// Recipient.prototype.toString = function () {
	// 	return "Recipiect: id=" + this.id + ", name=" + this.name;
	// }



	/* THE ADDRESS CLASS */

	/** @constructor */
	function Address() = {
		this.streetNumber = 0;
		this.street = "";
		this.city = "";
		this.state = "";
		this.zipCode = 0;
		this.county = "";

		Object.defineProperty(this, "streetNumber", {
			get: function () { return this.streetNumber; },
			set: function(
				/** !number */ streetNumber) { if(streetNumber>0) this.streetNumber = streetNumber }
		})

		Object.defineProperty(this, "street", {
			get: function () { return this.street; },
			set: function(
				/** !string */ street) { this.street = street }
		})

		Object.defineProperty(this, "city", {
			get: function () { return this.city; },
			set: function(
				/** !string */ city) { this.city = city }
		})

		Object.defineProperty(this, "state", {
			get: function () { return this.state; },
			set: function(
				/** !string */ state) { this.state = state }
		})

		Object.defineProperty(this, "zipCode", {
			get: function () { return this.zipCode; },
			set: function(
				/** !number */ zipCode) { this.zipCode = zipCode }
		})

		Object.defineProperty(this, "country", {
			get: function () { return this.country; },
			set: function(
				/** !string */ country) { this.country = country }
		})
	};

	Address.prototype.toString = function () {
		var string;
		for (var i in this) {
			if(this.hasOwnProperty(i))
				string = i + ":" + this[i] + "; ");
		}
		return string;
	}

	// Address.prototype.ToString = function () {
	// 	return "Address: streetNumber=" this.streetNumber + ", street=" + this.street + ", city=" + this.city
	// 			 + ", state=" + this.state + ", zipCode=" + this.zipCode + ", country=" + this.country;
	// }

}) //end epiphany
