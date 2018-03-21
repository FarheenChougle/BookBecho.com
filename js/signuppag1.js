function valid()
    {
      var user,pwd,fname,lname,num,email;
      user=document.getElementById("us1").value;
      pwd=document.getElementById("pwd1").value;
      fname=document.getElementById("fn").value;
      lname=document.getElementById("ln").value;
      num=document.getElementById("no1").value;
      email=document.getElementById("eid").value;
      var uservalid=true;
      var pwdvalid=true;
      var fnamevalid=true;
      var lnamevalid=true;
      var emailvalid=true;
      var numbervalid=true;
      if( fname == "" )
         {
            alert( "Please provide your name!" );
            fnamevalid=false;
         }
         else
         {
      if(fname.length< 2 || fname.length > 20)
      {
        alert("Invalid First Name!Please check the length of the Name");
        fnamevalid=false;
      }
        }
      if( lname == "" )
         {
            alert( "Please provide your surname!" );
            lnamevalid=false;
         }
         else
         {
      if(lname.length < 6 || lname.length > 11)
      {
        alert("Invalid Last Name!Please check the length of the Last Name");
        lnamevalid=false;
      }
        }
         if( user == "" )
         {
            alert( "Please provide a username!" );
            uservalid=false;
         }
         else
         {
         if(user.length< 6 || user.length > 11)
      {
        alert("Invalid Username!Please check the length of the Username");
        uservalid=false;
      }
      else
      {
        for(i=0;i<user.length;i++)
        {
          var ch=user.charAt(i);
          if((ch>="a" && ch<="z")||(ch>="0" && ch<="9"))
          {
            continue;
          }
          else
          {
            alert("Invalid Username!");
            uservalid=false;
            break;
          }
        }
      }
    }
     if( email == "" )
         {
            alert( "Please provide your Email!" );
            emailvalid=false;
         }
         else
         {  
var atposition=email.indexOf("@");  
var dotposition=email.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=email.length)
{  
  alert("Please enter a valid e-mail address");  
  emailvalid=false;  
       }
   }
        if( num == "" )
         {
            alert( "Please provide your phone number!" );
            numbervalid=false;
         }
         else
         { 
          if (isNaN(num)){
            alert("Enter a numeric value");
          }
      if(num.length!=10)
      {
        alert("Invalid Phone Number!Please enter a 10 digit Phone Number");
        numbervalid=false;
      }
    }
       if( pwd == "" )
         {
            alert( "Please provide your Password!" );
            pwdvalid=false;
         }
         else
         {
      if(pwd.length<6 || pwd.length>11)
      {
        alert("Invalid Password ! Please check the length of the Password");
        pwdvalid=false;
      }
      else
      {
        for(i=0;i<pwd.length;i++)
        {
          var ch1=pwd.charAt(i);
          if((ch1>="a" && ch1<="z")||(ch>="0" && ch<="9"))
          {
            continue;
          }
          else
          {
            alert("Invalid Password!");
            pwdvalid=false;
            break;
          }
        }
      }
    }
            if(uservalid==true && pwdvalid==true && fnamevalid==true && lnamevalid==true && emailvalid==true && numbervalid==true)
      {
        alert("SignUp Successful!");
      }
      else
      {
        alert("SignUp Unsuccessful");
      }
    }
