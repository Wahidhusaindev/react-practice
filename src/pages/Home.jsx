import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/counterSlice'
import { login, logout } from '../features/userSlice'

const Home = () => {
  const count = useSelector((state) => state.counter)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <div className="min-h-screen bg-amber-200 flex items-center">
      <div className="mx-auto max-w-5xl px-6 py-12 text-center">

        <h1 className="text-4xl font-extrabold">
          Redux Toolkit Demo
        </h1>

        {/* Counter Section */}
        <h2 className="mt-6 text-xl font-bold">Counter: {count}</h2>
        <button
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>

        <hr className="my-6" />

        {/* User Section */}
        {user.isLoggedIn ? (
          <>
            <h2 className="text-2xl font-semibold">
              Welcome, {user.name} 👋
            </h2>
            <button
              className="bg-red-500 text-white px-4 py-2 mt-4 rounded"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            onClick={() => dispatch(login('Wahid Husain'))}
          >
            Login
          </button>
        )}

      </div>
    </div>
  )
}

export default Home
