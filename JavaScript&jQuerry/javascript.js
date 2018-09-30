/*-- Slider ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
window.onload = function() {
	var slider = document.getElementsByClassName("slider")[0];
	var images = slider.getElementsByTagName("img");
	var counter = 0;
	var nextBtn = slider.getElementsByClassName("next")[0];
	var prevBtn = slider.getElementsByClassName("prev")[0];

	function showImage(index) {
			// Remove all classnames on the images (so hide them)
			for (var i = 0; i < images.length; i += 1)
				images[i].className = "hideImage";
			// Add the showImage classname to the img-element you want
			images[index].className = "showImage";
		} //showImage()
	function nextImg() {
			// If we have the last img, it switches back to the first one 
			if (counter < images.length - 1)
				counter += 1;
			else
				counter = 0;
			showImage(counter);
		} //nextImg()
	function prevImg() {
			// If we have the first img, it switches back to the last one
			if (counter > 0)
				counter -= 1;
			else
				counter = images.length - 1;
			showImage(counter);
		} //prevImg()
	window.setInterval(nextImg, 4000);
	// Give the buttons on onclick event
	nextBtn.onclick = nextImg;
	prevBtn.onclick = prevImg;
	// Start it
	showImage(counter);
};
/*-- Tabs ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
$('.tab-list').each(function() { // Find lists of tabs
	var $this = $(this); // Store this list
	var $tab = $this.find('li.active'); // Get the active list item
	var $link = $tab.find('a'); // Get link from active tab
	var $panel = $($link.attr('href')); // Get active panel
	$this.on('click', '.tab-control', function(e) { // When click on a tab
		e.preventDefault(); // Prevent link behavior
		var $link = $(this), // Store the current link
			id = this.hash; // Get href of clicked tab 
		if (id && !$link.is('.active')) { // If not currently active
			$panel.removeClass('active'); // Make panel inactive
			$tab.removeClass('active'); // Make tab inactive
			$panel = $(id).addClass('active'); // Make new panel active
			$tab = $link.parent().addClass('active'); // Make new tab active 
		}
	});
});
/*-- Login/Create Account/Update Account ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function User(username, name, surname, pass, email, phone, country, address) {
		this.username = username;
		this.name = name;
		this.surname = surname;
		this.pass = pass;
		this.email = email;
		this.phone = phone;
		this.country = country;
		this.address = address;
	} //User
var attempt = 3;
var users = [];
var user = [];
var index = -1;
user[0] = new User("User1", "Maciej", "Majchrzak", "Pass1", "G00332746@gmit.ie", 1234567890, "Ireland", "1 Galway");
user[1] = new User("User2", "Kamila", "Michel", "Pass2", "email@gmit.ie", 1234567890, "Ireland", "2 Galway");
user[2] = new User("User3", "Conor", "McGrath", "Pass3", "email@gmit.ie", 1234567890, "Ireland", "3 Galway");
users.push(user[0]);
users.push(user[1]);
users.push(user[2]);

function validateLoginInfo() {
		var searchUserName = document.getElementById("username").value;
		var searchPassword = document.getElementById("password").value;
		for (var i = 0; i < users.length; i++) {
			if (users[i].username == searchUserName && users[i].pass == searchPassword) {
				index = i;
			} //if
		} //for
		if (index != -1) {
			var hideLogin = document.getElementById("hideLogin");
			hideLogin.style.visibility = 'hidden';
			if (document.title == 'My Account') {
				var hideCreateNew = document.getElementById("hideCreateNew");
				hideCreateNew.style.visibility = 'hidden';
				var showUpdateAccount = document.getElementById("showUpdateAccount");
				showUpdateAccount.style.visibility = 'visible';
				var showAccount = document.getElementById("showAccount");
				showAccount.style.visibility = 'visible';
				alert("Login successfully");
			} else {
				var show = users[index].username;
				var str = "Logged in as: ".bold();
				document.getElementById("show").innerHTML = str + show;
				show = document.getElementById("show")
				show.style.visibility = 'visible';
			}
			return false;
		} else {
			attempt--;
			alert("Login Failed! You have left " + attempt + " attempt;");
			if (attempt == 0) {
				document.getElementById("username").disabled = true;
				document.getElementById("password").disabled = true;
				document.getElementById("submit").disabled = true;
				return false;
			} //if
		} //else
	} //validateLoginInfo()
function updateAccount() {
	var option = "";
	option += updateUsername();
	option += updateName();
	option += updateSurname();
	option += updatePassword();
	option += updateEmail();
	option += updatePhone();
	option += updateCountry();
	option += updateAddress();
	if (option != "") {
		alert(option);
		return false;
	} else
		alert("All Information Successfully Updated!");
	return true;
}
var message = "";

function updateUsername() {
	var updateUsername = document.getElementById("updateUsername").value;
	message = "";
	if (updateUsername == "")
		message = "Username - unchanged.\n";
	else
		users[index].username = updateUsername;
	return message;
}

function updateName() {
	var updateName = document.getElementById("updateName").value;
	message = "";
	if (updateName == "" || updateName == users[index].name)
		message = "Name - unchanged.\n";
	else
		users[index].name = updateName;
	return message;
}

function updateSurname() {
	var updateSurname = document.getElementById("updateSurname").value;
	message = "";
	if (updateSurname == "" || updateSurname == users[index].surname)
		message = "Surname - unchanged.\n";
	else
		users[index].surname = updateSurname;
	return message;
}

function updatePassword() {
	var updatePassword = document.getElementById("updatePassword").value;
	message = "";
	if (updatePassword == "" || updatePassword == users[index].password)
		message = "Password - unchanged.\n";
	else
		users[index].password = updatePassword;
	return message;
}

function updateEmail() {
	var updateEmail = document.getElementById("updateEmail").value;
	message = "";
	if (updateEmail == "" || updateEmail == users[index].email)
		message = "Email - unchanged.\n";
	else
		users[index].email = updateEmail;
	return message;
}

function updatePhone() {
	var updatePhone = document.getElementById("updatePhone").value;
	message = "";
	if (updatePhone == "" || updatePhone == users[index].phone)
		message = "Phone - unchanged.\n";
	else
		users[index].phone = updatePhone;
	return message;
}

function updateCountry() {
	var updateCountry = document.getElementById("updateCountry").value;
	message = "";
	if (updateCountry == "" || updateCountry == users[index].country)
		message = "Country - unchanged.\n";
	else
		users[index].country = updateCountry;
	return message;
}

function updateAddress() {
	var updateAddress = document.getElementById("updateAddress").value;
	message = "";
	if (updateAddress == "" || updateAddress == users[index].address)
		message = "Address - unchanged.\n";
	else
		users[index].address = updateAddress;
	return message;
}

function myAccount() {
	var myAccount = "<h3>Username: </h3>".bold() + users[index].username + "<br/><h3>Name: </h3>".bold() + users[index].name + "<br/><h3>Surname: </h3>".bold() + users[index].surname +
		"<br/><h3>Email: </h3>".bold() + users[index].email + "<br/><h3>Phone: </h3>".bold() + users[index].phone + "<br/><h3>Country: </h3>".bold() + users[index].country + "<br/><h3>Address: </h3>".bold() + users[index].address;
	document.getElementById("myAccount").innerHTML = myAccount;
}

function addUser() {
	var j = users.length;
	++j;
	username = document.getElementById("newUsername").value;
	name = document.getElementById("newName").value;
	surname = document.getElementById("newSurname").value;
	pass = document.getElementById("newPassword").value;
	email = document.getElementById("newEmail").value;
	phone = document.getElementById("newPhone").value;
	country = document.getElementById("newCountry").value;
	address = document.getElementById("newAddress").value;
	user[j] = new User(username, name, surname, pass, email, phone, country, address)
	users.push(user[j]);
}
/*-- Validation  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
function validateOnSubmit(form) {
	var option = "";
	option += validateUsername(form.username);
	option += validateName(form.name);
	option += validateSurname(form.surname);
	option += validatePassword(form.pwd);
	option += validateEmail(form.email);
	option += validatePhone(form.phone);
	option += validateCountry(form.country);
	option += validateAddress(form.address);
	if (option != "") {
		alert("Please fill out all of the information required.\n" + option);
		return false;
	} else {
		addUser();
		alert("Account Created");
	}
	return false;
}

function validateOnSubmitContact(form) {
	var option = "";
	option += validateName(form.name);
	option += validateSurname(form.surname);
	option += validateEmail(form.email);
	option += validatePhone(form.phone);
	option += validateTopic(form.topic);
	option += validateQuestion(form.question);
	if (option != "") {
		alert("Please fill out all of the information required.\n" + option);
		return false;
	}
	return true;
}
var illegalChars = /\W/;
var error = "";
var message = "";

function validateUsername(empty) {
	if (empty.value == "") {
		message = "You didn't enter a username.";
		error = "Username - missing.\n";
	} else if ((empty.value.length < 5) || (empty.value.length > 15)) {
		message = "The username is the wrong length.";
		error = "Username - wrong length.\n";
	} else if (illegalChars.test(empty.value)) {
		message = "The username contains illegal characters.";
		error = "Username - illegal characters.\n"
	} else {
		message = "";
		error = "";
	}
	document.getElementById("usernameV").innerHTML = message;
	$('#usernameV').css("color", "red");
	return error;
}

function validateName(empty) {
	if (empty.value == "") {
		message = "You didn't enter your name.";
		error = "Name - missing.\n";
	} else if (illegalChars.test(empty.value)) {
		message = "The name contains illegal characters.";
		error = "Name - illegal characters.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("name").innerHTML = message;
	$('#name').css("color", "red");
	return error;
}

function validateSurname(empty) {
	if (empty.value == "") {
		message = "You didn't enter your surname.";
		error = "Surname - missing.\n";
	} else if (illegalChars.test(empty.value)) {
		message = "The username contains illegal characters.";
		error = "Surname - illegal characters.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("surname").innerHTML = message;
	$('#surname').css("color", "red");
	return error;
}

function validatePassword(empty) {
	if (empty.value == "") {
		message = "You didn't enter a password.";
		error = "Password - missing.\n";
	} else if ((empty.value.length < 7) || (empty.value.length > 15)) {
		message = "The password is the wrong length.";
		error = "Password - too weak(from 7 to 15 characters).\n";
	} else if (illegalChars.test(empty.value)) {
		message = "The password contains illegal characters.";
		error = "Password - illegal characters.\n";
	} else if (!((empty.value.search(/(a-z)+/)) && (empty.value.search(/(0-9)+/)))) {
		message = "The password must contain at least one numeral.";
		error = "Password - must contain a number.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("pwd").innerHTML = message;
	$('#pwd').css("color", "red");
	return error;
}

function trim(s) {
	return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(empty) {
	var tempty = trim(empty.value); // value of field with whitespace trimmed off
	var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
	var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;
	if (empty.value == "") {
		message = "You didn't enter an email address.";
		error = "Email - missing.\n";
	} else if (!emailFilter.test(tempty)) {
		message = "Please enter a valid email address.";
		error = "Email - not valid.\n";
	} else if (empty.value.match(illegalChars)) {
		message = "The email address contains illegal characters.";
		error = "Email - illegal characters.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("email").innerHTML = message;
	$('#email').css("color", "red");
	return error;
}

function validatePhone(empty) {
	var stripped = empty.value.replace(/[\(\)\.\-\ ]/g, '');
	if (empty.value == "") {
		message = "You didn't enter a phone number.";
		error = "Phone - missing.\n";
	} else if (isNaN(parseInt(stripped))) {
		message = "The phone number contains illegal characters.";
		error = "Phone - illegal characters.\n";
	} else if (!(stripped.length == 10)) {
		message = "The phone number is the wrong length. Make sure you included an area code.";
		error = "Phone - invalid length.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("phone").innerHTML = message;
	$('#phone').css("color", "red");
	return error;
}

function validateCountry(empty) {
	if (empty.value == "") {
		message = "You didn't enter a country.";
		error = "Country - missing.\n";
	} else if (illegalChars.test(empty.value)) {
		message = "The country contains illegal characters.";
		error = "Country - illegal characters.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("country").innerHTML = message;
	$('#country').css("color", "red");
	return error;
}

function validateAddress(empty) {
	if (empty.value == "") {
		message = "You didn't enter Address.";
		error = "Address - missing.\n";
	} else if (illegalChars.test(empty.value)) {
		message = "The username contains illegal characters.";
		error = "Address - illegal characters.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("address").innerHTML = message;
	$('#address').css("color", "red");
	return error;
}

function validateTopic(empty) {
	if (empty.value == "") {
		message = "You didn't enter your topic.";
		error = "Topic - missing.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("topic").innerHTML = message;
	$('#topic').css("color", "red");
	return error;
}

function validateQuestion(empty) {
	if (empty.value == "") {
		message = "You didn't enter your question.";
		error = "Question - missing.\n";
	} else {
		message = "";
		error = "";
	}
	document.getElementById("question").innerHTML = message;
	$('#question').css("color", "red");
	return error;
}
/*-- Promotion  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
var appleCode = ["G1J454K", "H9F883H", "BNM23FJK"];
var samsungCode = ["MKDS494", "KGH7FDK", "C3BNC3D"];
var windowsCode = ["9G02MDK", "O3L2LKD", "6F7DHJ4"];

function myApple() {
	document.getElementById("AppleCode").value = appleCode[Math.floor(Math.random() * appleCode.length)];
}

function mySamsung() {
	document.getElementById("SamsungCode").value = samsungCode[Math.floor(Math.random() * samsungCode.length)];
}

function myWindows() {
	document.getElementById("WindowsCode").value = windowsCode[Math.floor(Math.random() * windowsCode.length)];
}
/*-- Order  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
//create array that will hold all ordered products
var shoppingCart = [];
//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart() {
	var orderedProductsTblBody = document.getElementById("orderedProductsTblBody");
	//ensure we delete all previously added rows from ordered products table
	while (orderedProductsTblBody.rows.length > 0) {
		orderedProductsTblBody.deleteRow(0);
	}
	//variable to hold total price of shopping cart
	var cartTotalPrice = 0;
	//iterate over array of objects
	for (var product in shoppingCart) {
		//add new row      
		var row = orderedProductsTblBody.insertRow();
		//create three cells for product properties 
		var cellName = row.insertCell(0);
		var cellDescription = row.insertCell(1);
		var cellPrice = row.insertCell(2);
		cellPrice.align = "right";
		//fill cells with values from current product object of our array
		cellName.innerHTML = shoppingCart[product].Name;
		cellDescription.innerHTML = shoppingCart[product].Description;
		cellPrice.innerHTML = shoppingCart[product].Price;
		cartTotalPrice += shoppingCart[product].Price;
	}
	//fill total cost of our shopping cart 
	document.getElementById("cartTotal").innerHTML = "€" + cartTotalPrice.toFixed(2);
}

function AddtoCart(name, description, price) {
	//Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
	var singleProduct = {};
	//Fill the product object with data
	singleProduct.Name = name;
	if (document.querySelector("input[value='64GB']").checked == true) {
		price += 200;
		description += " ,64GB";
	} else if (document.querySelector("input[value='32GB']").checked == true) {
		price += 100;
		description += " ,32GB";
	} else {
		price = price;
		description += " ,16GB"
	}
	if (document.querySelector("input[value='White']").checked == true || document.querySelector("input[value='Black']").checked == true) {
		price += 10;
		if (document.querySelector("input[value='Black']").checked == true)
			description += " ,Black"
		else
			description += " ,White"
	} else {
		price = price;
		description += " ,Silver"
	}
	var code = document.getElementById("code").value;
	var amount;
	if (name == "Apple") {
		amount = document.getElementById("amountApple").value;
		price *= amount;
		if ($.inArray(code, appleCode) > -1) {
			price -= (price * 0.10);
		}
	} else if (name == "Samsung") {		
		amount = document.getElementById("amountSamsung").value;
		price *= amount;
		description += " Samsung VR Gear";
		if ($.inArray(code, appleCode) > -1) {
			price -= (price * 0.20);
		}
	} else if (name == "Windows") {
		amount = document.getElementById("amountWindows").value;
		price *= amount;
		if ($.inArray(code, windowsCode) > -1) {
			price -= (price * 0.25);
		}
	} else
		alert("Invalid Code!");
	
	description += " x" + amount;
	
	singleProduct.Description = description;
	singleProduct.Price = price;
	//Add newly created product to our shopping cart 
	shoppingCart.push(singleProduct);
	//call display function to show on screen
	displayShoppingCart();
}

function myOrder(){
	alert("Thank you for your purchase! You will receive email from us within 5 minutes to confirm your order.");
	location.reload();
}