function whichschool (age){
    if(age < 13)  {
       return 'elementary school'
    } else if (18 => age >= 13) {
       return 'secondary school'
    } else {
        return 'university'
    }
}
console.log(whichschool(18));
