

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
               <section className="w-full grid grid-cols-3 items-center justify-between gap-3">
            {characters.map((character, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-2 border border-gray-500 rounded-lg">
                    <div className="w-[4rem]">
                <img src={character.image} alt="" />
                    </div>
                    <p className="text-xl font-bold">{character.name}</p>
                    <p className="text-xl font-bold">{character.ki}</p>
                </div>
            ))}
            </section>
           </div>
        </div>
    )
}