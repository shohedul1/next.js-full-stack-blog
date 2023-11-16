"use client";

import { ChangeEvent, useState } from "react";


const labelClass= 'block text-gray-700 font-bold mb-2';
const inputClass = "w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300";
const buttonClass = "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mt-2 disabled:bg-gray-400";

const FormComments = () => {
  const [comment,setComment] = useState<string>('');

  const handleCommentChange =(e: ChangeEvent<HTMLInputElement>)=>{
    setComment(e.target.value);
    
  };

  const handleSubmitComment = () =>{
    
    console.log(comment);
  }
    
  return (
    <div className='mt-4'>
        <label htmlFor="comment" className={labelClass}>Add Comment</label>
         <input 
         type="text" 
         className={inputClass}
         name="comment"
         value={comment}
         onChange={handleCommentChange} />
         <button className={buttonClass} onClick={handleSubmitComment}>Submit Comment</button>
    </div>
  )
}

export default FormComments;




