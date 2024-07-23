import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
  <div className="container-fluid position-relative p-0">
    <div className="container-fluid bg-web-color py-5 mb-5 hero-header">
            <div className="container py-5">
                <div className="row justify-content-center py-5">
                    <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
                        <h1 className="display-3 text-white mb-3 animated slideInDown" data-aos="zoom-in">Enjoy Your Vacation With Us</h1>
                        <p className="fs-4 text-white mb-4 animated slideInDown" data-aos="fade-up" data-aos-easing="ease" data-aos-delay="300">Tempor erat elitr rebum at clita diam amet diam et eos erat ipsum lorem sit</p>
                        {/* <div className="position-relative w-75 mx-auto animated slideInDown" data-aos="fade-up"data-aos-easing="ease" data-aos-delay="600">
                            <input className="form-control border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" placeholder="Eg: Thailand"/>
                            <button type="button" className="btn btn-primary bg-web-color rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{margin:'7px 0px 0px 0px'}}> Search </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
  </div>
    </>
  )
}

export default Hero