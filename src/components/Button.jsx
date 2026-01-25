import React from 'react';

function Button({ children, variant = 'primary', onClick, className }) {
    const variantStyles = {
        primary: 'text-white font-medium text-md shadow-lg bg-[radial-gradient(ellipse_at_top,_#669cff_5%,_#1a6aff_60%,_#0e62ff_100%)] hover:bg-[radial-gradient(ellipse_at_top,_#7a9eff_5%,_#2a7aff_60%,_#1e72ff_100%)] active:scale-[0.98]',
        secondary: 'text-white bg-[#0e62ff33] hover:bg-[#0e62ff55] font-medium text-md',
    };
    
    const primaryStyle = {
        background: ''
    };

    const secondayStyle = {
        background: '',
    }
    
    return (
        <button 
            onClick={onClick} 
            style={variant === 'primary' ? primaryStyle : secondayStyle}
            className={`px-[1.5em] py-[1em] rounded-xl transition-all duration-200 ease-out ${variantStyles[variant] || ''} ${className || ''}`}
        >
            {children}
        </button>
    );
}

export default Button;