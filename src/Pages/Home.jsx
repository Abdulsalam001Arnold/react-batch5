

import { useState, useEffect } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

export default function Homepage({name, email}) {
    const [characters, setCharacters] = useState([])


    useEffect(() => {
        const fetchItems = async () => {
            try{
                const resposne = await fetch('https://dragonball-api.com/api/characters')
                const data = await resposne.json()
                console.log(data.items)
                setCharacters(data.items)
                toast.success("Characters fetched successfully")
            }catch(err) {
                if(err instanceof Error) {
                    toast.error(err.message)
                    throw new Error("Failed to fetch characters")
                }
            }
        }

        fetchItems()
    }, [])
    return(
        <div>
            <ToastContainer/>
           <h1>
           This is the Home page!!!!!
           </h1>

           Hello {name}, my email is {email}

           <div>
            {characters.map((character, index) => (
                <div key={index}>
                <img src={character.image} alt="" width={500} height={500} />
                </div>
            ))}
           </div>
        </div>
    )
}