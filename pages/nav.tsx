import Link from 'next/link'
import { useState,useRef, SyntheticEvent } from 'react';
export default function Nav() {
    const linkStyle="p-2 hover:bg-slate-500"
    const [selectedTab, setSelectedTab] = useState<string>("Home");
    const tabs = ["Home", "Resume", "Projects","Toys","Admin"];
    const handleTabSelect =(e:any)=>{
        console.log(e)
        e.target.style="background-color: #4a5568"
        setSelectedTab(e.target.innerText)
        }
    
    
    return (
        <div className='flex flex-col bg-black text-white items-center w-screen p-4'>
        <div className='flex flex-row border-b-2 '>
            {tabs.map((tab, index) => {
                
                return (
                    <Link href={tab==="Home"? "/":`/${tab.toLowerCase()}`} key={index}
                         className={linkStyle}
                         style={selectedTab===tab?{backgroundColor:"#4a5568"}:{backgroundColor:"Black"}}
                         onClick={(e)=>handleTabSelect(e)}>
                            {tab}
                        </Link>
                  
                )
            })}
        </div>
        </div>
    )
}