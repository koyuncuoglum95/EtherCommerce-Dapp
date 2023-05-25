'use client'

import { useState } from "react";
import { useAppContext } from '../context/context';
import toast from 'react-hot-toast';
import { useRouter } from "next/navigation";
import { Toaster } from 'react-hot-toast';
import { Navbar, Sidebar } from "../components";


const Create = () => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const router = useRouter();
    
    const { createAndSellProduct }: any = useAppContext();

    const onSubmit = async (event: any) => {
        event.preventDefault();
    
        if (name || desc || category || price || rating || image) {
          try {
            const toastId = toast.loading('Creating Product... It may take a few seconds.');
            await createAndSellProduct(name, desc, category, image, price, rating)
            .then(() => {
                toast.success('Product Created!', { id: toastId });
                router.push('/');
            })
            .catch((error: any) => {
                toast.error('Error creating product.', { id: toastId });
                console.log(error);
            });
          } catch (error) {
            console.log(error);
          }
        }
    };
    
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
        <div className="grid grid-cols-3 gap-4 ml-80">
          <div className="ml-8 mt-10 rounded w-80 bg-white mr-auto border-2 border-solid">
            <h1 className="text-center text-black mt-2">Create your own product</h1>
            <form onSubmit={onSubmit} className="space-y-4">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="block w-full p-2 border border-gray-300 rounded" />
              <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" className="block w-full p-2 border border-gray-300 rounded" />
              <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="block w-full p-2 border border-gray-300 rounded" />
              <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="block w-full p-2 border border-gray-300 rounded" />
              <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price in Ether" className="block w-full p-2 border border-gray-300 rounded" />
              <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" className="block w-full p-2 border border-gray-300 rounded" />
              <button type="submit" className="block w-full py-2 px-4 bg-red-800 text-white text-sm rounded hover:bg-green-600 hover:text-white">Create Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
    );
};

export default Create;
