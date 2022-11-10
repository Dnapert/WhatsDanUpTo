import { useState } from "react";
import aws from "./components/awspost";

export default function awsSend() {

    const [message, setMessage] = useState<string>('');
    const [file, setFile] = useState<File>();
    const storeFile=(e: React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files){
            setFile(e.target.files[0]);
        }
    }
    const uploadFile = async () => {
        setMessage("uploading!");
        if(file){
        var returnData = await aws(file);
            setMessage(String(returnData));
        setFile(undefined);
    }}
    return (
        <div className="bg-black w-screen h-screen flex flex-col items-center">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" >Upload files</label>
            <input onInput={(e)=>{storeFile(e)}}className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" />
            <button  onClick={uploadFile}  className='p-2 text-black bg-gray-50 rounded-md h-10 w-20 m-2'>Send</button>
            <p>{message}</p>
        </div>
    )
}