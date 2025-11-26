import { useState } from "react";
const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div className="min-h-screen bg-blue-500 flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white p-5">This is the Home Page</h1>
       <h1 className="mt-5 p-3 text-3xl">This is count</h1>
    <button className="p-3 bg-black text-white rounded-xl cursor-pointer" onClick={() => setCount(count + 1)}>Increment</button>
    <p className="font-bold text-white mt-5 p-10">Count value: {count}</p>
    </div>
   
    </>
  );
};

export default Home;
