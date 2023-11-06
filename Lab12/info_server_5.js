let  express = require('express');
let app = express();

app.use(express.static(__dirname + '/public'));

app.get('/test', function(req, res){
    res.send('app.get for test was executed');
    console.log('app.get for test was executed');
});

let products = require(__dirname + '/products.json');

products.forEach( (prod,i) => {prod.total_sold = 0});

app.get("/products.js", function (request, response, next) {
   response.type('.js');
   let products_str = `let products = ${JSON.stringify(products)};`;
   response.send(products_str);
});

app.use(express.urlencoded({ extended: true }));

app.post("/process_form", function (request, response) {
    let brand = products[0]['brand'];
    let brand_price = products[0]['price'];
  //  response.send(request.body); 
  let q = Number(request.body['qty_textbox']);
    console.log("The input value is... " + q);
    //Increments the number of items sold for the first item in products
    products[0].total_sold += q;

    let validationMessage = validateQuantity(q);
    
    if (validationMessage === "") {
      response.redirect('receipt.html?quantity='+q);
    } else {
        response.redirect(`order.html?error=${validationMessage}&qty_textbox=${q}.
        `);
    }
    });
app.all('*', function (request, response, next) {
    //response.send(request.method + ' to path ' + request.path);
    console.log(request.method + ' to path ' + request.path);
    next();
});

app.listen(8080, () => console.log(`listening on port 8080`)); // note the use of an anonymous function here to do a callback

function validateQuantity(quantity) {
    let errorMessage = "";

    switch (true) {
        case isNaN(quantity):
            errorMessage = "Error: Not a number. Please enter a non-negative quantity to order.";
            break;
        case quantity <= 0 && !Number.isInteger(quantity):
            errorMessage = "Error: The quantity entered is negative and not an integer. Please enter a non-negative quantity to order.";
            break;
        case quantity <= 0:
            errorMessage = "Error: The quantity entered is negative. Please enter a non-negative quantity to order.";
            break;
        case !Number.isInteger(quantity):
            errorMessage = "Error: Not an integer. Please enter a non-negative quantity to order.";
            break;
            default:
                errorMessage = "";
                break;
    }

    return errorMessage;
}