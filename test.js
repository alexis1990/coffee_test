var command = "T:2:0.6";

var Command = {
	executeCommand : function (command) {
		var parseCommand = command.split(":");
		var typeDrink = parseCommand[0];
		var sugarCount = parseInt(parseCommand[1]);
		var originalAmount = parseFloat(parseCommand[2]);
		
		var drinkName = '';
		var drinkPrice = 0;

		switch (typeDrink) {
			case 'T':
				drinkName = 'tea';
				drinkPrice = 0.40;
			break;
			case 'H':
				drinkName = 'chocolate';
				drinkPrice = 0.50;
			break;
			case 'C':
				drinkName = 'coffee';
				drinkPrice = 0.60;
			break;
		  default:
		    return 'Drink maker forwards any message received onto the coffee machine interface for the customer to see';
		}
		var resultAmount = this.checkAmount(drinkPrice, originalAmount, drinkName);
		return this.displayMessage(resultAmount, sugarCount);
	},

	checkAmount : function (amountType, originalAmount, type) {

		var difference = 0;
		var status = false;

		if(originalAmount < amountType) {
			difference = amountType - originalAmount;
			status = false;
		} else {
			// can give back change
			difference = originalAmount - amountType;
			status = true;
		}

		return {
			status : status,
			type: type,
			difference : difference.toFixed(1)
		}
	},
	displayMessage: function (result, sugarCount) {
		var stringSugarCount = '';

		if(sugarCount > 0){
			stringSugarCount = sugarCount + ' sugar and a stick';
			if(sugarCount > 1){
				stringSugarCount = sugarCount + ' sugars and a stick';
			}
		} else {
			stringSugarCount = 'no sugar';
		}

		if (result.status) {
			return "Drink maker makes 1 " + result.type + " with " + stringSugarCount;
		} else {
			return "Not enough money, " + result.difference  + "$ is missing";
		}
	}
}

module.exports = Command;