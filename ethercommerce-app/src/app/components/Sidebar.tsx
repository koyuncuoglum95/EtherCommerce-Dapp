import React from "react";

export default function Sidebar() {
    return (
        <div className="w-64 h-screen bg-white-800 text-black p-6">
        <h1 className="text-2xl mb-4 hover:text-red-500 cursor-pointer">EtherCommerce</h1>
        <h2 className="text-xl mb-2 hover:text-red-500 cursor-pointer">New Arrivals</h2>
        <ul className="mb-4">
            <li className="my-2"><a href="#" className="hover:text-red-500">Women's Clothing</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Men's Clothing</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Kids' Clothing</a></li>
        </ul>
        <h2 className="text-xl mb-2">Best Sellers</h2>
        <ul className="mb-4">
            <li className="my-2"><a href="#" className="hover:text-red-500">Women's Clothing</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Men's Clothing</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Kids' Clothing</a></li>
        </ul>
        <h2 className="text-xl mb-2">Trending</h2>
        <ul className="mb-4">
            <li className="my-2"><a href="#" className="hover:text-red-500">Women's Clothing</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Men's Clothing</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Kids' Clothing</a></li>
        </ul>
        <h2 className="text-xl mb-2">Departments</h2>
        <ul>
            <li className="my-2"><a href="#" className="hover:text-red-500">Women</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Men</a></li>
            <li className="my-2"><a href="#" className="hover:text-red-500">Kids</a></li>
        </ul>
    </div>
    
    )
}
