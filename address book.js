var inquirer = require("inquirer");


var question =
  {
    type: "list",
    name: "menuSelection",
    message: "What do you want to do?",
    choices: ["Create a new address book entry", "Search for existing address book entries", "Exit the program"],
    default: "Create a new address book entry"
  };

// var question2 =
//   {
//     type: "list",
//     name: "menuSelection2",
//     message: "What do you want to do?",
//     choices: ["Create a new address book entry", "Search for existing address book entries", "Exit the program"],
//     default: "Create a new address book entry"
//   };
// var question3 =
//   {
//     type: "list",
//     name: "menuSelection3",
//     message: "What do you want to do?",
//     choices: ["Create a new address book entry", "Search for existing address book entries", "Exit the program"],
//     default: "Create a new address book entry"
//   };
// var question4 =
//   {
//     type: "list",
//     name: "menuSelection4",
//     message: "What do you want to do?",
//     choices: ["Create a new address book entry", "Search for existing address book entries", "Exit the program"],
//     default: "Create a new address book entry"
//   };

inquirer.prompt([question], function( answers ) {
	console.log(answers); 
	if (answers.menuSelection === question.choices[0]) {
	    console.log("Creating New Entry");
	    //exit
	}
	else if (answers.menuSelection === question.choices[1]) {
	    console.log("Searching...");
	    //exit
	}
	else if (answers.menuSelection === question.choices[2]) {
	    console.log("Thank you, Goodbye");
	    //exit
	}
});

/*
var bob = {
    firstName: "Bob",
    lastName: "Smith"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}


function list () {
    var contactsLength = contacts.length;
    	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}


function search(lastName) {
    var contactLength = contacts.length;
    for (var i = 0; i < contactLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}

search("Jones");

function add(firstName,lastName) {
    this.firstName=firstName;
    this.lastName=lastName;
}

//contacts[contacts.length]=new add("yy","yyy","tt","3434434");

list();

*/

