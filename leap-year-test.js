
var year = prompt("enter the year");

function leafyear(year) {
   if (year%4===0) {
       if (year%100===0) {
           if (year%400===0) {
               return "Leaf year";
           }else{
               return "Not leap year";
           }
       }else{
           return "Leap year";
       }
   }else{
       return "Not leap year";
   }
}
alert(leafyear(year));