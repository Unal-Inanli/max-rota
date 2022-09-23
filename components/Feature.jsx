import React from 'react';

const Feature = ({ children, iconName, title }) => {
    return (
        <div className="item">
            <div className="icon">
                <img src={"/img/icon/" + iconName} alt="" />
            </div>
            <h4>{title}</h4>

            <p>{children}</p>
        </div>
    );
}

export default Feature;
