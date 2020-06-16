// BUDGET CONTROLLER
var budgetController = (function(){



})();


// UI CONTROLLER
var UIController = (function(){



})();


// GLOBAL  CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // Get the field input data
        // var description = document.querySelector('.add__description'); // Reference to Description
        // var inputValue = document.querySelector('.add__value'); // Reference to Value

        // Add the item to the budget controller

        // Add new item to the UI

        // Calculate budget 

        // Display budget in UI

        console.log('ctrlAddItem function is Executed!');
    }


    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem); // If button is clicked run ctrlAddItem Function!!

    // Global scope and pressed key of enter 
    document.addEventListener('keypress',function(event){

        if(event.keyCode === 13 || event.which === 13){
            ctrlAddItem();  // If keyKode 13 is pressed run ctrlAddItem Function!!
        }

    });

   
})(budgetController, UIController);
