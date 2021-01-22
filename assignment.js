//code1: kilometerToMeter.
function kilometerToMeter(kilometers){

  if(isNaN(kilometers)){
    return "please give Kilometers value in numeric";
  }else{
    //1 kilometer = 1000 meters.
    var getMeters = kilometers * 1000;
    return getMeters;
  }
}


//code2: budgetCalculator.
function budgetCalculator(watch, phone, laptop){

  //watch, phone, laptop per unit cost price.
  var watchPerPrice = 50;
  var phonePerPrice = 100;
  var laptopPerPrice = 500;

  var totalCost =( watch * watchPerPrice + phone * phonePerPrice + laptop * laptopPerPrice );
  return totalCost;
}


//code3: hotelCost.
function hotelCost(days){
  
  if(days>0 && days<=10){
    //1 to 10, per day 100 taka.
    return days * 100;
  }else if(days >10 && days<=20){
    //11 to 20 , per day 80 taka.
    return (10 *100) + (days - 10)*80;
  }else{
    //21 to ......per day 50.
    return (10 *100) + (10 * 80) + (days - 20)*50;
  }
}


//code4: megaFriend.
function megaFriend(friends){

  var longestName = "";

  for( var i=0; i<friends.length; i++){
    if(longestName.length < friends[i].length){
      longestName = friends[i];
    }
  }
  return longestName;
}