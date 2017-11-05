
/*
    Validate given form. Define your own functions and be creative!
    User Name Example:
    input: "MarekNowak405"
    output: "mareknowak405"
    Any uppercase letters you should replace with lowercase. Password's and Username's length should be at least 6 letters long.
    Passwords are equal. User's age at least 18 yo. [Check type of age input's value]. Input's value aren't empty strings.
 */

window.onload = ()=> {
    //register button on click event
    document.getElementById('registerButton').onclick = ()=>{
        //result. It decides if response is positive or negative.

        // From the begining value of result is true - after finding unproper value change to false
        let result = true;
        //load form field's value
        let username = document.getElementById('usernameInput').value;
        let password = document.getElementById('passwordInput').value;
        let passwordConfirm = document.getElementById('confirmPasswordInput').value;
        let age = document.getElementById('ageInput').value;
        let phone = document.getElementById('phoneInput').value;
        let response = document.getElementById('response');

        //---your code ------
        // Username to lower case
        username = username.toLowerCase();
        // Check length of username and password
        if(username.length<6 || username.length>20){
          result = false;
          response.innerHTML += "Username should have at least 6 and maximum 20 chars<br><br>";
        }
        if(password.length<6 || password.length>20){
          result = false;
          response.innerHTML += "Password should have at least 6 and maximum 20 chars <br><br>";
        }
        //Check if password and confrim is the same
        if(password != passwordConfirm){
          result = false;
          response.innerHTML += "Password and confrim password are not equal! Please correct it <br><br>";
        }
        //Check age
        if(age<18 || age> 120){
          result = false;
          response.innerHTML += "Age should be at least 18, and maximum 120 <br><br>";
        }
        //Check if username and password contains at least one letter
        if(!username.match(/[a-z]/i) || !password.match(/[a=z]/i)){
          result = false;
          response.innerHTML += "Username and password should contain at least one letter <br><br>";
        }
        if(!password.match(/[0-9]/i)){
          result = false;
          response.innerHTML += "Password should contains at least one number <br><br>";
        }
        //All fields should be filled
        if(username ==='' || password === '' || passwordConfirm === '' || age === ''){
          result = false;
          response.innerHTML += "All fields should be filled! <br><br>";
        }
        //Check phone pattern
        if(!phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)){
          result = false;
          response.innerHTML += "Phone number shoud be in that pattern: XXX-XXX-XXX <br><br>";
        }

        //Response to user
        if(result){
            //response if result equal true
            response.innerHTML += "Register succeed.";
        }else{
            //response if result equal false
            response.innerHTML += "Register failed."
        }

    };


};
