import React from 'react'

export const UserItem = () => {
  return (
    <>
    <div className="flex items-center justify-start space-x-4 border rounded-[10px] p-2">
        <div className="avatar rounded-full p-2 bg-slate-500 flex items-center justify-center text-slate-950">
           <p>OE</p> 
        </div>  
    <div>
        <p className='font-bold text-[16px]'>Ola Eric</p>
        <p className='text-[12px] text-neutral-500'>Welcome to your dashboard</p>
    </div>
    </div>
    </>
  )
}


