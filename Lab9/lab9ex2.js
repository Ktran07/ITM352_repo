/* let attributes = "Kevin; 23; MIS";
let pieces = attributes.split(";");
console.log (pieces)
*/

// 3a
let attributes  =  "Kevin ; 23; 23.5; -22.5" ;
let pieces = attributes.split(";");

for (let i = 0; i < pieces.length; i++) 
   {
    console.log("Part:", pieces[i]);
    console.log("Data Type:", typeof pieces[i]);
  }; 

// 3b
let invertedString = pieces.join(','); 
console.log(invertedString);