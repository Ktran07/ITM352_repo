let attributes  =  "Kevin ; 23; 23.5; -22.5" ;
let pieces = attributes.split(";");

// function validate non-negative interger and return false if the interger is not positive
function is_non_negative_integer(q, returnErrors = false)
{
    errors = []; // assume no errors at first
    if(Number(q) != q) errors.push('Not a number!'); // Check if string is a number value
    if(q < 0) errors.push('Negative value!'); // Check if it is non-negative
    if(parseInt(q) != q) errors.push('Not an integer!'); // Check that it is an integer

    return returnErrors ? errors : (errors.length == 0);
}

for (let i = 0; i < pieces.length; i++) 
   { let validation = isNonNegInt(pieces[i]);
    console.log(piece + "is a non-negative integer:" + isNonNegInt(validation));  
   } 

/* function checkIt (item, index) 
{
console.log(`part ${index} is ${(isNonNegInt(item)?'a':'not a')} quantity`);
}
pieces.forEach(checkIt);
*/

pieces.forEach((item, index) => {
    console.log(`part ${index} is ${(isNonNegInt(item) ? 'a' : 'not a')} quantity`);
});

function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);
        picture_data = "image data: XOXOXO";
        callback(picture_data);
    }, 3 * 1000);
}

function process(picture) {
    console.log(`Processing ${picture}`);
}

let url = 'https://www.example.com/big_pic.jpg';

download(url, process);
