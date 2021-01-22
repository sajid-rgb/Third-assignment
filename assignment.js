

function kilometerToMeter(kilometer) {
    //This if used for check input is negative or not
    if (kilometer < 0 || typeof (kilometer) != "number") {
        return 'Wrong input';
    }
    //This else is the main part of the code
    else {
        var meter = kilometer * 1000;
        return meter;
    }
}
/*var output = kilometerToMeter(5.4);
console.log(output);*/

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    //This if is used for check any of the input nagetive or not
    if (watch < 0 || mobile < 0 || laptop < 0) {
        return 'You may be put any minus input.Please check'
    }
    //This else if check type of the input number or not
    else if (typeof (watch, mobile, laptop) != "number") {
        return 'you may be put a string or miss one value'
    }
    //This else is the main part of the code
    else {
        var totalBudget = watchPrice * watch + mobilePrice * mobile + laptopPrice * laptop;
        return totalBudget;
    }
}
/*var myChoice = budgetCalculator(9, 0, 0);
console.log(myChoice);*/

function hotelCost(spendDay) {
    var baseFare = 100;
    //This if check the input negative or not and also check the type of input.Type must be number
    if (spendDay < 0 || typeof (spendDay) != "number") {
        return 'Wrong input Dear, Try again';
    }
    //This else if calcalate Fare if the spendDay between 1 t0 10
    else if (spendDay <= 10) {
        var fare = spendDay * baseFare;
        return fare;
    }
    //This else if calcalate Fare if the spendDay between 10 t0 20
    else if (spendDay > 10 && spendDay <= 20) {
        var fare = 10 * baseFare + (spendDay - 10) * (baseFare - 20);
        return fare;
    }
    //This else calcalate Fare if the spendDay exceeds 20
    else {
        var fare = 10 * baseFare + (20 - 10) * (baseFare - 20) + (spendDay - 20) * (baseFare - 50);
        return fare;
    }
}
/*var Day = hotelCost(70);
console.log(Day);*/

function megaFriend(friendsName) {
    //This if used for check empty array or not
    if (friendsName.length == 0) {
        return 'You must have a friend';
    }
    //This else is the main part of the code
    else {
        //initialized first array element length as a maximum length and first element as a myBigFreind
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
