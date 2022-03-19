import React from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <div className="body">
                        <h1 className="heading">
                            remarv foods
                        </h1>
                        <p className="details">
                            At remarv foods, we brings you the best food materials, 
                            giving you quality assurance, with various food material 
                            all natural and packaged 
                        </p>
                        <div className="link">
                            <Link to="/about">About Us</Link>
                        </div>
                    </div>
                   
                </div>

            </div>
        </>
    )
}

export default Hero
