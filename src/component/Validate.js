// export const setLogin = () => {
//     users.map((element)=>{
//       if(inpemail === element.mail && inppass === element.pass){
//         console.log("kerikko")
//       }
//     })
//   };

export const validateEmail = (email) =>{
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ; 
    if(email === "" ){
        alert("email or password must be filled") ;
    }else if(emailRegEx.test(email)){
        return true
    }
    else{
        alert("enter valid email")
    }
}

export const validatePassword = (pass) =>{
    if(pass === ""){
        alert("email or password must filled")
    }else if(pass.length >= 8){
        return true;
    }else{
        alert("password must be greater than 8 characters")
    }
}

//conform password
export const validateCon_pass = (pass, con_pass) =>{
    if(con_pass === pass){
        return true;
    }else{
        alert("confirm password does not match with the password");
    }
}

export const validateField = (input) =>{
    if(input !== ""){
        return true;
    }else{
        alert("field cannot be empty");
    }
}

//phone number
export const validatePhone = (phone) => {
   const phoneRegEx = /^\d{10}$/ ;
    if(phoneRegEx.test(phone)){
        return true;
    }else{
        alert('please enter a valid Phone number')
    }
}