import React from 'react';
import './basicButton.css';

const BasicButton = ({ onClick, children, disabled }) => {
    return (
        <button 
            className="neu-button" 
            onClick={onClick} 
            disabled={disabled}
        >
            {children}
        </button>
    );
};


export default BasicButton;