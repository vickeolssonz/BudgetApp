// BUDGET CONTROLLER
var budgetController = (function(){

 
})();


// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue : '.add__value',
        inputButton: '.add__btn'
    }

    return{
        getInput : function(){
            return{ // Returning a OBJ
            type : document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp 
            description : document.querySelector(DOMstrings.inputDescription).value,
            value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        // Exposing the DOMstring to the public OH NOO EVERYONE SEE YOU(!!) Relaxe a bit.. Its ok.. its okey buddy. We want that
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
})();


// GLOBAL  CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    // APPLICAITON START CODE
    var setUpEventlisteners = function(){
        // Store them DOMstrings from the UI Obj
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click',ctrlAddItem); // If button is clicked run ctrlAddItem Function!!

        // Global scope and pressed key of enter 
        document.addEventListener('keypress',function(event){
    
            if(event.keyCode === 13 || event.which === 13){
                ctrlAddItem();  // If keyKode 13 is pressed run ctrlAddItem Function!!
            }
        });

    }  

    var ctrlAddItem = function(){

        // Get the field input data
        var input = UICtrl.getInput(); // Getting a OBJ with the properties of type desc and value 

        console.log(input);
        
        // Add the item to the budget controller

        // Add new item to the UI

        // Calculate budget 

        // Display budget in UI
    }

    return{
        init:function(){
            console.log('Application has started.');
            setUpEventlisteners();
        }
    }
  
})(budgetController, UIController);

// Start application
controller.init();
