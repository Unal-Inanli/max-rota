import React from 'react';

const PrimaryButton = ({ children, onClick = (e) => { e.preventDefault() } }) => {
    return (
        <button onClick={onClick} className="def_one_btn">
            {children}
        </button>
    );
}

export default PrimaryButton;
