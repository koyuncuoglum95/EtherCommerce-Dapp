import React from 'react';
import { useAppContext } from '../context/context';
import toast from 'react-hot-toast'


interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  description: string;
  category: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, imageUrl, rating, description, category }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = totalStars - fullStars - halfStars;


  const { buyProduct } = useAppContext();

  return (
    <div key={id} className="border p-2 rounded-md max-w-sm">
      <img src={imageUrl} alt={name} className="w-3/4 h-24 object-cover mx-auto mb-2"/>
      <h2 className="text-md mb-1">{name}</h2>
      <p className="text-gray-700 text-sm">{description}</p>
      <p className="text-gray-700 text-sm">Category: {category}</p>
      <p className="text-gray-700 text-sm">{price} ETH</p>
      <div className="flex text-yellow-500 text-sm">
        {'★'.repeat(fullStars)}
        {halfStars > 0 && '⭐'}
        {'☆'.repeat(emptyStars)}
      </div>
      <div className="flex justify-around mt-4">
        <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-green-600" onClick={() => {
          toast.promise(buyProduct(String(id)), {
            loading: 'Buying Product... This can take a few seconds. ⏳',
            success: 'Product bought! 🎉',
            error: 'Error buying product. 😢',
          })
        }}>Buy Now</button>

        <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-blue-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
