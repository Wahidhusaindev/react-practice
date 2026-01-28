import { useState } from 'react'

const About = () => {
    const isLoggedIn = true;
    const [user, setUser] = useState({
        name: "Celeste Moon",
        email: "celestemoon10@gmail.com",
        age: 21
    })
    return (
        <>
            <div className='flex'>
                <h1 className='bg-amber-300 inline-block'>Conditional Rendering</h1>
                {isLoggedIn ? "You are logged in." : "Please log in."}
            </div>
            <h1>User Profile Page</h1>
            <p> name={user.name} email={user.email} age={user.age}</p>
           
        </>
    )
}

export default About