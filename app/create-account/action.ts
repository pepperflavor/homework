"use server"

import db from "@/lib/db";
import { error } from "console";
import { resolve } from "path";
import bcrypt from "bcrypt"

import {string, z} from "zod"
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";


const checkUsernameUnique = async(username: string) =>{
    const user = await db.user.findUnique({
        where : {
            username
        },
        select:{
            id: true
        }
    })

    // if(user){
    //     return false
    // }else{
    //     return true
    // }

    return !Boolean(user)
}


const formSchema = z.object({
    username :  z.string().min(5, "Username should be at least 5 charactors long.").refine(checkUsernameUnique, "이미 존재하는 아이디입니다"),
    email : z.string().email(),
    // .refine((email) => email.includes("@zod.com") ? true : false, "Only @zod.com emails are allowed"),
    password : z.string().min(5)
      //.regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    // .refine((password)=> {
    //     if(password.match(/[^0-9]/)){
    //         return true}else{
    //             return false
    //         }}, "Password sould be contain at least number (0123456789)")
})



export async function createAccount(preState:any, formData: FormData){
    console.log(cookies())
    const data ={
        username : formData.get("username"),
        email : formData.get("email"),
        password : formData.get("password")
    }

    const result = await formSchema.safeParseAsync(data)

    if(!result.success){
        return result.error.flatten()
    }else{
        // 숫자 인자는 알고리즘을 몇번 돌릴지
        const hashedPassword = await bcrypt.hash(result.data.password, 12)
        const user = await db.user.create({
            data:{
                username : result.data.username,
                password: hashedPassword,
                bio: false
            }
        })

        // getIronSession(cookies())
    }
}