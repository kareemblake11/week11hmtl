"use strict";

/*

New Perspectives on HTML5 and CSS3, 7th Edition

Tutorial 10

Case Problem 1

Author: Kareem Elnaggar

Date: 04.27.2024

Filename: tc_cart.js

*/

//declare variable totalOrder and initialize it to 0.

var orderTotal = 0;

var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";


// for loop

for (var i = 0; i < item.length; i++) {

  cartHTML += "<tr><td>" + "<img src='tc_41807.png' alt='" + item[i] + "'> </td>";  // Image source updated here

  cartHTML += "<td>" + itemDescription[i] + "</td>";

  cartHTML += "<td>$" + itemPrice[i] + "</td>";

  cartHTML += "<td>" + itemQty[i] + "</td>";

  var itemCost = itemPrice[i]*itemQty[i];

  cartHTML += "<td>$" + itemCost + "</td></tr>";

  orderTotal += itemCost;

}


cartHTML += "<tr><td colspan='4'>Subtotal</td>";

cartHTML += "<td>$" + orderTotal + "</td></tr>";


cartHTML += "</table>";


document.getElementById("cart").innerHTML = cartHTML;


var orderTotal = 0;

var cartHTML = "<table>";

//Adds the HTML written here to the div with the ID of cart.

cartHTML += "<tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";



//Sets up the Cart div area with a table with product information.

for (var i = 0; i < item.length; i++) {

cartHTML += "<tr>";

cartHTML += "<td>" + "<img src='tc_41807.png' alt='" + item[i] + "'></td>";  // Image source updated here

cartHTML += "<td>" + itemDescription[i] + "'</td>";

cartHTML += "<td>$" + itemPrice[i] + "</td>";

cartHTML +="<td>" + itemQty[i] + "</td>";

//Assigns the corresponding information and graphic with each item. Populates the cart table with this information.


var itemCost = itemPrice[i]*itemQty[i];

//multiplies item cost by how many are in the cart to determine the total price for that product order.

cartHTML += "<td>$" + itemCost + "</td>";

cartHTML += "</tr>"



//Adds your item cost to the Item Cost row in the cart table.

orderTotal += itemCost;

}


//Adds total cost of the item to the total amount the customer owes.

cartHTML += "<tr><td colspan='4'> Subtotal </td>";

cartHTML +="<td>$" + orderTotal + "</td></tr>";

cartHTML += "</table>";


document.getElementById("cart").innerHTML = cartHTML;

