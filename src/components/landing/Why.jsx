import React from 'react'
import {FaComments} from 'react-icons/fa'
import Fade from 'react-reveal'
const Why = () => {
    return (
        <Fade duration={1500} >        
            <div className="why-container">
                <h1>Why Remarv Foods?</h1>
                <div className="why">
                    <div className="reason">
                        <div className="icon">
                            <FaComments/>
                        </div>
                        <h2>Quality</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsa iusto, minima possimus pariatur eos fugiat reiciendis est, 
                        </p>
                    </div>

                    <div className="reason">
                        <div className="icon">
                            <FaComments/>
                        </div>
                        <h2>Quality</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsa iusto, minima possimus pariatur eos fugiat reiciendis est, 
                        </p>
                    </div>

                    <div className="reason">
                        <div className="icon">
                            <FaComments/>
                        </div>
                        <h2>Quality</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ipsa iusto, minima possimus pariatur eos fugiat reiciendis est, 
                        </p>
                    </div>
                    
                </div>
            </div>
        </Fade>

    )
}

export default Why
