import React from 'react'
import './Team.css'
import Teamdeta from './Teamdeta'


const Team = () => {
    return (

        <>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h6 className="section-title bg-white text-center text-web-color px-3">Travel Guide</h6>
                        <h1 className="mb-5" data-aos="fade-up" data-aos-delay="100">Meet Our Guide</h1>
                    </div>
                    <div className="row g-4" data-aos="fade-up" data-aos-delay="200">
                        {Teamdeta.map((item, i) => {
                            return (
                                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={i}>
                                    <div className="team-item">
                                        <div className="overflow-hidden">
                                            <img className="img-fluid" src={item.img} alt="" />
                                        </div>
                                        <div className="position-relative d-flex justify-content-center" style={{ marginTop: "-19px" }}>
                                            <a className="btn btn-square mx-1" href={item.flink}><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square mx-1" href={item.tlink}><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square mx-1" href={item.i}><i className="fab fa-instagram"></i></a>
                                        </div>
                                        <div className="text-center p-4">
                                            <h5 className="mb-0">{item.name}</h5>
                                            <small>{item.dtl}</small>
                                        </div>
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

export default Team