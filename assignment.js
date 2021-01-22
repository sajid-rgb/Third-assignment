function kilometerToMeter(distanceInKilometer) {
    //This if used for check input is negative or not
    if (distanceInKilometer < 0 || typeof (distanceInKilometer) != "number") {
        return 'Wrong input';
    }
    //This else is the main part of the code
    else {
        var distanceInmeter = distanceInKilometer * 1000;
        return distanceInmeter;
    }
}
/*var output = kilometerToMeter(55);
console.log(output);*/
function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    //This if is used for check any of the input nagetive or not
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return 'You may be put any minus input.Please check'
    }
    //This else if check type of the input integer number or not
    else if (typeof (watch, mobile, laptop) != "number" || watch % 1 != 0 || laptop % 1 != 0 || mobile % 1 != 0) {
        return 'Please enter positive integer number.[If you do not want to buy any product enter quantity 0 for it.]'
    }
    //This else is the main part of the code
    else {
        var totalBudget = watchPrice * watch + mobilePrice * mobile + laptopPrice * laptop;
        return totalBudget;
    }
}
/*var myChoice = budgetCalculator(0, 5,3);
console.log(myChoice);*/
function hotelCost(stayDays) {
    var baseFare = 100;
    //if someone want to spend extra time after complete his period he must pay full fare for this day
    var daysNumber = Math.ceil(stayDays);
    //This if check the input negative or not and also check the type of input.Type must be number
    if (stayDays < 0 || typeof (stayDays) != "number") {
        return 'Wrong input, Try again';
    }
    //This else if calculate Fare if the stayDays between 1 to 10
    else if (stayDays <= 10) {
        var fare = daysNumber * baseFare;
    }
    //This else if calculate Fare if the stayDays between 11 to 20
    else if (stayDays <= 20) {
        var fare = 10 * baseFare + (daysNumber - 10) * (baseFare - 20);
    }
    //This else calculate Fare if the stayDays more than 20
    else {
        var fare = 10 * baseFare + (20 - 10) * (baseFare - 20) + (daysNumber - 20) * (baseFare - 50);
    }
    return fare;
}
/*var Day = hotelCost(10.1);
console.log(Day);*/
function megaFriend(friendsName) {
    //This if used for check empty array or not
    if (friendsName.length == 0) {
        return 'You should have a friend';
    }
    //This else is the main part of the code
    else {
        //initialized first array element length as a maximum length and first element as a myBigFriend
        var maximumLength = friendsName[0].length;
        var myBigFriend = friendsName[0];
        //using loop for separate elements one by one
        for (i = 0; i < friendsName.length; i++) {
            var individualName = friendsName[i];
            //This if used for check the element string or not
            if (typeof (friendsName[i]) != "string") {
                return 'You put a number inside your friendslist.Please check'
            }
            //this else if used for find maximum length of string and store maximum element ony by one  
            else if (individualName.length > maximumLength) {
                maximumLength = individualName.length
                myBigFriend = individualName;
            }
        }
        return myBigFriend;
    }
}
/**var freinds = ["Karim", "Rahim", "Donald Trump", "I am a Big", "No I am your Boss",1234];
var output = megaFriend(freinds);
console.log(output);*/


