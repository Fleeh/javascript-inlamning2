import React from 'react'
import Navbar from '../components/navbar/Navbar';

const Home = () => {
    return (
        <>
                <Navbar />
                    <div className="Homepage">
                        <div className="container mt-5 d-flex justify-content-center align-items-center">
                            Welcome to class WIN-21,  Ec utbildning
                        </div>
                    </div>
                    <h1 className="lista d-flex justify-content-center align-items-center">
                        On this website you can see customers from our class using a WebApi through Azure
                    </h1>
        </>
        
    )
}

export default Home
