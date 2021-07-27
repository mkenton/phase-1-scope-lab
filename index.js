var customerName = 'bob';

const leastFavoriteCustomer = 'some initial value'

function upperCaseCustomerName(){
    return customerName.toUpperCase();
}
upperCaseCustomerName()

function setBestCustomer(){
    bestCustomer = 'not bob'
}
setBestCustomer()

function overwriteBestCustomer(bestCustomer){
    bestCustomer = 'maybe bob'
}
   

const leastFavoriteCustomer = 'probably bob'

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'still might be bob, but we can say Jim for now'
    return leastfavoriteCustomer
}