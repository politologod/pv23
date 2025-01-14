import React from "react";
import "./button.css"; // Archivo CSS donde se encuentra tu estilo

const OfferButton = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default OfferButton;
