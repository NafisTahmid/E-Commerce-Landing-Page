import React from 'react';
import './MakesDifferent.css'
import '../../App.css'
import s1 from '../../images/s1.png'
import s2 from '../../images/s2.png'
import s3 from '../../images/s3.png'
import s4 from '../../images//s4.png'
const MakesDifferent = () => {
    return (
        <div className="different-section mb-5">
            
                <div className="container py-5">
                    <h2 className="text-center fw-bold py-5">What Makes Us Different?</h2>
                    <div className="row justify-content-between align-items-center">
                        
                        <div className="col-md-2 different p-3 bg-white mx-3 p-3">
                                <img className="img-fluid mx-auto d-block" src={s1} alt="" />
                                <p className="text-center">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="col-md-2 different p-3 bg-white mx-3 p-3">
                                <img className="img-fluid mx-auto d-block" src={s2} alt="" />
                                <p className="text-center">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="col-md-2 different p-3 bg-white mx-3 p-3">
                                <img className="img-fluid mx-auto d-block" src={s3} alt="" />
                                <p className="text-center">Lorem ipsum dolor sit.</p>
                        </div>
                        <div className="col-md-2 different p-3 bg-white mx-3 p-3">
                                <img className="img-fluid mx-auto d-block" src={s4} alt="" />
                                <p className="text-center">Lorem ipsum dolor sit.</p>
                        </div>

                    </div>
                </div>

        </div>
    );
};

export default MakesDifferent;