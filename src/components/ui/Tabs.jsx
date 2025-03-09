import React, { createContext, useContext, useState } from "react"

const TabsContext = createContext()

export function Tabs({ children, defaultValue, className = "" }) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ children, className = "" }) {
  return <div className={`flex space-x-2 ${className}`}>{children}</div>
}

export function TabsTrigger({ children, value, className = "" }) {
  const { activeTab, setActiveTab } = useContext(TabsContext)

  return (
    <button
      className={`px-4 py-2 rounded-md ${
        activeTab === value ? "bg-black text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer"
      } ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({ children, value, className = "" }) {
  const { activeTab } = useContext(TabsContext)

  if (activeTab !== value) return null

  return <div className={className}>{children}</div>
}
