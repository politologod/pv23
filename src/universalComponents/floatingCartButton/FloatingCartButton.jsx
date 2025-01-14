import React from "react";
import "./page.css";
const FloatingCartButton = ({ cartCount }) => {
    return (
        <div
            style={{
                position: "fixed",
                bottom: "25px",
                right: "25px",
                zIndex: 1000,
            }}
        >
            <button className="custom-button">
                <span className="shadow"></span>
                <span className="edge"></span>
                <span className="front text">
                    <i className="bi bi-cart" style={{ fontSize: "25px" }}></i>
                    {cartCount > 0 && (
                        <span
                            className="position-absolute cart-count"
                            style={{
                                top: "10%",
                                right: "10%",
                                width: "25px",
                                height: "25px",
                                fontSize: "13px",
                                fontWeight: "bold",
                                color: "white",                 
                            }}
                        >
                            {cartCount}
                        </span>
                    )}
                </span>
            </button>
        </div>
    );
};

export default FloatingCartButton;
