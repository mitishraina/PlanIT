import React, { useState, useRef, useEffect } from "react"

export function Select({ children, className = "" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState("")
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])

  const handleSelect = (value) => {
    setSelectedValue(value)
    setIsOpen(false)
  }

  return (
    <div className={`relative ${className}`} ref={ref}>
      {React.Children.map(children, (child) => {
        if (child.type === SelectTrigger) {
          return React.cloneElement(child, {
            onClick: () => setIsOpen(!isOpen),
            selectedValue,
          })
        }
        if (child.type === SelectContent) {
          return isOpen && React.cloneElement(child, { handleSelect })
        }
        return child
      })}
    </div>
  )
}

export function SelectTrigger({ children, className = "", onClick, selectedValue }) {
  return (
    <button
      className={`w-full p-2 text-left bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onClick={onClick}
    >
      {selectedValue || children}
    </button>
  )
}

export function SelectValue({ placeholder }) {
  return <span>{placeholder}</span>
}

export function SelectContent({ children, className = "", handleSelect }) {
  return (
    <div
      className={`absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto ${className}`}
    >
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onClick: () => handleSelect(child.props.children) }),
      )}
    </div>
  )
}

export function SelectItem({ children, value, className = "", onClick }) {
  return (
    <button
      className={`w-full px-4 py-2 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 ${className}`}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

