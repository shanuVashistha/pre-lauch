import React from 'react'

interface InputInterface {
    label?: string
    name?: string
    rows?: number
    type?: string
    value: string
    onChange: (e: any) => any
    error?: string
    placeholder?: string
    className?: string
}

export const Input: React.FC<InputInterface> = (
    {
        label,
        name,
        type,
        value,
        onChange,
        error,
        placeholder,
        className
    }
) => {
    return (
        <div className="input-container h-[100%]">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`input px-[16px] py-[15px] ${className}`}
            />
            {error && <p className="error">{error}</p>}
        </div>
    )
}

export const TextArea: React.FC<InputInterface> = (
    {
        label,
        name,
        rows,
        value,
        onChange,
        error,
        placeholder,
        className
    }
) => {
    return (
        <div className="input-container h-[100%]">
            {label && <label htmlFor={name}>{label}</label>}
            <textarea
                name={name}
                value={value}
                rows={rows || 5}
                onChange={onChange}
                placeholder={placeholder}
                className={`input px-[16px] py-[15px] ${className}`}
            />
            {error && <p className="error">{error}</p>}
        </div>
    )
}