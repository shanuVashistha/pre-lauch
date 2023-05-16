import React from 'react'

interface InputInterface {
    label?: string
    name?: string
    rows?: number
    type?: string
    value: string
    disabled?: boolean
    onChange?: (e: any) => any
    error?: string
    placeholder?: string
    className?: string
    prefix?: any
}

export const Input: React.FC<InputInterface> = (
    {
        label,
        name,
        type,
        value,
        disabled = false,
        onChange,
        error,
        placeholder,
        className,
        prefix
    }
) => {
    return (
        <div className="input-container md:h-full h-[100%]">
            {
                label && <label
                    htmlFor={label}
                    className="font-medium text-primary text-[14px] block pb-[10px]">
                    {label}
                </label>
            }
            <div className="relative md:h-full">
                <input
                    id={label}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    placeholder={placeholder}
                    className={`input px-[16px] py-[15px] ${className}`}
                />
                {
                    prefix &&
                    <div className="absolute top-0 right-0 h-[100%] w-[50px] flex items-center justify-center">
                        {prefix}
                    </div>
                }
            </div>
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
        disabled = false,
        error,
        placeholder,
        className
    }
) => {
    return (
        <div className="input-container h-[100%]">
            {
                label && <label
                    htmlFor={label}
                    className="font-medium text-primary text-[14px] block pb-[10px]">
                    {label}
                </label>
            }
            <textarea
                id={label}
                name={name}
                value={value}
                rows={rows || 5}
                onChange={onChange}
                disabled={disabled}
                placeholder={placeholder}
                className={`input  px-[16px] py-[15px] ${className}`}
            />
            {error && <p className="error">{error}</p>}
        </div>
    )
}