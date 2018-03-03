function LoadPage(){
//Remove button
	var btn = document.getElementByID('load');
	body.removeChild(btn);
//Create Navigation Bar
	var navigate = document.createElement('nav');
	var list = document.createElement('ul');
	var home = document.createElement('li');
	home.innerHTML = "Home";
	list.appendChild(home);
	navigate.appendChild(list);
//Create Header
	var header = document.createElement("h1");
	header.innerHTML = "Shanna-Mae Slight";
	document.body.appendChild(header);
	var img_div = document.createElement('div');
//Create Image Within Div
	img_div.setAttribute("class", "img"); 
	var img = document.createElement('img');
	img.setAttribute('id', 'me');
	img.setAttribute('src', 'Shanna.jpg');
	img_div.appendChild(img);
	document.body.appendChild(img_div);
}