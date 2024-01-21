import React from 'react';
import './Hero.css'
import hero from '../../images/hero.png'
const Hero = () => {
    return (
        <div className="hero-section pt-5">
            
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h1 className="fw-bold">Buy the <span className='text-danger'>Best Quality</span> <br/> Natural and Botanical <br /> Health and Beauty <br />Products</h1>
                            <p className="hero-text text-muted">All our products meet the highest standards in the industry and are comparable to products found in the best skincare, haircare, bath and body care saloons anywhere in the United States.</p>
                            <button className="btn btn-danger px-5 py-2">Shop Now</button>
                        </div>
                        
                        <div className="col-md-6">
                            <img className="img-fluid mx-auto d-block" src={hero} alt="" />
                        </div> 
                    </div>
                </div>

        </div>
    );
};

export default Hero;