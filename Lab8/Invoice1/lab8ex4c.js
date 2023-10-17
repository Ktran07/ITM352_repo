// Define the product_quantities array
let product_quantities=[2,1,3,1,1];

// Lab8 part 3.2
// array of all products
// corresponds to product_quantities array
// product_quantities[i] is the quantity for products[i]
let products = [
    { 'name': 'small gumball', 'price': 0.02 },
    { 'name': 'medium gumball', 'price': 0.05 },
    { 'name': 'large gumball', 'price': 0.07 },
    { 'name': 'small jawbreaker', 'price': 0.06 },
    { 'name': 'large jawbreaker', 'price': 0.10 }
   ];

// Iterate through product_quantities and print each element in a table
document.write("<table>");
// document.write("<tr><th>Product #</th><th>Quantity</th></tr>");

// Lab8 part 3.2
document.write("<tr><th>Product #</th><th>Name</th><th>Price</th><th>Quantity</th><th>Extended Cost</th></tr>");


for (let i=0; i < product_quantities.length; i++)
{  
   
    let quantity = product_quantities[i];
    let product = products[i];
    let extended_cost = quantity * product.price;

   //Create new row for each product and add a hover effect
   let newRow = document.createElement('tr');
   newRow.innerHTML = `
       <td>${i+1}</td>
       <td>${product.name}</td>
       <td>${product.price.toFixed(2)}</td>
       <td>${quantity}</td>
       <td>${extended_cost.toFixed(2)}</td>  `;
    // Append new row to table
        document.querySelector('table').appendChild(newRow);
        
        newRow.addEventListener('mouseover', function() 
            {newRow.style.backgroundColor = 'yellow';}  );

        newRow.addEventListener('mouseout', function() 
            {newRow.style.backgroundColor = ''; }   );

            newRow.addEventListener('click', function() {
                document.querySelector('table').deleteRow(newRow.rowIndex);
            }); 
}

// Lab 8 part 4.1
function addNewRow () {
    let table = document.querySelector('table');

    let newRow = table.insertRow();
    newRow.innerHTML = `
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
        <td> blank </td>
                        `;
    newRow.addEventListener('mouseover', function() 
            {newRow.style.backgroundColor = 'yellow';}  );
                        
    newRow.addEventListener('mouseout', function() 
            {newRow.style.backgroundColor = ''; }   );

    newRow.addEventListener('click', function() {
            document.querySelector('table').deleteRow(newRow.rowIndex);
            });
                        };


// Lab8 part 4.2
let addButton = document.createElement('button');
addButton.textContent = 'Add New Row';
addButton.addEventListener('click', addNewRow);
document.body.appendChild(addButton);

/*

// Function to delete the last row of the table
function deleteClickedRow() {
    let table = document.querySelector('table');
    let rowCount = table.rows.length;  

    if (rowCount > 1) 
    {table.deleteRow(rowCount-1);};  // delete the last row
                         };
                         
*/