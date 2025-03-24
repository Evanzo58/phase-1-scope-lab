
var customerName = "bob";
var bestCustomer;
let leastFavoriteCustomer = "someone"; 

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    return customerName;
}


function setBestCustomer() {
    bestCustomer = "not bob";
}


function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "new person";
}