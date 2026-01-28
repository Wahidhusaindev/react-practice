import React, { useEffect, useState } from 'react';

const SearchApp = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));
  }, []);

  // Debounce effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  const filteredUsers = users.filter(user =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(debouncedQuery.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center items-center gap-3 my-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search users..."
          className="px-5 py-2 border rounded-md outline-none focus:border-blue-400"
        />
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map(user => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={user.image}
                alt={user.firstName}
                className="w-16 h-16 rounded-full border"
              />
              <div>
                <h2 className="font-semibold text-lg">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="text-sm text-gray-500">
                  {user.gender}, {user.age} years
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SearchApp;
