import React from "react"

export function Button({ children, variant = "primary", className = "", ...props }) {
  const baseStyles = "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variantStyles = {
    primary: "bg-black text-white hover:bg-gray-100 hover:text-black cursor-pointer",
    ghost: "bg-white text-black hover:bg-black hover:text-white",
    outline: "bg-white text-black hover:bg-black hover:text-white w-fit",
  }

  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${className}`

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

