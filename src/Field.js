import React from 'react';

const Field = ({ children, className, onClick }) => (
    <div className={className + ' field'} onClick={onClick}>
        {children}
    </div>
);

export default Field;
