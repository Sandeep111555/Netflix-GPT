import React from 'react'

export const ValidateLogin = (email,password,name) => {
        const emailvalid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        if(!emailvalid)
            return "Please Enter Valid Email";

        const passwordvalid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
        if(!passwordvalid){
            return "Please Enter valid Password"
        }
        return null;
}