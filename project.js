function employees(){
	var box = document.getElementById('emp');
	box.style.width = "100%";
	box.style.transition = "width 2s ease";
	var div = document.createElement('div');
	div.classList.add("invisible");
	div.style.opacity = "1";
	div.style.transition ="opacity 0.5s ease 2s";
	
	var head = document.createElement('h2');
	head.innerHTML = "Welcome Employees of Tech Inc."
	div.appendChild(head);
	
	var txt = document.createElement('p');
	txt.innerHTML = "This is your entry point for all of your HR needs!"
	div.appendChild(txt);
	
	var btn = document.createElement('button');
	btn.innerHTML = "Log In";
	div.appendChild(btn);
	
	var dump_div = document.getElementById('emp_dump');
	dump_div.appendChild(div);
}
function products(){
	var box = document.getElementById('prod');
	box.style.width = "100%";
	box.style.transition = "width 2s ease";
	
	var div = document.createElement('div');
	div.classList.add("invisible");
	div.style.opacity = "1";
	div.style.transition ="opacity 0.5s ease 2s";
	
	var head = document.createElement('h2');
	head.innerHTML = "Welcome Customers of Tech Inc."
	div.appendChild(head);
	
	var txt = document.createElement('p');
	txt.innerHTML = "Come see what new product we have today!"
	div.appendChild(txt);
	
	var btn = document.createElement('button');
	btn.innerHTML = "Enter Website";
	div.appendChild(btn);
	
	document.body.appendChild(div);
}
function careers(){
	var box = document.getElementById('car');
	box.style.width = "100%";
	box.style.transition = "width 2s ease";
	
	var div = document.createElement('div');
	div.classList.add("invisible");
	div.style.opacity = "1";
	div.style.transition ="opacity 0.5s ease 2s";
	
	var head = document.createElement('h2');
	head.innerHTML = "Welcome Prospective Employees of Tech Inc."
	div.appendChild(head);
	
	var txt = document.createElement('p');
	txt.innerHTML = "We are always looking for new talent. Submit your application today!"
	div.appendChild(txt);
	
	var btn = document.createElement('button');
	btn.innerHTML = "View Available Jobs";
	btn.setAttribute('onclick','loadJobs()');
	div.appendChild(btn);
	
	var div_below = document.getElementById('prod');
	var par = document.getElementById('wrap');
	par.insertBefore(div, div_below);
}
function loadJobs(){
	loadData("2PACX-1vT9SXlWdrDNJQem3gZvGN0R7WCyFsWnqZrZHIr8JYtk9Ie3fWq_6PE1-w9HpVWP5cqF-VU2OpHFt9GK", callLoad);
}
function loadData(url_key, cFunction){
	var url = "https://spreadsheets.google.com/feeds/list/"+url_key+"/od6/public/values?alt=json-in-script&callback=";
	var xhttp=new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			cFunction(this);
			}
		};
	xhttp.open("GET", url, true);
	xhttp.send();
}
function callLoad(xhttp) {
	var jObj = JSON.parse(xhttp.responseText);
	//format and display in table
	var name = document.createElement('h3');
	name.innerHTML = "Availible Positions";
	document.body.appendChild(name);
	var table = document.createElement('table');
	var row1 = document.createElement('tr');
	var title = document.createElement('th');
	title.innerHTML = 'Title';
	var sal = document.createElement('th');
	sal.innerHTML = 'Salary';
	row1.appendChild(title);
	row1.appendChild(sal);
	table.appendChild(row1);
	var row2 = document.createElement('tr');
	var job1 = document.createElement('td');
	job1.innerHTML = "Jr. Software Engineer";
	var sal1 = document.createElement('td');
	sal1.innerHTML = jObj.Salary1;
	row2.appendChild(job1);
	row2.appendChild(sal1);
	table.appendChild(row2);
	var row3 = document.createElement('tr');
	var job2 = document.createElement('td');
	job2.innerHTML = "Sr. Software Engineer";
	var sal2 = document.createElement('td');
	sal2.innerHTML = jObj.Salary2;
	row3.appendChild(job2);
	row3.appendChild(sal2);
	table.appendChild(row3);
	var row4 = document.createElement('tr');
	var job3 = document.createElement('td');
	job3.innerHTML = "SCRUM Master";
	var sal3 = document.createElement('td');
	sal3.innerHTML = jObj.Salary3;
	row4.appendChild(job3);
	row4.appendChild(sal3);
	table.appendChild(row4);
	var div = document.getElementById('car_dump');
	div.appendChild(table);
}