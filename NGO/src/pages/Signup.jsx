import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Input from '../components/Input';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { auth } from '../firebase'; 
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 

//This is user signup
export function Signup() {
    
    const navigate=  useNavigate() ; 
    const {register , handleSubmit} = useForm() ;
    const [error , setError] = useState("");

    const submit =async (data) => {
      if(data.password != data.vpassword){
        setError("Passwords do not match")
        return 
      }
      try {
        const userCredential = await auth.createUserWithEmailAndPassword(
            data.email,
            data.password
        );

        console.log('User created:', userCredential.user);
        navigate('/');
      } 
      catch (error) {
        setError(error.message);
      }
      alert("Account Created Succesfully!")
    }
    
  return (

    <div className="flex flex-col items-center 
        justify-center w-full mt-5">
            <div className={`mx-auto w-full max-w-lg 
            bg-amber-100  rounded-xl p-10 border border-black/10`}>

                 <div className="mb-2 flex justify-center">
                       <span className="inline-block w-full max-w-[100px]">
                        <Logo className={"py-2 text-2xl"}/>
                        </span>
                 </div>
                 <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                 
                 <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                          Sign in
                    </Link>
                 </p>
                 {error && <p className='text-red-600 mt-1 text-center'>{error}</p>}

                 <form className='mt-6 flex flex-col gap-3' onSubmit={handleSubmit(submit)}>
                    <Input 
                      //label="Full Name:"
                      placeholder="Enter full name"
                      {
                        ...register('username',{ required:true })
                      }
                      autoComplete="off"
                    />
                   <Input
                    //label="Email:"
                    placeholder="Enter Email"
                    {...register('email' ,{
                        required:true , 
                        validate: {
                            matchPattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            setError("Email address must be a valid address"),
                        }
                    })}
                    autoComplete="off"
                    />
                    <Input
                    //label="Password:"
                    placeholder="Enter Password"
                    {...register('password' , {required:true })}
                    className=''
                    autoComplete="off"
                    />

                    <Input
                    //label="Password:"
                    placeholder="Verify Password"
                    {...register('vpassword' , {required:true })}
                    className=''
                    autoComplete="off"
                    />

                    <Button type='submit'>
                        Create Account
                    </Button>
                      
                    
                 </form>

                 </div>

                 
                
        </div>
   
   
  )
}

export default Signup

