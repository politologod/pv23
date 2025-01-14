"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SwitchButton from "@/universalComponents/SwitchButton/SwitchButton";
import BasicButton from "@/universalComponents/BasicButton/BasicButton";
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
                <div className="reflow-product row">
                    {/* Product Image */}
                    <div className="col-md-6">
                        <div className="ref-media">
                            <div className="ref-preview">
                                <div className="ref-image active" data-reflow-preview-type="image">
                                    <Image
                                        src={"https://res.cloudinary.com/dzg6yhqzx/image/upload/v1728507512/images/ltr1_1728507511851.jpg"}
                                        alt="Product Image"
                                        width={400}
                                        height={500}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Information */}
                    <div className="col-md-6">
                        <div className="ref-product-data">
                            <h2 className="ref-name">Piggy Bank</h2>
                            <div className="ref-categories">
                                <span className="ref-category">Toys</span>
                            </div>
                            <strong className="ref-price ref-on-sale">
                                <s className="ref-original-price">$100.00</s> $13.43
                            </strong>

                            {/* Add to Cart Section */}
                            <div className="reflow-add-to-cart ref-product-controls">
                                <div className="ref-variant mb-3">
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
                                    <SwitchButton />

                                {/* Quantity Widget */}
                                <div className="ref-quantity-widget mb-3 d-flex align-items-center">
                                    <div className="ref-decrease" onClick={handleDecrease}>
                                        <span>-</span>
                                    </div>
                                    <input
                                        type="text"
                                        value={quantity}
                                        readOnly
                                        className="mx-2 text-center"
                                        style={{ width: "40px" }}
                                    />
                                    <div className="ref-increase" onClick={handleIncrease}>
                                        <span>+</span>
                                    </div>
                                </div>

                                {/* Add to Cart Button */}
                                <Link href="#" className="ref-button btn btn-primary">

                                    Add to Cart
                                </Link>

                                

                                <BasicButton>Click Me</BasicButton>
                            </div>

                            {/* Product Description */}
                            <div className="ref-description mt-3">
                                Veritatis laboriosam <b>sed</b> autem.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
