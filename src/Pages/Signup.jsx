

import { useState } from "react"
import { api } from "../api/api"
import { ToastContainer, toast } from "react-toastify"


export default function Signup() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (event) => {
       const {name, value} = event.target

       setFormData(prev => ({
        ...prev,
        [name]: value
       }))
    }

    const handleSubmit = async(event) => {
      event.preventDefault()
        try{
          const response = await api.post('/post-user', formData)
          const data = await response.data
          console.log(response.status)
          console.log(response.statusText)
          console.log(data)
          if(response.status === 201) {
            toast.success(data.message)
          }

          if(response.status === 400) {
            toast.error(response.message)
          }


          return;
        }catch(err){
          if(err instanceof Error) {
            toast.error(err.message)
            throw new Error(err.stack)
          }
        }
    }



    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
       <ToastContainer/>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Create an account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={handleSubmit} className="space-y-6">

        <div>
        <label htmlFor="name" className="block text-sm/6 font-medium text-black">Username</label>
        <div className="mt-2">
          <input id="name" type="text" name="name" required value={formData.name} onChange={handleChange} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-black focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>


      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-black">Email address</label>
        <div className="mt-2">
          <input id="email" type="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-black focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-black">Password</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">Forgot password?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="password" type="password" name="password" required autoComplete="current-password" value={formData.password} onChange={handleChange} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Create account</button>
      </div>
    </form>

  </div>
</div>
    )
}