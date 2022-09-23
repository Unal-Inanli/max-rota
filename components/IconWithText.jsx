import React from 'react';

const IconWithText = ({ title = null, icon, children }) => {
    return (
        <div className="contact_icons">
            <div className="contact_icon">
                {icon}

            </div>
            <div className="contact_text">
                {title && <h4>{title}</h4>}
                <p>{children}</p>
            </div>
        </div>
    );
}

export default IconWithText;
