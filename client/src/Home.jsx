import Posts from "./components/Posts/Posts";

// import C from "./components/Form/Form";
import { Link } from "react-router-dom";



export default function Home() {
  return (
    <div className="w-[90%] mt-5 m-auto ">
      {/* NavBar style */}
      <div className="bg-blue-400 rounded h-[70px] text-center py-2">
        <h1 className="text-5xl font-bold text-white">
          Memories
        </h1>
      </div>
      
      {/* content container */}
      <div className="container ">
        <div className="my-5 ">
            <Link to={"/create"} className=" bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded" >Create</Link>
        </div>
        <div className="posts bg-blue-100 p-8">
          <Posts/>
        </div>
      </div>
    </div>
    
  )
}