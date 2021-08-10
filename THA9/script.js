//1. Create 2 object and try to use call, apply and bind on them

//-->Bind , Call ,Apply
var ab = {
    Keyword : "Apple"
};
var b ={
    Keyword :"Banana"
};
console.log(ab);
function callingKeyword() {
    console.log(this);
}
callingKeyword.call(ab);
const c= callingKeyword.bind(b)
c();

// Spread Operator
var a =[1,2,3,4]
var b =a;
console.log(a);
console.log(b);
b.push(5)
// -->It also adds 5 to a. To prevent this.
var b =[...a]
b.push(5)
console.log(b);
//Now ,It only adds 5 to b only

const DaysbR = {
    DayName:"Day9",
    DaysTotal:21
} 
console.log({...DaysbR ,DayName:"Going_Day10"});