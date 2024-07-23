import React from 'react'
import Processdeta from './Processdeta'

const Process = () => {
    return (
        <>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Process</h6>
                        <h1 className="mb-5" data-aos="fade-up" data-aos-delay="100">3 Easy Steps</h1>
                    </div>
                    <div className="row gy-5 gx-4 justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        {Processdeta.map((item, i) => {
                            return (
                                <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s" key={i}>
                                    <div className="position-relative border border-primary pt-5 pb-4 px-4">
                                        <div className="d-inline-flex align-items-center justify-content-center bg-web-color rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{ width: "100px", height: "100px" }}>
                                            <div dangerouslySetInnerHTML={{ __html: item.icon }} />
                                        </div>
                                        <h5 className="mt-4">{item.titel}</h5>
                                        <hr className="w-25 mx-auto bg-web-color mb-1" />
                                        <hr className="w-50 mx-auto bg-web-color mt-0" />
                                        <p className="mb-0">{item.dtl}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Process