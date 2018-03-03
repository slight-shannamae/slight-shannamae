function LoadPage(){
//Remove button
	var btn = document.getElementById('load');
	btn.parentNode.removeChild(btn);
//Create Header
	var header = document.createElement("h1");
	header.innerHTML = "Shanna-Mae Slight";
	document.body.appendChild(header);
//Create Image Within Div
	var img_div = document.createElement('div');
	img_div.setAttribute("class", "img"); 
	var img = document.createElement('img');
	img.setAttribute('id', 'me');
	img.setAttribute('src', 'Shanna.jpg');
	img_div.appendChild(img);
	document.body.appendChild(img_div);
//Create Bio
	var bod_div = document.createElement('div');
	bod_div.setAttribute('class', 'bod');
	var bio = document.createElement("p");
	bio.innerHTML = 'I have always been interested in engineering because of the unique blend of creativity and technical skill. I settled on Software Engineering because it is so flexible that I have the opportunity to work in just about every field, which keeps me on my toes and allows me to learn about, well, everything! When I am not programming, I love to read, go hiking, create music, and spend time with my family. I also love to teach and volunteer at  a local educational co-op teaching science and technology to children.';
	bod_div.appendChild(bio);
//Create List
	var desc = document.createElement('p');
	desc.innerHTML = 'I have experience in the following languages and technics:';
	var list = document.createElement('dl');
	var item1 = document.createElement('li');
	item1.innerHTML = 'JavaScript';
	var item2 = document.createElement('li');
	item2.innerHTML = 'HTML';
	var item3 = document.createElement('li');
	item3.innerHTML = 'CSS';
	var item4 = document.createElement('li');
	item4.innerHTML = 'PHP';
	var item5 = document.createElement('li');
	item5.innerHTML = 'Java';
	var item6 = document.createElement('li');
	item6.innerHTML = 'C++';
	var item7 = document.createElement('li');
	item7.innerHTML = 'SQL';
	var item8 = document.createElement('li');
	item8.innerHTML = 'AJAX';
	var item9 = document.createElement('li');
	item9.innerHTML = 'JSON';
	var item10 = document.createElement('li');
	item10.innerHTML = 'Node.js';
	bod_div.appendChild(desc);
	bod_div.appendChild(list);
	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);
	list.appendChild(item4);
	list.appendChild(item5);
	list.appendChild(item6);
	list.appendChild(item7);
	list.appendChild(item8);
	list.appendChild(item9);
	list.appendChild(item10);
	
	document.body.appendChild(bod_div);

}