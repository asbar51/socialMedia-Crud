import { useState } from "react"
import { addPost } from "../../UserReducer"
import { useDispatch } from "react-redux"

const Update = () => {
  const [id,setId] = useState('')
  const [title,setTitle] = useState('')
  const [message,setMessage] = useState('')
  const [creator,setCreator] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addPost({id:id, title: title,message:message, creator:creator}))
  }
  return (
    <div>
      <form className="grid gap-2" onSubmit={handleSubmit}>
        <div className=" m-auto p-3">
          <input className="p-2 rounded" onChange={(e) => setId(e.target.value)} type="number" placeholder="Id" name="id" />
        </div>
        <div className=" m-auto p-3">
          <input className="p-2 rounded" onChange={(e) => setTitle(e.target.value)} type="text" placeholder="title" name="title" />
        </div>
        <div className=" m-auto p-3">
          <input className="p-2 rounded" onChange={(e) => setMessage(e.target.value)} type="text" placeholder="message" name="message" />
        </div>
        <div className=" m-auto p-3">
          <input className="p-2 rounded" onChange={(e) => setCreator(e.target.value)} type="text" placeholder="creator" name="creator" />
        </div>
        <button className="mx-1 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Update