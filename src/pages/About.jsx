import {useState} from 'react'

const About = () => {
    const isLoggedIn = true;
    const [counter, setCounter] = useState(0);
    return (
        <>
            <div className='flex'>
                <h1 className='bg-amber-300 inline-block'>Conditional Rendering</h1>
                {isLoggedIn ? "You are logged in." : "Please log in."}
            </div> 
            <h1>This is useState</h1>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            </>
    )
}

export default About