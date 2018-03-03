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
	var bio = document.createElement("p");
	bio.innerHTML = 'I have always been interested in engineering because of the unique blend of creativity and technical skill. I settled on Software Engineering because it is so flexible that I have the opportunity to work in just about every field, which keeps me on my toes and allows me to learn about, well, everything! When I am not programming, I love to read, go hiking, create music, and spend time with my family. I also love to teach and volunteer at  a local educational co-op teaching science and technology to children.';
	document.body.appendChild(bio);
}