import React from 'react'

function Button({ children, size, className, onClick, ...props }) {
    const sizeClass =
        size === 'large' ? 'w-full' : size === 'medium' ? 'w-[160px]' : size === 'small' ? 'w-[100px]' : ''
    return (
        <button
            className={`py-3 px-6 whitespace-nowrap rounded-lg outline-none border-none flex gap-x-3 items-center justify-center capitalize bg-primary ${sizeClass} ${className}`}
            {...props}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
