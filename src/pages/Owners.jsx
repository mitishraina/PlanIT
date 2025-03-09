import React, { useState } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { Label } from "../components/ui/Label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/Tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/Card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/Select"
import { Factory, Leaf, DollarSign } from "lucide-react"

const factoryData = [
    { id: 1, name: "EcoTech Industries", credits: 500, price: 25, type: "sell" },
    { id: 2, name: "GreenPower Co.", credits: 300, price: 28, type: "sell" },
    { id: 3, name: "Sustainable Solutions Ltd.", credits: 1000, price: 22, type: "sell" },
    { id: 4, name: "Clean Energy Corp", credits: 0, price: 26, type: "buy" },
    { id: 5, name: "Eco Innovations Inc.", credits: 0, price: 24, type: "buy" },
    { id: 6, name: "Green Future Enterprises", credits: 0, price: 27, type: "buy" },
]

export default function Owners() {
    const [activeTab, setActiveTab] = useState("buy")
    const [factories, setFactories] = useState(factoryData)

    const filteredFactories = factories.filter((factory) => factory.type === activeTab)

    return (
        <div className="min-h-screen bg-[#C9C9C9]">
            <section className="bg-[] text-white py-20 bg-gradient-to-r from-gray-400 via-zinc-400 to-zinc-900">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Carbon Credit Marketplace</h1>
                    <p className="max-w-2xl mx-auto text-lg">
                        Register your factory, buy or sell carbon credits, and contribute to a greener future.
                    </p>
                </div>
            </section>

            <section className="py-12">
                <div className="container mx-auto px-4">
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>Factory Registration</CardTitle>
                            <CardDescription>Register your factory to participate in carbon credit trading</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="factoryName">Factory Name</Label>
                                        <Input id="factoryName" placeholder="Enter factory name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="ownerName">Owner Name</Label>
                                        <Input id="ownerName" placeholder="Enter owner name" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" type="email" placeholder="Enter email address" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="industry">Industry</Label>
                                    <Select>
                                        <SelectTrigger id="industry">
                                            <SelectValue placeholder="Select industry type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                                            <SelectItem value="energy">Energy</SelectItem>
                                            <SelectItem value="chemical">Chemical</SelectItem>
                                            <SelectItem value="automotive">Automotive</SelectItem>
                                            <SelectItem value="agriculture">Agriculture</SelectItem>
                                            <SelectItem value="technology">Technology</SelectItem>
                                            <SelectItem value="construction">Construction</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </form>
                        </CardContent>
                        <CardFooter className="bg-gray-50">
                            <Button className="w-full">Register Factory</Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>


            <section className="py-12 bg-[#C9C9C9]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Carbon Credit Trading</h2>
                    <Tabs defaultValue="buy" className="max-w-4xl mx-auto">
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="buy" onClick={() => setActiveTab("buy")}>
                                Buy Credits
                            </TabsTrigger>
                            <TabsTrigger value="sell" onClick={() => setActiveTab("sell")}>
                                Sell Credits
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="buy">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {filteredFactories.map((factory) => (
                                    <Card key={factory.id}>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Factory className="w-5 h-5 mr-2" />
                                                {factory.name}
                                            </CardTitle>
                                            <CardDescription>Buying Carbon Credits</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="flex items-center">
                                                    <DollarSign className="w-4 h-4 mr-1" />
                                                    Price per Credit:
                                                </span>
                                                <span className="font-bold">${factory.price}</span>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">Contact to Sell</Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                        <TabsContent value="sell">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                                {filteredFactories.map((factory) => (
                                    <Card key={factory.id}>
                                        <CardHeader>
                                            <CardTitle className="flex items-center">
                                                <Factory className="w-5 h-5 mr-2" />
                                                {factory.name}
                                            </CardTitle>
                                            <CardDescription>Selling Carbon Credits</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="flex items-center">
                                                    <Leaf className="w-4 h-4 mr-1" />
                                                    Available Credits:
                                                </span>
                                                <span className="font-bold">{factory.credits}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="flex items-center">
                                                    <DollarSign className="w-4 h-4 mr-1" />
                                                    Price per Credit:
                                                </span>
                                                <span className="font-bold">${factory.price}</span>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button className="w-full">Contact to Buy</Button>
                                        </CardFooter>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>


            <section className="py-12 bg-[#C9C9C9]">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">About Carbon Credits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl h-full w-fit-content p-4">
                            <h3 className="text-xl font-semibold mb-4">What are Carbon Credits?</h3>
                            <p className="text-gray-600">
                                Carbon credits are tradable permits or certificates that represent the right to emit one tonne of carbon
                                dioxide or equivalent greenhouse gas. They are part of national and international attempts to mitigate
                                the growth in concentrations of greenhouse gases.
                            </p>
                        </div>
                        <div className="bg-white rounded-2xl h-full w-fit-content p-4">
                            <h3 className="text-xl font-semibold mb-4">How Does Trading Work?</h3>
                            <p className="text-gray-600">
                                Companies that reduce their greenhouse gas emissions can earn carbon credits, which they can then sell
                                to other companies that are struggling to reduce their emissions. This creates a financial incentive for
                                companies to reduce their environmental impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
