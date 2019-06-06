import React, { useCallback } from 'react';

const Button = ({ children, value, onClick }) => (
    <button
        className="button"
        onClick={useCallback(() => onClick(value), [onClick, value])}
    >
        {children || value}
    </button>
);

export default Button;
