import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Input from '../components/Input';
import Logo from '../components/Logo';
import Button from '../components/Button';

//This is NGO signup yet to change

export function NGO_Signup() {
    const navigate=  useNavigate() ; 
    const {register , handleSubmit} = useForm() ;
    const [error , setError] = useState("");

    const submit =async (data) => {
      
    }
    
  return (

    <div className="flex flex-col items-center 
        justify-center w-full mt-5">
            <div className={`mx-auto w-full max-w-lg 
             rounded-xl p-10 border border-black/10 bg-amber-100 flex flex-col justify-center `}>

                 <div className="mb-2 flex justify-center">
                       <span className="inline-block w-full max-w-[100px]">
                        <Logo className={"py-2 text-2xl"}/>
                        </span>
                 </div>
                 <button type="button" className='flex gap-2 items-center justify-center bg-white w-[50%] self-center p-2 rounded-2xl hover:bg-gray-100 border hover:border-black'>
                 <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
                    <span>Sign in with Google</span>
                 </button>
                 
                 <p className="mt-2 text-center text-base text-black/60">
                    Don't have any account?
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                          Sign Up
                    </Link>
                 </p>
                 {error && <p className='text-red-600 mt-1 text-center'>{error}</p>}

                 <form className='mt-6 flex flex-col gap-3' onSubmit={handleSubmit(submit)}>
                   <Input
                    // label="Email:"
                    placeholder="Enter Email"
                    autoComplete="off"
                    {...register('email' ,{
                        required:true , 
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            setError("Email address must be a valid address"),
                        }
                    })}
                    />
                    <Input
                    // label="Password:"
                    placeholder="Enter Password"
                    {...register('password' , {required:true })}
                    className=''
                    autoComplete="off"
                    />

                    <Button type='submit'>
                        Submit
                    </Button>
                      
                    
                 </form>

                 </div>
   
        </div>
   
   
  )
}

export default NGO_Signup


