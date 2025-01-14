import React from "react";
import "./switchButton.css";

const SwitchButton = () => {
    return (
        <div className="toggleWrapper">
            <input
                className="toggleCheckbox"
                type="checkbox"
                id="toggleSwitch"
            />
            <div className="toggleContainer">
                <div className="toggleButton">
                    <div className="toggleButtonCirclesContainer">
                        {Array.from({ length: 12 }).map((_, index) => (
                            <div key={index} className="toggleButtonCircle"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwitchButton;
