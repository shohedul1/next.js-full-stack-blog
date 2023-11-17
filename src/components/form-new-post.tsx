"use client";
import ReactTextareaAutosize from "react-textarea-autosize";
import {useState,ChangeEvent,FormEvent} from "react";
import { FormData } from "@/types/blog";

const inputClass = 'w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300';
const buttonClass= "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full disabled:bg-gray-400";

const FormNewPost = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: '',
        description:''
    });

    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });   
    };

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);

    }
    return (
        <form 
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4">
            <div className="mb-4">
                <input 
                type="text" 
                className={inputClass}
                placeholder="Enter the title"
                name="title"
                value={formData.title} 
                onChange={handleChange}/>

            </div>
            <div className="mb-4">
                <input 
                type="text" 
                className={inputClass}
                placeholder="Enter the description"
                name="description"
                value={formData.description} 
                onChange={handleChange}/>

            </div>
            <div className="mb-4">
               <ReactTextareaAutosize 
               minRows={5}
               name="content"
               placeholder="Enter the content"
               className={inputClass}
               value={formData.content}
               onChange={handleChange}/>

            </div>
            <button className={buttonClass}>
                Submit
            </button>

        </form>
    )
}

export default FormNewPost