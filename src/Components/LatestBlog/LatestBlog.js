import React from 'react';

const LatestBlog = (props) => {
    const title = props.title;
    const data = props.data;
    return (
        <div className="container my-5">
            <div className="d-flex">
                <div className="line bg-danger me-3"></div>
                <h2 className="fw-bold">{title}</h2>
            </div>

            <div className="row justify-content-center align-items-center mt-5">

               {
                data.map(data => <div key={data.id} className="col-md-3 product-container bg-white p-3 mx-2">
                <img width="300" className="img-fluid mx-auto d-block" src ={data.image} alt={data.description} />
                <h2 className="fs-6">{data.name}</h2>
                <h3 className="text-danger fs-6">{data.date}</h3>
                <h3 className="fs-6">{data.description}</h3>
            </div>
                )
               }

                {/* <div className="col-md-2 product-container bg-white p-3 mx-2">
                    <img width="300" className="img-fluid mx-auto d-block" src ={p2} alt="" />
                    <h2 className="fs-6 text-center">Lorem, ipsum dolor.</h2>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success mx-1">Buy Now</button>
                        <button className="btn btn-primary mx-1">$11</button>
                    </div>
                </div>

                <div className="col-md-2 product-container bg-white p-3 mx-2">
                    <img width="300" className="img-fluid mx-auto d-block" src ={p3} alt="" />
                    <h2 className="fs-6 text-center">Lorem, ipsum dolor.</h2>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success mx-1">Buy Now</button>
                        <button className="btn btn-primary mx-1">$12</button>
                    </div>
                </div>

                <div className="col-md-2 product-container bg-white p-3 mx-2">
                    <img width="300" className="img-fluid mx-auto d-block" src ={p1} alt="" />
                    <h2 className="fs-6 text-center">Lorem, ipsum dolor.</h2>

                    <div className="d-flex justify-content-center">
                        <button className="btn btn-success mx-1">Buy Now</button>
                        <button className="btn btn-primary mx-1">$13</button>
                    </div>
                </div> */}

            </div>
            
        </div>
    );
};

export default LatestBlog;