"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetails() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <div lang="en" data-bs-theme="light">
            {/* Product Section */}
            <div data-reflow-type="product">
                <div className="reflow-product">
                    <div className="ref-media">
                        <div className="ref-preview">
                            <div
                                className="ref-image active"
                                data-reflow-preview-type="image"
                            >

                                <Image
                                    src={"https://res.cloudinary.com/dzg6yhqzx/image/upload/v1728507512/images/ltr1_1728507511851.jpg"}
                                    alt="Product Image"
                                    width={400}
                                    height={500}
                                    />
                            </div>
                        </div>
                        <div className="ref-promo-badge">SALE</div>
                    </div>
                    <div className="ref-product-data">
                        <h2 className="ref-name">Piggy Bank</h2>
                        <div className="ref-categories">
                            <span className="ref-category">Toys</span>
                        </div>
                        <strong className="ref-price ref-on-sale">
                            <s className="ref-original-price">$100.00</s>$13.43
                        </strong>
                        <div className="reflow-add-to-cart ref-product-controls">
                            <div className="ref-variant">
                                <label>
                                    <span>Size</span>
                                    <select
                                        className="ref-form-control ref-field-variants"
                                        name="variant-state"
                                        required
                                    >
                                        <option value="199976733_s">S</option>
                                        <option value="199976733_m">M</option>
                                        <option value="199976733_l">L</option>
                                    </select>
                                </label>
                            </div>
                            <div className="ref-quantity-widget">
                                <div className="ref-decrease" onClick={handleDecrease}>
                                    <span>-</span>
                                </div>
                                <input type="text" value={quantity} readOnly />
                                <div className="ref-increase" onClick={handleIncrease}>
                                    <span>+</span>
                                </div>
                            </div>
                            <Link href="#" className="ref-button">
                                Add to Cart
                            </Link>
                        </div>
                        <div className="ref-description">
                            Veritatis laboriosam <b>sed</b> autem.
                        </div>
                    </div>
                </div>
            </div>

            {/* Similar Products Section */}
            <div className="container py-4 py-xl-5">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>Productos Similar</h2>
                        <p className="w-lg-50">
                            Curae hendrerit donec commodo hendrerit egestas tempus, turpis
                            facilisis nostra nunc. Vestibulum dui eget ultrices.
                        </p>
                    </div>
                </div>
                <div className="row gy-4 row-cols-1 row-cols-md-1 row-cols-xl-3">
                    {[...Array(3)].map((_, index) => (
                        <div className="col" key={index}>
                            <div className="card">
                                <Image
                                    className="card-img-top w-100 d-block fit-cover"
                                    src={"https://res.cloudinary.com/dzg6yhqzx/image/upload/v1728507512/images/ltr1_1728507511851.jpg"}
                                    alt="Similar Product"
                                    width={400}
                                    height={200}
                                    style={{ height: "200px" }}
                                />
                                <div className="card-body p-4">
                                    <p className="text-primary card-text mb-0">Article</p>
                                    <h4 className="card-title">Lorem libero donec</h4>
                                    <p className="card-text">
                                        Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                                        justo odio, dapibus ac facilisis in, egestas eget quam.
                                        Donec id elit non mi porta gravida at eget metus.
                                    </p>
                                    <div className="d-flex">
                                        <Image
                                            className="rounded-circle flex-shrink-0 me-3 fit-cover"
                                            src={"https://res.cloudinary.com/dzg6yhqzx/image/upload/v1728507512/images/ltr1_1728507511851.jpg"}
                                            alt="Author"
                                            width={50}
                                            height={50}
                                        />
                                        <div>
                                            <p className="fw-bold mb-0">John Smith</p>
                                            <p className="text-muted mb-0">Erat netus</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Section */}
                <div id="carousel-1" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-inner">
                        {[...Array(3)].map((_, index) => (
                            <div
                                className={`carousel-item ${index === 0 ? "active" : ""}`}
                                key={index}
                            >
                                <Image
                                    className="w-100 d-block"
                                    src={"https://res.cloudinary.com/dzg6yhqzx/image/upload/v1728507512/images/ltr1_1728507511851.jpg"}
                                    alt="Slide Image"
                                    width={1400}
                                    height={800}
                                />
                            </div>
                        ))}
                    </div>
                    <div>
                        <a
                            className="carousel-control-prev"
                            href="#carousel-1"
                            role="button"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#carousel-1"
                            role="button"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </a>
                    </div>
                    <div className="carousel-indicators">
                        {[...Array(3)].map((_, index) => (
                            <button
                                className={index === 0 ? "active" : ""}
                                type="button"
                                data-bs-target="#carousel-1"
                                data-bs-slide-to={index}
                                key={index}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
