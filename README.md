<h1 style="color:blue;font-size:75px;">HONO - haggle the world</h1>

# Introduction
It makes me sick and sad when I come to an online sales site and I find an excellent product, but which I think is a little too expensive and completely unable to offer the seller a discount on it, here it is the most big problems of all online sales sites, no interaction, inert interfaces that do not benefit either the customer or the seller, he himself can agree to sell his product with a percentage of reduction, Hono is therefore to resound this great interaction problem that is missing at all ecommerce sites in the world by allowing the customer to offer the price that fits best and thus exchange with the seller.

### *The important thing, you need to know here is that, with this button, you will increase your traffic, because, more customer will try their chance and can propose you price, you will agree.*

## How it work?
Hono connects the Customer who wants to offer a price that is affordable for a product and the seller in two steps, first, it verifies that the margin of reduction of the seller card with what the customer proposes then, send the information of the customer to the seller and the price the customer wants for the product in question, all of which is done using a number of html attributes

## How to use it:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Your Product page</title>
</head>
	<body>
		...
		<button>Add to Cart</button>
		...
		<!-- Include the Hono Button Configuration -->
		<span id="div_hono" data-emailseller = "test@gmail.com"
					data-product-image ="products.jpg"
					data-product-title ="Wolfpack Jacket - Black"
					data-product-currency ="USD" 
					data-product-amount ="1,599.95"
					data-product-margin-amount ="20" 
					data-button-lang ="en"
					></span>

		...
		<!-- Include the Hono script -->
		<script type="text/javascript" src="hono.min.js"></script>
		<!-- And it's ALL -->
	</body>
</html>

```
## Attributes and explanations:
<table border="1">
	<tr>
		<th> Required </th>
		<th style="min-width:190px;"> Attribute </th>
		<th> Description </th>
		<th> Type </th>
	</tr>
	<tr>
		<td>yes</td>
		<td>data-emailseller</td>
		<td>This attribute contains the email of the seller, Hono will use it to send the mail.</td>
		<td>String</td>
	</tr>
	<tr>
		<td>yes</td>
		<td>data-product-image</td>
		<td>this attribute contains the path of th image(The absolute path)</td>
		<td>String</td>
	</tr>
	<tr>
		<td>yes</td>
		<td>data-product-title</td>
		<td>This attibute contains the title of the product</td>
		<td>String</td>
	</tr>
	<tr>
		<td>yes</td>
		<td>data-product-currency</td>
		<td>This attribute contains the currency of the product</td>
		<td>String</td>
	</tr>
	<tr>
		<td>yes</td>
		<td>data-product-amount</td>
		<td>This attribute contains the amount/price of the product</td>
		<td>Float</td>
	</tr>
	<tr>
		<td>yes</td>
		<td>data-product-margin-amount</td>
		<td>This attribute contain the reduction marge to apply on the amount, it's what Hono will use to control if what the customer enter is in the acceptable marge of the amount that the seller want</td>
		<td>Float</td>
	</tr>
	<tr>
		<td>no</td>
		<td>data-button-lang</td>
		<td>This attribute control all the language of the Hono systeme, now it's can work with: en, fr, sp, ge</td>
		<td>String</td>
	</tr>
	<tr>
		<td>no</td>
		<td>data-number-trying</td>
		<td>This attibute is the limit number that is allow to a customer to hit his amount proposition in the modal</td>
		<td>Int</td>
	</tr>
	<tr>
		<td>no</td>
		<td>data-autoload-action</td>
		<td>This attribute control the way the button will appear</td>
		<td>String</td>
	</tr>
	<tr>
		<td>no</td>
		<td>data-button-position</td>
		<td>this attribute set the button position we have (standard, float-left and float-right)</td>
		<td>String</td>
	</tr>
	<tr>
		<td>no</td>
		<td>data-button-css</td>
		<td>If you have a personnal style you want to add on Hono Button this attribute is for you</td>
		<td>String</td>
	</tr>
	<tr>
		<td>no</td>
		<td>data-button-class</td>
		<td>If you have a personnal class you want to add on Hono Button this attribute is for you</td>
		<td>String</td>
	</tr>
</table>

### Authors / Contributors:
<a href="https://github.com/Sanix-Darker"> Sanix Darker </a>

### How it's work with the Customer haggling his amount and the email received by the Seller:
You can Try the <a href="https://sanix-darker.github.io/Hono/">DEMO HERE</a>, *But you need to change the emailseller attribute to receive the mail as the seller.*
<table style="width: 100%;">
	<tr>
		<td colspan="2">
			<img src="img/Hono.gif" >
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<img src="img/Capture.PNG" >
		</td>
	</tr>
	<tr>
		<td colspan="2">
			<img src="img/Capture2.PNG" >
		</td>
	</tr>
</table>