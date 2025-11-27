import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const API = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        let response = await res.data;
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-green-500 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 w-full max-w-6xl">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <h2 className="text-xl font-bold text-pink-500">{user.name}</h2>
            <p className="text-blue-600 font-bold mt-1 ">{user.email}</p>

            <div className="mt-4 text-sm text-gray-700 border-t pt-4 space-y-2">
              <p><span className="font-semibold">Phone:</span> {user.phone}</p>
              <p><span className="font-semibold">Website:</span> {user.website}</p>
              <p><span className="font-semibold">City:</span> {user.address.city}</p>
              <Link to={Contact}><button className="mt-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-300">Contact</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default API;
