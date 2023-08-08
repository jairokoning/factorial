"use client";
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';

export default function Home() {
  const [number, setNumber] = useState('');
  const { push } = useRouter();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNumber(event.target.value);    
  }

  const handleSubmitForm = (event: FormEvent) => {
    event.preventDefault();
    push(`/factorial/${number}`);
  }

  return (    
      <div className="min-h-screen flex items-center justify-center bg-lime-100">
        <div className="p-4 shadow-md bg-white rounded-md">
          <h1 className="text-2xl font-semibold mb-4 text-black">Factorial</h1>
          <p className='text-gray-500 mb-2'>Enter a number and submit to display the factorial</p>
          <form onSubmit={handleSubmitForm} className="space-y-3">
            <input
              className="w-full p-3 border border-gray-300 focus:outline-lime-500 rounded text-xl text-black"
              type="number" 
              placeholder='Type a number...' 
              onChange={handleChangeInput}
              value={number}
              required
            />
            <button 
              type='submit'
              className="w-full py-3 px-4 bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  )
}
