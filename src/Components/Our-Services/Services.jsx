import React, { useState } from 'react';
import './Services.css'
import Servicesdeta from './Carddeta';


const Services = () => {
    return (
        <>
            {/* Service Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Services</h6>
                        <h1 className="mb-5" data-aos-delay="50" data-aos="zoom-in-up">Our Services</h1>
                    </div>
                    <div className="row g-4" data-aos="fade-up">
                        {Servicesdeta.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                                    <div className="service-item rounded pt-3">
                                        <div className="p-4">
                                            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                            <h5>{item.titel}</h5>
                                            <p>{item.dtl}</p>
                                        </div>
                                    </div>
                                </div>);

                        })}
                    </div>
                </div>
            </div>
            {/* Service End  */}
        </>
    )
}

export default Services