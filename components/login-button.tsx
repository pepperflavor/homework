"use client"
import { useFormStatus } from "react-dom"

type FormButtonProps={
    text: string
}

export default function LoginBtn({ text }: FormButtonProps){
    const {pending} = useFormStatus()

    return(
        <button 
        className="w-full h-12 bg-slate-200 rounded-3xl font-bold disabled:bg-slate-500 active:scale-105 active:"
        disabled={pending}
        >{pending ? "Loading..." : text}</button>
    )
}