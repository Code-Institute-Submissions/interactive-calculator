describe("pushToCalculation() outcomes", function(){
    it("results", function(){
        calculation = ["3", "x", "6", "+"];
        newNumber = ["18"];
        /*let realCalculation = calculation.join(" ").replace(/x/g , "*");*/
        expect(pushToCalculation(newNumber)).toEqual([ ]);
        expect(calculation).toEqual(["3", "x", "6", "+", "18"]);
    })
}),
describe("empty() outcomes", function(){
    it("results", function(){
        calculation = ["3", "x", "6", "+"];
        newNumber = ["5"];
        newOperator = ["-"];
        expect(empty(newNumber)).toEqual([]);
        expect(empty(newOperator)).toEqual([]);
        expect(empty(calculation)).toEqual([]);
    })
}),
describe("displayCalculation() outcomes", function() {
    it("IF the string length is 0, displayedCalc.innerHTML should display 'cleared'. ", function(){
        calculation = [];
        expect(displayCalculation()).toBe("cleared");
        expect(displayCalculation()).not.toBe("");
        expect(displayCalculation()).not.toBe("... ");
    }),
    it("displayCalcuclation() should display calculation array elements joined as a string, while calculation array shouldn't change afterwards", function(){
        calculation = ["3", "+", "4."];
        expect(displayCalculation()).toBe("3 + 4.");
        expect(displayCalculation()).not.toBe(["3", "+", "4."]);
    }),
    it(`IF the string length is greater than 34 and displayCalculation() is called, displayed-calc should display "... " added to a shortened version of the calculation 
    (the calculation array joined together and shortened in length, from the end of the calculation and back 34 in length);
    However if displayFullCalc is turned to true from false, the full calculation is displayed from the #displayed-entire-calc DOM element in full length;
    '#displayed-calc' displays "calculation displayed above" in green font instead due to the 'green-display-text' being added to its class list; 
    This is to alert the user that the calculation is now displayed at '#displayed-entire-calc'; 
    switchCalculationDisplay.onclick() switches displayFullCalc's value from false to true, and visa versa, and calls the displayCalculation() function.
    Turning displayFullCalc's value from true to false also removes the 'green-display-text' class from #displayed-calc's class list, turning the text back to white.
    `, function(){
        displayFullCalc = false;
        calculation = ["5", "+", "5", "+", "666", "+", "3", "+", "3", "+", "3", "+", "3", "+", "3", "+", "3"];
        
        expect(displayCalculation()).toBe(displayedCalc.innerHTML = "... + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe(displayedCalc.innerHTML = "5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe(displayedCalc.innerHTML = "... 5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        
        expect(displayedEntireCalc.innerHTML).toBe("");
        expect(displayedEntireCalc.innerHTML).not.toBe("5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");

        expect(switchCalculationDisplay.onclick()).toBe("Hide Full Calculation");/*turns displayFullCalc to true*/
        expect(displayFullCalc).toBe(true);

        expect(displayCalculation()).toBe(displayedEntireCalc.innerHTML = "5 + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayCalculation()).not.toBe(displayedEntireCalc.innerHTML = "... + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        
        expect(displayedCalc.innerHTML).toBe("calculation displayed above");
        expect(displayedCalc.innerHTML).not.toBe("... + 5 + 666 + 3 + 3 + 3 + 3 + 3 + 3");
        expect(displayedCalc.innerHTML).not.toBe("");
        expect(displayedCalc.classList.length).toBe(2);
        expect(displayedCalc.classList[displayedCalc.classList.length - 1]).toBe('green-display-text');/* light green */

        expect(displayedCalc.style.color).not.toBe('rgb(236, 240, 241)');
        
        expect(switchCalculationDisplay.onclick()).toBe("Show Full Calculation"); /*reset for next test*/
        expect(displayFullCalc).toBe(false);
        expect(displayedCalc.classList.length).toBe(1);
        expect(displayedCalc.classList[displayedCalc.classList.length - 1]).toBe('displayed-calc');/* light green */
    
    })
}),
describe("clearInputs() outcomes", function(){
    it("Should clear input arrays only. The calculation array does not change. Returns the newNumber array", function(){
        calculation = ["3", "+", "4", "+"]
        newNumber = ["2"];
        newOperator = [];

        expect(clearInputs()).toEqual([]);
        expect(clearInputs()).toEqual(newNumber);
         
        /* doesn't return a value, just changes two global values*/
        expect(newNumber).toEqual([]);
        expect(newNumber).not.toEqual(["2"]);
        expect(newOperator).toEqual([]);
        
        expect(calculation).toEqual(["3", "+", "4", "+"]);
        expect(calculation).not.toEqual([]);
    })
}),
describe("clearAll() outcomes", function(){
    it("should clear calculation and input arrays and return disableDec as false.", function(){
        calculation = ["3", "+", "4."]
        newNumber = [];
        newOperator = ["*"];
        disableDec = true;

        expect(clearAll()).toBe(false);
        /* doesn't return a value, just changes four global values*/

        expect(newNumber).toEqual([]);
        expect(newOperator).toEqual([]);
        expect(newOperator).not.toEqual(["*"]);
        expect(calculation).toEqual([]);
        expect(calculation).not.toEqual(["3", "+", "4."]);
        expect(disableDec).toBe(false);
        expect(disableDec).not.toBe(true);
    })
}),
describe("clearAllAndDisplay() outcomes", function() {
    it("clearAllAndDisplay() should activate clearAll(), display 'cleared' in displayedCalc HTML and display '0' in displayedInput HTML.", function(){
        calculation = ["3", "+", "4"];
        newNumber = [];
        newOperator = ["*"];
        expect(clearAllAndDisplay()).toBe("0");
        expect(clearAllAndDisplay()).not.toBe("*");
        expect(clearAllAndDisplay()).not.toBe("");
        expect(newOperator).toEqual([]);
        expect(newOperator).not.toEqual(["0"]);
        expect(newOperator).not.toEqual(["*"]);
        expect(calculation).toEqual([]);
        expect(calculation).not.toEqual(["3", "+", "4"]);
        expect(newNumber).toEqual([]);
        expect(newNumber).not.toEqual(["0"]);
        expect(displayedCalc.innerHTML || displayedFullCalc.innerHTML).toBe("cleared");
        expect(displayedCalc.innerHTML || displayedFullCalc.innerHTML).not.toBe("3 + 4.");
        expect(displayedInput.innerHTML).toBe("0");
        expect(displayedInput.innerHTML).not.toBe("*");
    })
}),
describe('clearPageAlerts() outcomes; clearPageAlerts() if called from all functions. It is designed clean all alerts or restart them.', function(){
    it(`Removes "success-border" class from #mainCalculator and #display DOM elements;
        Removes "warning-border" class from #saveCalculation and #calculationDescriptionInput DOM elements;
        Empties loadStatus.innerHTML, warningStatus.innerHTML and saveStatus.innerHTML;`, function(){
        calculation = ["4"];
        newNumber = [];
        newOperator = ["+"];
        calculationsList = [
            Object({ 
                savedDescription: 'first object',
                savedCalculation: [ '567', '+' ], 
                savedNumber: [ '3' ], 
                savedOperator: [  ], 
                displayedInput: '3', 
                savedDecimalStatus: false 
            })
        ];

        expect(displaySavedCalculations()).toBe(undefined);
        let loadCalc = document.getElementById("load-calc" + 0);

        expect(loadCalc.onclick()).toBe(calculatorStatus.innerHTML = "Calculation data loaded succesfully!");
        expect(calculatorStatus.innerHTML).not.toBe("");
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(true);
        expect(display.className.split(' ').includes("success-border")).toBe(true);

        expect(clearPageAlerts()).toBe(undefined); 
       
        expect(calculatorStatus.innerHTML).toBe("");
        expect(calculatorStatus.innerHTML).not.toBe("Calculator data loaded succesfully!")
        expect(mainCalculator.className.split(' ').includes("success-border")).toBe(false);
        expect(display.className.split(' ').includes("success-border")).toBe(false);

        expect(saveCalculation.onclick()).toBe(calculatorStatus.innerHTML  = "Calculator data saved to Calculation Backup!");
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe('Calculator data saved to Calculation Backup!');
        expect(saveCalculation.onclick()).toBe(warningStatus.innerHTML = `Can not save! Calculations List has exceeded it's data limit!`);
        
        expect(warningStatus.innerHTML).toBe(`Can not save! Calculations List has exceeded it's data limit!`);
        expect(saveStatus.innerHTML).not.toBe('Calculation data saved below!');
        expect(warningStatus.innerHTML).not.toBe('');
        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(true);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(true);
        
        expect(clearPageAlerts()).toBe(undefined); 
        
        expect(saveStatus.innerHTML).toBe("");
        expect(warningStatus.innerHTML).not.toBe(`Can not save! Calculations List has exceeded it's data limit!`);
        expect(saveStatus.innerHTML).not.toBe('Calculation data saved below!');
        expect(calculatorStatus.innerHTML).not.toBe('Calculator data saved to Calculation Backup!');
        expect(calculatorStatus.innerHTML).not.toBe('Calculat data saved to Calculation Backup!');
        expect(saveCalculation.className.split(' ').includes("warning-border")).toBe(false);
        expect(calculationDescriptionInput.className.split(' ').includes("warning-border")).toBe(false);
    })
})