"use client"; // This is a client component 👈🏽

import {Navbar, Product, Sidebar} from './components';
import { useAppContext } from './context/context';
import { Toaster } from 'react-hot-toast';


export default function Home() {
  const { address, products } : any = useAppContext();

  console.log(products)

  return (
    <>
    <Toaster />
    <Navbar />
    <div className="flex">
      {/* Put Sidebar on the left side */}
      <div className="w-1/4 border-r">
        <Sidebar />
      </div>
      
      <div className="w-3/4 p-6">
        <h1 className="text-3xl mb-4">Our Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product: ProductProps) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  
    </>
  )
}
