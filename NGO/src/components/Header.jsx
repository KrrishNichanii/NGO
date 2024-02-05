import React from 'react'
import Logo from './Logo'
import { useNavigate } from 'react-router-dom'


function Header() {
    const authStatus = false
    const navItems = [
        {
            name: 'Home' ,
            slug: '/' ,
            status: true
        }
        ,
        {
            name: 'Login' ,
            slug: '/login' ,
            status: !authStatus
        }
        ,
        {
            name: 'Signup' ,
            slug: '/signup' ,
            status: !authStatus
        },
        {
            name:'View NGOs' ,
            slug:'/viewngos' ,
            status: !authStatus
        }
    ]

    const navigate = useNavigate()

  return (
    <div className='bg-lime-600 w-full h-[10%] flex justify-between px-5'>

        <div className="">
            <Logo className={"py-2 text-2xl text-white"}/>
        </div>
        <div className="">
        <ul className='flex gap-3'>
              {
                navItems?.map((item) => {
                    if(item.status){
             
                     return <li  key={item.name}>
                     <button  className='my-2 py-2 rounded-2xl duration-500 hover:bg-amber-300 px-3 text-white' onClick={() => navigate(item.slug)}>
                       {item.name}
                     </button>
                     
                     </ li>
                        
                    }
                })
              }

              {authStatus && 
                  ( <button  className='my-2 py-2 rounded-2xl duration-500 hover:bg-amber-300 px-3 text-white' onClick={() => navigate(item.slug)}>
                  Log Out
                </button>
                  )
              }
              
              </ul>
        </div>
    </div>
  )
}

export default Header