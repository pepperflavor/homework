'use server'

import db from '@/lib/db'
import { resolve } from 'path'

import { string, z } from 'zod'
import bcrypt from 'bcrypt'
import getSession from '@/lib/session'
import { redirect } from 'next/navigation'

const checkUsernameExists = async (username: string) => {
  const user = await db.user.findUnique({
    where: {
      username,
    },
    select: {
      id: true,
    },
  })
  //   if (user) {
  //     return true
  //   } else {
  //     return false
  //   }

  return Boolean(user)
}

const formSchema = z.object({
  username: z.string().min(5, 'Username should be at least 5 charactors long.'),
  email: z
    .string()
    .email()
    .refine(checkUsernameExists, 'An account with this email dose not exists'),
  password: z.string().min(10),
  // .refine((password)=> {
  //     if(password.match(/[^0-9]/)){
  //         return true}else{
  //             return false
  //         }}, "Password sould be contain at least number (0123456789)")
})

export async function logIn(preState: any, formData: FormData) {
  const data = {
    usename: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const result = await formSchema.safeParseAsync(data)
  if (!result.success) {
    console.log(data)
    console.log(result.error.flatten)
    return result.error.flatten()
  } else {
    const user = await db.user.findUnique({
      where: {
        username: result.data.username,
      },
      select: {
        id: true,
        password: true,
      },
    })
    // (plain password, hashed password)
    const ok = await bcrypt.compare(result.data.password, user!.password ?? '')
    if (ok) {
      const session = await getSession()
      // 위에서 이미ㅣ 값이 존재하는걸 검증했기 때문에 홗신 가능
      session.id = user!.id
      redirect('/profile')
    } else {
      return {
        fieldErrord: {
          password: ['Wrong password'],
          email: [''],
        },
      }
    }
  }
}

// const inputPassword = formData.get("password")
// console.log(" 입력한 비밀번호?")
// console.log(inputPassword)
// let error: string;
//     if(inputPassword == "12345"){
//         await new Promise((resolve) => setTimeout(resolve,3000))
//         return error = ""
//     }else if(inputPassword != "12345"){
//         return error = "Wrong password"

//     }
/*
 (email) => (email.includes('@zod.com') ? true : false),
      'Only @zod.com emails are allowed',
*/
