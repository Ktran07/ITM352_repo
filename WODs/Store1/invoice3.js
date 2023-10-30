// Fetch the query string parameters
const params = new URL(document.location).searchParams;

// Loop through the expected quantity parameters and update the quantity array
let quantity=[];

for (let i = 0; i < itemData.length; i++) 
{
  let quantityValue = params.get(`quantity${i}`);
  if (quantityValue !== null) {
      quantity[itemData[i].quantityIndex] = Number(quantityValue);
  }
}


// import data from products.js into this file
import {itemData} from './products.js';

let subtotal = 0;
let shipping = 0;
let tax_rate = 0.0575;
let tax = 0;
let total = 0;

generateItemRows();

// Compute shipping
if(subtotal<=50) 
  {shipping=2;} else if(subtotal<=100) 
  {shipping=5;} else {shipping= subtotal * 0.05;}

// Compute sales tax
tax = tax_rate * subtotal;

// Compute total
total = subtotal + tax + shipping;

// Set the subtotal, tax, and total cells
document.getElementById('subtotal_cell').innerHTML = '$' + subtotal.toFixed(2);
document.getElementById('tax_cell').innerHTML = '$' + tax.toFixed(2);
document.getElementById('shipping_cell').innerHTML = '$' + shipping.toFixed(2);
document.getElementById('total_cell').innerHTML = `$${total.toFixed(2)}`;


//  Validate quantity function
function validateQuantity(quantity)
{
  if(isNaN(quantity)) 
    { return "Not a Number";} 
  else if (quantity<0 && !Number.isInteger(quantity)) 
    { return "Negative Inventory and not an Integer";} 
  else if (quantity <0) 
    { return "Negative Inventory"; } 
  else if(!Number.isInteger(quantity)) 
    { return "Not an Integer"; } 
  else 
    { return""; } 
}



// Function to generate table rows  
function generateItemRows() 
{ 
  let table = document.getElementById('invoiceTable');
  table.innerHTML = '';
  let hasErrors = false;

  // Loop itemData and quantity arrays
  for(let i=0; i < itemData.length;i++)
  { let item = itemData[i];
    let itemQuantity = quantity[item.quantityIndex];  
    let validationMessage = validateQuantity(itemQuantity);
    if(validationMessage !== "")
      { hasErrors = true;
        let row = table.insertRow();
        row.insertCell(0).innerHTML = item.brand;
        row.insertCell(1).innerHTML = validationMessage;
      }
      else if(itemQuantity > 0)
      { let extendedPrice = item.price * itemQuantity;
        subtotal += extendedPrice;

        let row = table.insertRow();
         row.insertCell(0).innerHTML = item.brand;
         row.insertCell(1).innerHTML = itemQuantity;
         row.insertCell(2).innerHTML = '$' + item.price.toFixed(2);
         row.insertCell(3).innerHTML = '$' + extendedPrice.toFixed(2);
      }
  } 

   // when there is no errors, display the total
   if (!hasErrors) 
   {document.getElementById('total_cell').innerHTML = '$' + total.toFixed(2);};
}



