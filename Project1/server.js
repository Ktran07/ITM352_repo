// Importing the Express.js framework 
const express = require('express');

// Create an instance of the Express application called "app"
// app will be used to define routes, handle requests, etc
const app = express();

// Monitor all requests regardless of their method (GET, POST, PUT, etc) and their path (URL)
app.all('*', function (request, response, next) {
   console.log(request.method + ' to ' + request.path);
   next();
});

/* Import data from a JSON file containing information about products
__dirname represents the directory of the current module (where server.js is located)
__dirname + "./products.json" specifies the location of products.json
*/
const products = require(__dirname + "/products.json");
 
//For each product in the products array and then sets the quantity sold to 0
products.forEach( (product,i) => {product.qty_sold = 0});

// Define a route for handling a GET request to a path that matches "./products.js"
app.get('/products.js', function(request, response, next) {
	// Send the response as JS
	response.type('.js');
	
	// Create a JS string (products_str) that contains data loaded from the products.json file
	// Convert the JS string into a JSON string and embed it within variable products
	const products_str = `let products = ${JSON.stringify(products)};`;
	
	// Send the string in response to the GET request
	response.send(products_str);
});

// Route all other GET requests to serve static files from a directory named "public"
app.use(express.static(__dirname + '/public'));

//Middleware for POST, parses incoming requests
app.use(express.urlencoded({ extended: true }));

//Updates stock and validates server
app.post("/purchase", function (request, response) {
    let errorMessages = [];
    let allBlank = true;

    for (let i in products) {
        let qtys = Number(request.body[`quantity_textbox_${i}`]) 
        const errorMessage = validateQuantity(qtys, products[i]);

        if (errorMessage === "") {
            // Quantity is valid, update stock
            products[i]['qty_available'] -= qtys;
            products[i]['qty_desired'] = qtys;
            products[i]['qty_sold'] += qtys;
        } else {
            // Accumulate error messages
            errorMessages.push(products[i]['name'] + ' - ' + errorMessage);
        }

        //if any textbox has input, set allBlank to false
        if (request.body[`quantity_textbox_${i}`] !== "") {
            allBlank = false;
        };
    }

    //if all inputs are empty
    if (allBlank && errorMessages.length === 0) {
        errorMessages.push("Error: No quantities inserted.");
    }

    if (errorMessages.length > 0) {
        // Display error messages as alerts instead of redirecting to a new page
        response.send(`<script>alert("${errorMessages.join('\\n')}"); window.location.href = 'products_display.html';</script>`);
    } else {
        // All quantities are valid, redirect
        response.redirect('invoice.html');
    }
});

// Start the server; listen on port 8080 for incoming HTTP requests
app.listen(8080, () => console.log(`listening on port 8080`));



//  
