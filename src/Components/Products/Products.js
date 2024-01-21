import React from 'react';
import './Products.css'
import p1 from '../../images/p1.png'
import p2 from '../../images/p2.png'
import p3 from '../../images/p3.png'

const Products = (props) => {

    const data = props.data;
    const title = props.title;
    return (
        <div className="container my-5">
            <div className="d-flex">
                <div className="line bg-danger me-3"></div>
                <h2 className="fw-bold">{title}</h2>
            </div>

            <div className="row justify-content-between align-items-center mt-5">

               {
                data.map(data =>  <div key={data.id} className="col-md-2 product-container bg-white p-3">
                <img width="300" className="img-fluid mx-auto d-block" src ={data.image} alt="" />
                <h2 className="fs-6 text-center">{data.description}</h2>

                <div className="d-flex justify-content-center">
                    <button className="btn btn-success mx-1">Buy Now</button>
                    <button className="btn btn-primary mx-1">$10</button>
                </div>
            </div>)
               }
               
            </div>
            
        </div>
    );
};

export default Products;