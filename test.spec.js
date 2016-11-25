describe("Command", function() {
  	var Command = require('./test.js');
	var commandFunction;
	
	beforeEach(function() {
		commandFunction = Command;
	});
	describe("Success :", function() {
		//1 sugar
		it("should return tea with one sugar and a stick", function() {
			var command = "T:1:0.4";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker makes 1 tea with 1 sugar and a stick');
		});

		it("should return chocolate with one sugar and a stick", function() {
			var command = "H:1:0.6";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker makes 1 chocolate with 1 sugar and a stick');
		});

		it("should return coffee with one sugar and a stick", function() {
			var command = "C:1:0.6";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker makes 1 coffee with 1 sugar and a stick');
		});

		//2 sugars
		it("should return tea with 2 sugars and a stick", function() {
			var command = "T:2:0.6";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker makes 1 tea with 2 sugars and a stick');
		});

		it("should return chocolate with 2 sugars and a stick", function() {
			var command = "H:2:0.6";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker makes 1 chocolate with 2 sugars and a stick');
		});

		it("should return coffee with 2 sugars and a stick", function() {
			var command = "C:2:0.6";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker makes 1 coffee with 2 sugars and a stick');
		});

		//No sugar
		it("should return tea with no sugar ", function() {
			var command = "T:0:0.4";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker makes 1 tea with no sugar');
		});
	});

	describe("Error :", function() {
		it("should return an error if type of drink is not available", function() {
			var command = "M:1:0.6";
			expect(commandFunction.executeCommand(command)).toEqual('Drink maker forwards any message received onto the coffee machine interface for the customer to see');
		});

		it("should return an error if amount is not equal or superior to the price", function() {
			var command = "T:1:0.2";
			expect(commandFunction.executeCommand(command)).toEqual('Not enough money, 0.2$ is missing');
		});
	});
});