import Posts from "./components/Posts/Posts";





export default function App() {
  return (
    <div className="w-[90%] mt-5 m-auto ">
      {/* NavBar style */}
      <div className="bg-blue-400 rounded h-[70px] text-center py-2">
        <h1 className="text-5xl font-bold text-white">
          Memories
        </h1>
      </div>
      
      {/* content container */}
      <div className="container grid grid-col-4 grid-flow-col gap-4">
        <div className="posts bg-blue-100 col-span-3">
          <Posts/>
        </div>
        <div className="form bg-red-500">
          form
        </div>
      </div>
    </div>
    
  )
}