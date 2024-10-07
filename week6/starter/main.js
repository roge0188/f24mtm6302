// Variables
// 1. Create a Categories Array

const categories = ['All', 'T-Shirt', 'Shoes'];
let cart = []
/**
 * Displays the list of categories as HTML list items on the page.
 * 
 * /

//2. Display Categories Dynamically

// Create a function to display the categories | `function`/** */

function displayCatergories() {

    // Retrieve the HTML element where the categories will be displayed | `getElementById`
    const $catergories = document.getElementById('catergories');
    // Create an empty list (array) to store the category elements | `const`, `array`
    const htmlTemplate = [];
    // Loop through each item in the categories array | `forEach`
    categories.forEach(catergory => htmlTemplate.push(`<li 
    class="nav-item">
        <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1">${catergory}</a>
        </li>`))
    // Create an HTML list item for each category | `template literal`, `push`
    // Combine the list of category elements into a single string | `join`
    // Insert the HTML into the categories element | `innerHTML`
    $catergories.innerHTML = htmlTemplate.join('');
}


//3. Refactor with map()

// Create a function to display the categories | `function`
function displayCatergories() {

    // Retrieve the HTML element where the categories will be displayed | `getElementById`
    // Create a new array (list) by mapping over each category and save it in a variable | `map`
    // Create an HTML list item for each category | `template literal`
    const htmlTemplate = categories.map((category) =>
        `<li class="nav-item">
             <a href="#"  class="nav-link btn btn-light btn-sm rounded-0 mx-1">${catergory}</a>
        </li>`)
    // Combine the list of category elements into a single string | `join`
    // Insert the combined HTML into the categories element | `innerHTML`
    console.log(htmlTemplate)
    documentent.getElementById('categories').innerHTML = htmlTemplate.join('')
}
/** 
 * Adds a product to the cart and updates the cart display.
 * @param {string} product - The name of the product to be added.
 */
function.push(product) {


    // 5. Refactor with map()
    // Initialize an empty cart array | `let`

    // Create a function to add a product to the cart. Receive the product as a parameter | `function`

    // Add the product to the cart array | `push`

    // Display the product
    // Create an array by mapping over each item in the cart | `map`
    // Create an HTML list item for each product | `template literal`
    // Combine the mapped list of HTML items into a single string | `join`

    // Insert the combined HTML into the element with the ID 'cart' | `getElementById`, `innerHTML`
    document.getElementById(cart).innerHTML = cart.map((product) =>
        `<li>$(product)</li>`).join('')


}
// 6. Refactor Using JavaScript Methods to Create HTML Elements


/**
 * Updates the cart display on the webpage by generating a list of
 * the products currently in the cart.
 */
// 7. Create the function to display the cart
function displayCart() {
    // document.getElementById('cart').innerHTML =cart.map ( (product) =>
    //     `<li>$product</li>` ).join('')

    // Display the product
    // Retrieve the cart element from the DOM | `getElementById`
    const $cart = document.getElementById('cart');
    // Clear the existing cart items | `innerHTML = ''`
    // Loop through each item in the cart array | `forEach`
    cart.forEach(product => {
        // Create a new list item element | `createElement('li')`

        // Create a text node for the item | `createTextNode`
        // Append the text node to the list item | `appendChild`
        // Append the list item to the cart element | `appendChild`
    })
}

/**
 * Removes a product from the cart by filtering out the selected product,
 * and updates the cart display.
 * @param {string} product - The name of the product to be removed.
 */
// 8. Remove a Product from the Cart


// 9. Refactor Using filter()