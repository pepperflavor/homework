"use server"

import { resolve } from "path";

export async function handlePassword(preState:any, formData: FormData){
    const inputPassword = formData.get("password")
    console.log(" 입력한 비밀번호?")
    console.log(inputPassword)
    let error: string;
    let welcome;
        if(inputPassword == "12345"){
            await new Promise((resolve) => setTimeout(resolve,3000))
            return error = ""
        }else if(inputPassword != "12345"){
            return error = "Wrong password"
        }
    
}