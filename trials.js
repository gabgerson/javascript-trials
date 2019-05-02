// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
  ['home', '510-867-5309'],
  ['mobile', '415-555-1212'],
  ['business', '415-552-2121']
]);

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function showAccountInfo(accountHolder, accountNumber, businessName) {
  console.log(`Account Holder: ${accountHolder}`);
  console.log(`Account Number: ${accountNumber}`);
  console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
  console.log('Address:')
  for (let address of addresses) {
    console.log(address);
  }
}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers) {

  console.log('Phone Numbers');
  for (let[type, number]of phoneNumbers) {
    console.log(
      `${type}:${number}`
      );
  }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
const accountTransactions = new Map( [
  ])

// Add function to add transactions
function addTransaction(date, amount) {
  accountTransactions.set(date, amount);
}

// Use the function to add transactions
addTransaction('may-2', -500)
addTransaction('may-14', +10000)
addTransaction('may-15', -100)
addTransaction('may-21', -320)
addTransaction('may-29', +2200)

// Add function to show balance status
function showBalanceStatus(balance) {
  if (balance < 0) {
    console.log('no more monies... :(');
  } else if (balance < 20) {
    console.log('Warning: You are close to no monies');
  } else {
    console.log('Thankz for your biz');
  }

}

// Add function to show transactions
function showTransactions(accountTransactions, balance) {
  console.log(balance);
  for (let[date, amount] of accountTransactions) {
    console.log(`Date:${date}`);
    if (amount > 0) {
      console.log('DEPOSIT!!!!');
    } else {
      console.log('!!!!!!WITHDRAWAL!!!!!!!!');
    } 
    console.log(amount);
    console.log(balance += amount);
    if (balance < 0) {
      console.log(balance -= 25)
    }
  } showBalanceStatus(balance)
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info

const customer = {
  accountHolder: accountHolder,
  accountNumber: accountNumber,
  businessName: businessName,
  addresses: addresses,
  phoneNumbers: phoneNumbers,
  accountTransactions: accountTransactions,
  balance: 26000
};

// Function to add customer attributes

function addFavMelonAndNumPets(customer, favMelon='Cantaloupe', numPets='0') {
  customer.favMelon = favMelon;
  customer.numPets = numPets;
};


// Add attributes for this user
addFavMelonAndNumPets(customer, 'casaba', 2);

///////////////////////////////////////////////////////
// Getting a Business Loan
// function businessLoan(income, customer) {
//   if (income < 100000) {
//     let interestRate = .08;
//     console.log(interestRate);
//     if (customer.favMelon === 'casaba' || customer.numPets > 5){
//       let interestRate =.05;
//       console.log(interestRate);
//     }
//   } else if (100000 <= income >= 200000) {
//     let interestRate = .07;
//     console.log(interestRate);
//       if (customer.favMelon === 'casaba' || customer.numPets > 5){
//         let interestRate =.04;
//         console.log(interestRate);
//   }

// }}



function businessLoan(income, customer) {

  let interestRate;
  if (income < 100000) {
    interestRate = .08;
      if (customer.favMelon === 'casaba' || customer.numPets > 5){
      interestRate =.05;}
    } else if (100000 <= income <= 200000) {
    interestRate = .07;
    if (customer.favMelon === 'casaba' || customer.numPets > 5){
        interestRate =.04;}
    } else {
      interestRate = .04;
    }

    return interestRate;
}

// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report
function accountReport(customer) {
  showAccountInfo(customer.accountHolder, customer.accountNumber, customer.businessName);
  showAddresses(customer.addresses);
  showPhoneNums(customer.phoneNumbers);
  showTransactions(customer.accountTransactions, customer.balance);
  if (customer.favMelon === 'casaba' || customer.numPets > 5){
    console.log("Congratz on being a dope customer!");
  } 
}

// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses

//mel=address
const customerAddresses = new Map([
  ['Mel Melitipolski', '707 Birch Street'],
  ['Barbara Brown', '8997 Jones Street'] 
]);

// Write a function to return the address of a given person
function getAddresses(customerName, customerAddresses) {
  return customerAddresses.get(customerName);
}

// Add a function to create an employee schedule for the week 
function getEmployeeSchedule(employees) {

  const week = ['mon', 'tue', 'wed', 'thu', 'fri'];
  const schedule = []

  for (let day of week) {
  const i = Math.floor(Math.random() * employees.length);
  schedule.push(day, employees[i]);
}
  return schedule
}

// Add a function for weekly hours




