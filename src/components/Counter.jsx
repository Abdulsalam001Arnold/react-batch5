

import { useState } from "react"
import { IoIosAdd } from "react-icons/io";
import { FaMinus } from "react-icons/fa";
import { RiResetRightFill } from "react-icons/ri";
import { useEffect } from "react";


export default function Counter() {
    
    const [counter, setCounter] = useState(0)

    const increase = () => {
        setCounter(counter + 1)
    }

    const decrease = () => {
        if(counter > 0) {
            setCounter(counter - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }

    useEffect(() => {
     console.log("Component mounted")
    }, [])

    // useEffect(() => {
    //     console.log("This runs on every re-render")
    // })

    useEffect(() => {
     console.log("This will run only when counter changes")
    }, [counter])

    return(
        <div>
             <h1>
                Counter is here and I know ijfopkerpjrejeroij
             </h1>j

             <h1 className="text-6xl text-center">
                {counter}
             </h1>

             <div className="flex items-center gap-4 justify-center">
                <button onClick={increase}>
                    <IoIosAdd />
                </button>

                <button onClick={reset}>
                    <RiResetRightFill />
                </button>


                <button onClick={decrease}>
                    <FaMinus />
                </button>

             </div>
        </div>
    )
}