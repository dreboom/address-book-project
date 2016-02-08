var inquirer = require("inquirer");
var Table = require('cli-table');


function displayTable(user) {
    var table = new Table();

    table.push({
        "First Name": user.firstName
    }, {
        "Last Name": user.lastName
    }, {
        "Birthday": user.birthday
    }, {
        "Address": user.address
    }, {
        "Phone": user.phone
    }, {
        "Email": user.email

    });



    return table.toString()
}

function Person(firstName, lastName) {
    this.firstName = firstName,
        this.lastName = lastName;
}

var users = [];

var question = {
    type: "list",
    name: "menuSelection",
    message: "What do you want to do?",
    choices: [{
        name: "Create an entry",
        value: "create"
    }, {
        name: "Search an Entry",
        value: "search"
    }, {
        name: "Exit the Program",
        value: "exit"
    }],
    default: "Create a new address book entry"
};

function userInfo(user) {

    if (!user) {
        user = {}
    }

    return [{
            name: "firstName",
            message: "Please enter the first name",
            default: user.firstName
        },

        {
            name: "lastName",
            message: "Please enter the last name",
            default: user.lastName
        }, {
            name: 'birthday',
            message: 'Birthday (Optional)',
            default: user.birthday
        }, {
            name: "address",
            message: "Choose the type(s) of address(es) you would like to add (use <spacebar> to select)",
            type: "checkbox",
            choices: [{
                name: "Home",
            }, {
                name: 'Work',
            }, {
                name: 'Other',
            }],
            default: user.address,
        }, {
            name: 'phone',
            message: 'Choose the type(s) of phone(s) you would like to add (use <spacebar> to select)',
            type: 'checkbox',
            choices: [{
                name: 'Home',
            }, {
                name: 'Work',
            }, {
                name: 'Other',
            }],
            default: user.phone,
        }, {
            name: 'email',
            message: 'Choose the type(s) of email(s) you would like to add (use <spacebar> to select)',
            type: 'checkbox',
            choices: [{
                name: 'Home',
            }, {
                name: 'Work',
            }, {
                name: 'Other',
            }],
            default: user.email,
        }, {
            name: "homeAddress1",
            message: 'Home Address Line 1',
            when: whenAddressHome
        }, {
            name: "homeAddress2",
            message: 'Home Address Line 2 (Optional)',
            when: whenAddressHome
        }, {
            name: "homeCity",
            message: 'Home City',
            when: whenAddressHome
        }, {
            name: "homeProvince",
            message: 'Home Province',
            when: whenAddressHome
        }, {
            name: "homePostalCode",
            message: 'Home Postal Code',
            when: whenAddressHome
        }, {
            name: "homeCountry",
            message: 'Home Country',
            when: whenAddressHome
        }, {
            name: "workAddress1",
            message: 'Work Address Line 1',
            when: whenAddressWork
        }, {
            name: "workAddress2",
            message: 'Work Address Line 2 (Optional)',
            when: whenAddressWork
        }, {
            name: "workCity",
            message: 'Work City',
            when: whenAddressWork
        }, {
            name: "workProvince",
            message: 'Work Province',
            when: whenAddressWork
        }, {
            name: "workPostalCode",
            message: 'Work Postal Code',
            when: whenAddressWork
        }, {
            name: "workCountry",
            message: 'Work Country',
            when: whenAddressWork
        }, {
            name: "otherAddress1",
            message: 'Other Address Line 1',
            when: whenAddressOther
        }, {
            name: "otherAddress2",
            message: 'Other Address Line 2 (Optional)',
            when: whenAddressOther
        }, {
            name: "otherCity",
            message: 'Other City',
            when: whenAddressOther
        }, {
            name: "otherProvince",
            message: 'Other Province',
            when: whenAddressOther
        }, {
            name: "otherPostalCode",
            message: 'Other Postal Code',
            when: whenAddressOther
        }, {
            name: "otherCountry",
            message: 'Other Country',
            when: whenAddressOther
        }, {
            name: "homePhone",
            message: 'Home Phone',
            when: whenPhoneHome
        }, {
            type: "list",
            name: "phoneSelection",
            message: "What type of phone number is this?",
            when: whenPhoneHome,
            choices: [{
                name: "landline",
                value: "Landline"
            }, {
                name: "cellular",
                value: "Cellular"
            }, {
                name: "fax",
                value: "Fax"
            }],
        }, {
            name: "workPhone",
            message: 'Work Phone',
            when: whenPhoneWork
        }, {
            type: "list",
            name: "phoneSelection",
            message: "What type of phone number is this?",
            when: whenPhoneWork,
            choices: [{
                name: "landline",
                value: "Landline"
            }, {
                name: "cellular",
                value: "Cellular"
            }, {
                name: "fax",
                value: "Fax"
            }],
        }, {
            name: "otherPhone",
            message: 'Other Phone',
            when: whenPhoneOther
        }, {
            type: "list",
            name: "phoneSelection",
            message: "What type of phone number is this?",
            when: whenPhoneOther,
            choices: [{
                name: "landline",
                value: "Landline"
            }, {
                name: "cellular",
                value: "Cellular"
            }, {
                name: "fax",
                value: "Fax"
            }],

        }
    ];
}

function whenAddressHome(answers) {
    return answers.address.indexOf('Home') >= 0;
}

function whenAddressWork(answers) {
    return answers.address.indexOf('Work') >= 0;
}

function whenAddressOther(answers) {
    return answers.address.indexOf('Other') >= 0;
}

function whenPhoneHome(answers) {
    return answers.phone.indexOf('Home') >= 0;
}

function whenPhoneWork(answers) {
    return answers.phone.indexOf('Work') >= 0;
}

function whenPhoneOther(answers) {
    return answers.phone.indexOf('Other') >= 0;
}




var searchInfo = [{
    name: "searchName",
    message: "Please enter the name you would like to search for:"
}];

var newPrompt = {
    type: 'list',
    name: "nextMove",
    message: "What would you like to do now?",
    choices: [{
        name: "Do another search",
        value: "search_again"
    }, {
        name: "Exit to Main Menu",
        value: "exit_mm"
    }],
};

var edit_delContact = {
    type: 'list',
    name: 'edit_Del',
    message: "What would you like to do now?",
    choices: [{
        name: "Edit contact",
        value: "edit_contact"
    }, {
        name: "Delete contact",
        value: "delContact"
    }, {
        name: "Exit to Main Menu",
        value: "exit_mm"
    }],
};

var delContact = {
    type: 'confirm',
    name: 'delThisConact',
    message: 'Are you sure you want to delete this contact?',
    default: false
}

function editCreate(user) {
    inquirer.prompt(userInfo(user), function(answers) {
        user.firstName = answers.firstName;
        user.lastName = answers.lastName;
        console.log(displayTable(user));
        edit_delContacts(user)
    });
}

function delUser(userToDel) {
    inquirer.prompt(delContact, function(answers) {
        if (answers.delContact !== false) {
            users = users.filter(function(user) {
                if (userToDel === user) {
                    return false;
                }
                else {
                    return true;
                }
            });
            address_book();
        }
    })

}

function edit_delContacts(user) {
    inquirer.prompt(edit_delContact, function(answers) {
        if (answers.edit_Del === "edit_contact") {
            editCreate(user);
        }


        if (answers.edit_Del === "delContact") {
            delUser(user);
            //some code to confirm y/n, and delete contact  
        }

        if (answers.edit_Del === "exit_mm") {
            address_book();
        }
    })
}




function searchContacts() {
    inquirer.prompt(searchInfo, function(answers) {
        var resultPrompt = Object.assign({}, newPrompt);
        var searchResult = [];


        users.forEach(
            function Search(person) {
                if (answers.searchName === person.firstName || answers.searchName === person.lastName) {
                    searchResult.push({
                        name: person.firstName + " " + person.lastName,
                        value: person
                    });
                }
                else {
                    console.log("No matches were found!");
                }
            }
        );

        resultPrompt.choices = searchResult.concat(resultPrompt.choices);

        function searchAgain(result) {
            inquirer.prompt(result, function(answers) {
                if (typeof answers.nextMove === "object") {
                    console.log(displayTable(answers.nextMove))
                    edit_delContacts(answers.nextMove) //insert code for edit/delete contact


                }
                if (answers.nextMove === "exit_mm") {
                    address_book();
                }

                if (answers.nextMove === "search_again") {
                    searchContacts();
                }
            });

        }
        searchAgain(resultPrompt);

    });
}

function address_book() {
    inquirer.prompt(question, function(answers) {
        if (answers.menuSelection === "create") {
            inquirer.prompt(userInfo(), function(answers) {
                var user = {};
                user = answers;
                users.push(user);
                console.log(displayTable(user));
                edit_delContacts(user); //delete contact.
            });

        }

        else if (answers.menuSelection === "search") {
            console.log("Searching...");
            searchContacts();
        }




        else if (answers.menuSelection === "exit") {
            console.log("Thank you, Goodbye");
            //exit
        }
    });
}


address_book();
