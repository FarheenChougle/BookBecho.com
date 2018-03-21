function valid()
{
	var user1=document.getElementById("us1").value;
	if(document.getElementById("us1").value=="")
		alert("Enter a Username");
	else
	{
		var d=/^[0-9a-zA-Z]{5,20}$/.test(user1);
		if(d==false)
			alert("Incorrect username");
	}
	var pwd=document.getElementById("pwd1").value;
	if(document.getElementById("pwd1").value=="")
		alert("Enter Password");
	else
	{
		var c=/^[A-Za-z0-9!@#$%^&*()_]{6,20}$/.test(pwd);
		if(c==false)
			alert("Type a Permitted Password");
	}
	var fname=document.getElementById("fn").value;
	if(document.getElementById("fn").value=="")
		alert("Enter first name");
	else
	{
		var a=/^[a-zA-Z]{5,}$/.test(fname);
		if(a==false)
			alert("Incorrect first name");
	}
	var lname=document.getElementById("ln").value;
	if(document.getElementById("ln").value=="")
		alert("Enter last name");
	else
	{
		var a=/^[a-zA-Z]{5,}$/.test(lname);
		if(a==false)
			alert("Incorrect last name");
	}
	var num=document.getElementById("no1").value;
	if(document.getElementById("no1").value=="")
		alert("Enter phone number");
	else
	{
		var b=/^[0-9]{10,10}$/.test(num);
		if(b==false)
			alert("Enter a correct 10 digit phone number"); 
	}
	var email1=document.getElementById("eid").value;
	if(document.getElementById("eid").value=="")
		alert("Enter Email");
	else
	{ 
		var g=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email1);
		if(g==false)
			alert("Enter a correct Email"); 
	}
}