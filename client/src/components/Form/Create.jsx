import { useState } from "react"
import { addPost } from "../../UserReducer"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

const Create = () => {
  const posts = useSelector((state) => state.posts)


  const [title,setTitle] = useState('')
  const [message,setMessage] = useState('')
  const [creator,setCreator] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addPost({id: posts[posts.length - 1].id + 1, title: title,message:message, creator:creator}))
    navigate('/')
    
  }
  return (
    <div className="">
        <div className="bg-blue-600 w-[500px] m-auto p-3 mt-20 rounded align-items-center">
            <h1 className="text-center text-white font-bold text-[30px] bg-blue-900 rounded">Create a Post</h1>
            <form className="grid gap-2" onSubmit={handleSubmit}>
                {/* <div className=" m-auto p-3">
                <input className="p-2 rounded w-[300px]" onChange={(e) => setId(e.target.value)} type="number" placeholder="Id" name="id" />
                </div> */}
                <div className=" m-auto p-3">
                <input className="p-2 rounded w-[300px]" autoFocus onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" name="title" />
                </div>
                <div className=" m-auto p-3">
                <input className="p-2 rounded w-[300px]" onChange={(e) => setMessage(e.target.value)} type="text" placeholder="message" name="message" />
                </div>
                <div className=" m-auto p-3">
                <input className="p-2 rounded w-[300px]" onChange={(e) => setCreator(e.target.value)} type="text" placeholder="creator" name="creator" />
                </div>
                <button className="mx-1 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                Submit
                </button>
             </form>
        </div>
    </div>
  )
}

export default Create