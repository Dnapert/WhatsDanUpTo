const toyObj = `import SyntaxHighlighter from 'react-syntax-highlighter';
import { useState } from "react";
import toyObj from "./toyCode";
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
export default function toyPage() {

    type Tpoint = {
        x: number,
        y: number
    }
    const codeString = '(num) => num + 1';
    const [coords, setCoords] = useState<Tpoint[]>([]);
    const [coordStack, setCoordStack] = useState<Tpoint[]>([])
    const [viewCode, setViewCode] = useState<boolean>(false)
    const handleRemoveDot = () => {
        if (coords.length >= 1) {
            const newCoords = [...coords]
            const popped = newCoords.pop()
            if (popped)
                setCoordStack([...coordStack, popped])
            setCoords(coords.slice(0, -1));
            console.log({ coordStack })
        }
    }
    const handleRedoDot = () => {
        if (coordStack.length >= 1) {
            const popped = coordStack.pop();
            if (popped)
                setCoords([...coords, popped])
        }
    }
    return (


        <div className="flex flex-col items-center w-screen min-h-screen bg-slate-800">

            <select className="text-black m-3" />

            <div className=" bg-slate-500 rounded-md w-40 h-40  
            sm:w-60 sm:h-60 
            md:w-80 md:h-80 
            lg:w-96 lg:h-96 
            xl:w-96 xl:h-96
            "
                onMouseDown={(e) => {
                    console.log(e.clientX, e.clientY)
                    setCoords([...coords, { x: e.clientX - 5, y: e.clientY - 5 }])
                }}>

                {coords.map((coord, index) => {

                    return (
                        <div style={{ position: 'absolute',
                         width: '10px',
                          height: '10px',
                           backgroundColor: 'red',
                            top: coord.y + 'px',
                             left: coord.x + 'px' }}
                              key={index}></div>)

                })}
            </div>
            <div className="flex flex-row items-center">
                <button className="p-2 rounded-md border-2 text-white z-1 " onClick={handleRemoveDot}>
                 Undo 
                 </button>
                <button className="p-2 rounded-md m-1 border-2 text-white z-1" onClick={handleRedoDot}>
                 Redo
                  </button>
            </div>
            <div className="flex flex-col items-center w-1/2">
                <button className="p-2 rounded-md m-1 border-2 text-white z-1" onClick={() => 
                    setViewCode(!viewCode)}>View Code!</button>


                {viewCode &&
                    <div className="w-fit h-fit bg-slate-400 rounded-md">
                        <SyntaxHighlighter language="javascript" style={nightOwl} >
                            {toyObj}
                        </SyntaxHighlighter>
                    </div>
                }

            </div>


        </div>

    )
}`
export default toyObj;