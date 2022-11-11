import { useState } from "react";
export default function toyPage(){

    type Tpoint={
        x:number,
        y:number
    }

    const [coords, setCoords] = useState<Tpoint[]>([]);
    const [coordStack,setCoordStack] = useState<Tpoint[]>([])
const handleRemoveDot = () => {
    if(coords.length>=1){
    const newCoords = [...coords]
    const popped=newCoords.pop()
    if(popped)
    setCoordStack([...coordStack,popped])
    setCoords(coords.slice(0, -1));
    console.log({coordStack})
    }
}
const handleRedoDot = () => {
    if(coordStack.length>=1){
    const popped = coordStack.pop();
    if (popped)
    setCoords([...coords,popped])
    }
}
    return(
        <div className="flex flex-col items-center bg-slate-800">
        <button className="p-2 text-white z-1"onClick={handleRemoveDot}> Undo </button>
        <button className="p-3 text-white z-1" onClick={handleRedoDot}> Redo </button>
        <div className="flex flex-col bg-slate-800 w-screen h-screen items-center"
        onMouseDown={(e)=>{
            console.log(e.clientX, e.clientY)
            setCoords([...coords,{x:e.clientX, y:e.clientY}])
        }}>
            
            {coords.map((coord,index)=>{
                
                return(
                <div style={{position:'absolute',width:'10px',height:'10px',backgroundColor:'red',top:coord.y+'px',left:coord.x+'px'}} key={index}></div>)
                
            })}
        </div>
        </div>
    )
}