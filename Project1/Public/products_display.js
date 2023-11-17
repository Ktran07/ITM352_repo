// Products_display.js _ Kevin Tran
// Initialize products array

/*

// Function to handle the purchase button click
async function purchaseAll() {
    // Iterate through all products
    for (let index = 0; index < products.length; index++) {
        const qtyInput = document.getElementById(`quantityTextbox_${index}`);
        const qty = parseInt(qtyInput.value);


// Make a POST request to the server endpoint for validation
        const response = await fetch('/validateQuantity', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ quantity: qty }),
        });


        const result = await response.json();
        const errorMessage = result.errorMessage;

        // Display the error message or proceed with further actions
        if (errorMessage) {
            document.getElementById(`validationMessage_${index}`).innerHTML = `<span style="color: darkred; font-weight: bold;">${errorMessage}</span>`;
        } else {
            // Clear validation message
            document.getElementById(`validationMessage_${index}`).innerText = '';


            // Deduct the purchased quantity from available inventory
            products[index].qty_available -= qty;
            products[index].total_sold += qty;
        }
    }


    // Update the HTML to reflect the changes
    displayProducts();


    // Perform additional actions or submit the form
    document.getElementById('purchaseAllForm').submit();
}


// Function to handle the purchase button click for an individual product
async function purchase(event, index) {
    event.preventDefault(); // Prevent the default form submission


    const qtyInput = document.getElementById(`quantityTextbox_${index}`);
    const qty = parseInt(qtyInput.value);


    // Make a POST request to the server endpoint for validation
    const response = await fetch('/validateQuantity', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ quantity: qty }),
    });


    const result = await response.json();
    const errorMessage = result.errorMessage;


    // Display the error message or proceed with further actions
    if (errorMessage) {
        document.getElementById(`validationMessage_${index}`).innerHTML = `<span style="color: darkred; font-weight: bold;">${errorMessage}</span>`;
    } else {
        // Clear validation message
        document.getElementById(`validationMessage_${index}`).innerText = '';


        // Perform additional actions or submit the form
        document.getElementById(`purchaseForm_${index}`).submit();


        // Deduct the purchased quantity from available inventory
        products[index].qty_available -= qty;
        products[index].total_sold += qty;


        // Update the HTML to reflect the changes
        displayProducts();


    // Redirect to invoice.html with parameters
window.location.href = `invoice.html?productName=${encodeURIComponent(product.name)}&quantity=${qty}&price=${product.price}`;
    }
}


// Function to display products on the webpage
function displayProducts() {
    try {
        const productList = document.getElementById('productList');
        if (!productList) {
            throw new Error('Product list element not found');
        }
        productList.innerHTML = ''; // Clear existing product list


    // Product information, including the available quantity, will be updated
    // based on the actual data retrieved from the server when the HTML is loaded
    // Dynamically includes the current inventory quantity
    // for each product in HTML. (product.qty_available)
  products.forEach((product, index) => {
        productList.innerHTML += `
            <div class="col-sm-6">
                <div class="bg-green text-white p-3 product-container">
                    <img src="${product.image}" alt="${product.name}" style="width: 300px; height: 300px;">
                    <h2 class="productName">${product.name}</h2>
                    <p class="productInfo">
                        <span class="productPrice">$${product.price}</span>
                        <span class="productAvailability"> <b> Available: </b> ${product.qty_available}</span>
                    </p>
                    <form id="purchaseForm_${index}" action="./purchase" method="POST">
                        <label for="quantityTextbox_${index}"> <b> Quantity: </b> </label>
                        <input type="text" name="quantity" id="quantityTextbox_${index}" min="1" value="">
                        <button type="button" class="btn btn-success" onclick="purchase(event, ${index})">Purchase</button>
                    </form>
                    <div id="validationMessage_${index}" style="color: red;"></div>
                </div>
            </div>
   `;
        });
    } catch (error) {
        console.error('Error displaying products:', error);
    }
}

// Initial display of products
displayProducts();
*/










// FIXING [LIKE OTHERS]  // 
window.onload = function () {

// // Define a variable that points to the form on the DOM to dynamically populate the form
const form = document.getElementById('productForm');
let formHTML = '';


// Loop
for (let i in products) {
    formHTML += `
    <div class="card mb-3 bg-light text-dark">
            <div class="row g-0">
                <div class="col-md-4">
    <img src="${products[i]["image"]} "style="width:430px; height:430px; class="img-fluid rounded-start"">
    </div>
    <div class="col-md-8">
        <div class="card-body">

        <h5 class="card-title text-success">         ${products[i]["name"]} </h5>
        <p class="card-text">                        $${products[i]["price"]} </p>
    
        <p class="card-text"> Available:             ${products[i]["qty_available"]}   </p>
    <p class="card-text"> Sold:                      ${products[i]["total_sold"]}   </p>
    </div>
    </div>
</div>
</div>`;


// Onkeyup event is used to call the checkQuantityTextbox function, to perform validation. 
// Quantity 
    formHTML += `
    <label for="quantity_textbox_${i}"> Quantity:               </label> <input type="text" id="quantity_textbox_${i}" name="quantity_textbox[${i}]" onkeyup="checkQuantityTextbox(this);">
    <span id="quantity_textbox[${i}]_message"> </span>
     `; 
     };
                         
// Ensure the submit button is part of the form
formHTML+= `<br> <input type="submit" value="Purchase">`;
// Push the form content to the DOM
     form.innerHTML=formHTML;
    };





// handle the custom cursor:
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
});




