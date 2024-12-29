import React from 'react';
import Image from "next/image";
const HeroCarousel = () => {
    return(
        <div className="carousel slide" data-bs-ride="carousel" id="carousel-1" style="height: 600px;">
        <div className="carousel-inner h-100">
            <div className="carousel-item active h-100"><Image className="w-100 d-block position-absolute h-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" style="z-index: -1;" />
                <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 offset-md-2">
                            <div style="max-width: 350px;">
                                <h1 className="text-uppercase fw-bold">Biben dum<br/>fringi dictum, augue purus</h1>
                                <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item h-100"><Image className="w-100 d-block position-absolute h-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" style="z-index: -1;" />
                <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 offset-md-2">
                            <div style="max-width: 350px;">
                                <h1 className="text-uppercase fw-bold">Biben dum<br/>fringi dictum, augue purus</h1>
                                <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-item h-100"><Image className="w-100 d-block position-absolute h-100 fit-cover" src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png" alt="Slide Image" style="z-index: -1;" />
                <div className="container d-flex flex-column justify-content-center h-100">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 offset-md-2">
                            <div style="max-width: 350px;">
                                <h1 className="text-uppercase fw-bold">Biben dum<br />fringi dictum, augue purus</h1>
                                <p className="my-3">Tincidunt laoreet leo, adipiscing taciti tempor. Primis senectus sapien, risus donec ad fusce augue interdum.</p><a className="btn btn-primary btn-lg me-2" role="button" href="#">Button</a><a className="btn btn-outline-primary btn-lg" role="button" href="#">Button</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a>
            <a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a>
        </div>
        <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="2"></button></div>
    </div>
    )
}

export default HeroCarousel;