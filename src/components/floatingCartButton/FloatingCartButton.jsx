import React from "react";

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
            <button
                className="btn btn-primary position-relative d-flex align-items-center justify-content-center"
                style={{
                    borderRadius: "50%",
                    width: "65px",
                    height: "65px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "rgba(108, 246, 154, 0.8)",
                }}
            >
                <i className="bi bi-cart" style={{ fontSize: "25px" }}></i>
                {cartCount > 0 && (
                    <span
                        className="position-absolute  translate-middle p-1 bg-danger border border-light rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                            top: "20%",
                            start: "90%",
                            left: "85%",
                            width: "25px",
                            height: "25px",
                            fontSize: "13px",
                            color: "white",
                        }}
                    >
                        {cartCount}
                    </span>
                )}
            </button>
        </div>
    );
};

export default FloatingCartButton;
