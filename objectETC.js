function Student(fname, lname, id, major){
	this.f = fname;
	this.l = lname;
	this.i = function(){
		var isnum = /^\d+$/.test(id);
		if(isnum){
			return id;
		}
		else{
			return null;
		}
	}
	this.m = major;
	this.output = function(){
		return this.f + " " +this.l +" "+this.i()+" "+this.m;
	}
}
function createStudent(){
	var f = document.forms["form_1"]["firstname"].value;
	var l = document.forms["form_1"]["lastname"].value;	
	var i = document.forms["form_1"]["id"].value;
	var m = document.forms["form_1"]["major"].value;
	
	var student1 = new Student(f, l, i, m);
	if(student1.i != null){
		document.getElementById("echo").innerHTML = student1.output();
	}
	else{
		document.getElementById("echo").innerHTML = "Student ID needs to be a number";
	}
	
	return student1;
};
function Employee (fname, lname, id, major, employer, job){
	Student.call(this, fname, lname, id, major);
	this.e = employer;
	this.j = job;
	this.output = function(){
		return this.f + " " +this.l +" "+this.i()+" "+this.m+" "+this.e+" "+this.j;
	}
}
function createEmployee(){
	var f = document.forms["form_2"]["firstname"].value;
	var l = document.forms["form_2"]["lastname"].value;	
	var i = document.forms["form_2"]["id"].value;
	var m = document.forms["form_2"]["major"].value;
	var e = document.forms["form_2"]["employer"].value;
	var j = document.forms["form_2"]["job"].value;
	var employee1 = new Employee(f, l, i, m, e, j);	
	if(employee1.i != null){
		document.getElementById("echo_2").innerHTML = employee1.output()
	}
	else{
		document.getElementById("echo_2").innerHTML = "Student ID needs to be a number";
	}
	
	return employee1;
}
