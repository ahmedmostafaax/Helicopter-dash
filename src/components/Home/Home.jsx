import React from 'react';
import About from "../../assets/About.jpg";

export default function Home() {
  return (
    <div style={{ backgroundImage: 'radial-gradient(rgba(200, 200, 200, 0.1) 1px, transparent 1px)', backgroundSize: '10px 10px', minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center">
            <h5 className='my-3 text-danger'>Our Story</h5>
          <div className="col-md-5 mb-5">
            <h3><b className="text-danger">H</b>elicopter:</h3>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis doloremque debitis ratione ea quam
              alias dicta. Ipsam debitis voluptates molestias?
            </p>
          </div>
          <div className="col-md-7">
            <img src={About} className="img w-100" height={350} alt="About" />
          </div>
        </div>
      </div>
    </div>
  );
}
