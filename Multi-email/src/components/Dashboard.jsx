function Dashboard() {
    return (
      <div>
    
    <div className="flex h-12 items-center bg-white shadow-2xl">
      <ul>
        <li><input type="text " placeholder="Search" className=" w-24 h-8 text-gray-500. items-center font-play"/> </li>
      </ul>

    </div>
    <h1 className="text-3xl font-semi-bold font-Nunito pl-4 pb-12">Dashboard</h1>
    <div className="px-4">
      <div className="flex justify-center gap-10 pb-10">
        <div className="bg-green-400 w-1/2 h-48 "></div>
        <div className="bg-red-600 w-1/2 h-48"></div>
        
      </div>
      <div className="flex justify-center gap-10 ">
        <div className="bg-blue-400 w-1/2 h-48 "></div>
        <div className="bg-black w-1/2 h-48"></div>
        
      </div>
      
    </div>
    
      </div>
    )
  }
  export default Dashboard;
