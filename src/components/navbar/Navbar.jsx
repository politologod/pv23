import React from 'react';
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top bg-body py-3">
            <div className="container">
                <Link className='navbar-brand d-flex align-items-center justify-content-start' href="/">
                    <Image className="ms-2" src={"https://res.cloudinary.com/dzg6yhqzx/image/upload/v1728285779/puravida-horizontal_gvztc1.svg"} width={250} height={50} alt="Logo" />
                </Link>

                <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-4">
                    <span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse flex-grow-0 order-md-first" id="navcol-4">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><Link className="nav-link active" href="/productslist">Productos</Link></li>
                    </ul>
                    <div className="d-md-none my-2">
                        <button className="btn btn-primary" type="button">Button</button>
                    </div>
                </div>
                <div className="d-none d-md-block">
                    <Link className="btn btn-primary" role="button" href="/login">Iniciar Sesión</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;