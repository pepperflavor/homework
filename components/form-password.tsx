import { register } from "module"

type Text ={
    error : string
}

export default function PasswordInput({error} : Text){

    return(
        <>
            <div className="flex justify-center items-center relative">
                <input
                 className="rounded-2xl w-full h-10 ring-1 focus:-outline-offset-2 focus:outline-slate-300 focus:outline-1 ring-slate-300 border-none pl-10 invalid:ring-red-500 invalid:ring-2" 
                type="password" placeholder="Password" required name="password"/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 absolute left-3 opacity-50">
                <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
                </svg>
            </div>
                <span className="text-red-500 font-m" >{error}</span>
        
                </>
    )
}