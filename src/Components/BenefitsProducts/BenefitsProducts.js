import React from 'react';
import './BenefitsProducts.css'
import benefits from '../../images/benefit.png'
import f1 from '../../images/f1.png'
import f2 from '../../images/f2.png'
import f3 from '../../images/f3.png'

const BenefitsProducts = () => {
    return (
        <div className="container mt-5">

            <div className="d-flex">
                <div className="line bg-danger me-3"></div>
                <h2 className="fw-bold">Benefit of Our Products</h2>
            </div>

            <div className="row justify-content-center align-items-center">

                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, consectetur sunt iste sit sint eum! Nemo omnis, velit necessitatibus eos, ullam alias voluptate culpa, ipsa odio numquam aspernatur ducimus cumque?</p>

                    <div className="d-flex">
                        
                        <div className="features p-3">
                            <img className="img-fluid mx-auto d-block" src={f1} alt="" />
                            <p>Lorem, ipsum dolor.</p>
                        </div>

                        <div className="features p-3">
                            <img className="img-fluid mx-auto d-block" src={f2} alt="" />
                            <p>Lorem, ipsum dolor.</p>
                        </div>

                        <div className="features p-3">
                            <img className="img-fluid mx-auto d-block" src={f3} alt="" />
                            <p>Lorem, ipsum dolor.</p>
                        </div>

                    </div>

                </div>

                <div className="col-md-6">
                    <img className="img-fluid mx-auto d-block" src={benefits} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BenefitsProducts;