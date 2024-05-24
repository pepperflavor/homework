"use client"

import PasswordInput from "@/components/form-password";
import LoginBtn from "@/components/login-button";
import Image from "next/image";
import { useFormState } from "react-dom";
import { handlePassword } from "./actions";
import { error } from 'console';
import FormInput from "@/components/form-input";


export default function Home() {

  const [state, action] = useFormState(handlePassword, null)


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-8 px-6 bg-red-300 gap-3">
      <div className="flex flex-col *:font-medium">
      <h1 className="text-2xl font-extrabold">Login page</h1>
      </div>
          <form action={action} className="flex flex-col gap-3 w-9/12">
            <div className="flex justify-center items-center relative">
              <FormInput type="text" placeholder="이메일을 적어주세요" name="email" required errors={state?.fieldErrors.email}/>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute
                          left-3 opacity-50 w-6 h-6 top-2">
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            </div>


            <div className="flex justify-center items-center relative">
              <FormInput type="text" placeholder="UserName" name="username" required errors={state?.fieldErrors.username}/>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute left-3 top-2 opacity-50">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            </div>

            <div className="flex justify-center items-center relative">
                <FormInput type="password" placeholder="비밀번호 입력" name="password" required errors={state?.fieldErrors.password}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute left-3 top-2 opacity-50">
                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                </svg>
            </div>

            <LoginBtn text="Log in"/>
            {/* { state?.formErrors.email  ??
                <div className=" flex font-bold bg-green-500 h-14 rounded-2xl items-center text-2xl text-center justify-center"> Welcome back!</div>
                } */}
          </form>
    </div>
  );
}
