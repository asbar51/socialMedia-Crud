

const EachPost = ({key,title,message,creator,id}) => {
  return (
    <div className='w-{300px} h-{200px} p-3  border-4 border-solid border-indigo-900 hover:border-dotted  text-center' key={key}>
      <h1>title:{title}</h1>
      <p>message:{message}</p>
      <small>creator:{creator}</small>
      <p>id: {id} </p>
      <button className="mx-1 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
        Edit
      </button>
      <button className="mx-1 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
        Delete
      </button>
    </div>
  )
}

export default EachPost