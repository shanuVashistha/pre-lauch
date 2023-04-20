import React from 'react'

interface ButtonInterface {
    label: string
    onClick: () => void
    className?: string
    color?: string
}

export const Button: React.FC<ButtonInterface> = ({ label, onClick, className, color }) => {
    return (
        <button
            onClick={onClick}
            className={`button ${className} ${color}`}
        >
            {label}
        </button>
    )
}