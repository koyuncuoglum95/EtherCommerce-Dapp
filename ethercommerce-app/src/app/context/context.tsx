import { createContext, useEffect, useState, useContext, ReactNode, useCallback } from 'react';
import { useAccount } from 'wagmi';
import Web3 from 'web3';
import { createContract } from '../utils/constants';

interface IProduct {
    id: string;
    buyer: string;
    seller: string;
    name: string;
    description: string;
    category: string;
    imageUrl: string;
    price: string;
    rating: string;
}

interface IContext {
    createAndSellProduct: (name: string, desc: string, category: string, image: string, price: string, rating: string) => Promise<void>;
    products: IProduct[];
    buyProduct: (id: string) => Promise<void>;
    address?: string;
}

export const AppContext = createContext<IContext | null>(null);

interface AppProviderProps {
    children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
    const [contract, setContract] = useState<any>(null);
    const [userAddress, setUserAddress] = useState<string>('');
    const [products, setProducts] = useState<IProduct[]>([]);

    // Metamask Account Address
    const { address } = useAccount();

    console.log(contract);

    const createAndSellProduct = async (name: string, desc: string, category: string, image: string, price: string, rating: string) => {
        if (contract) {
            try {
                const WeiPrice = Web3.utils.toWei(price, 'ether');
                await contract.methods.createNewProduct(name, desc, category, image, WeiPrice, rating)
                .send({ from: userAddress, gas: 3000000, gasPrice: null });
            } catch (error) {
                console.error(error);
            }
        }
    };

    const getAllProducts = useCallback(async () => {
        setProducts([]);

        if(contract) {
            try {
                const productCounter = await contract.methods.getNumOfProducts().call();

                for (let i = 0; i < productCounter; i++) {
                    const product = await contract.methods.products(i).call();

                    const existedProduct: IProduct = {
                        id: product.id,
                        buyer: product.buyer,
                        seller: product.seller,
                        name: product.name,
                        description: product.description,
                        category: product.category,
                        imageUrl: product.imageUrl,
                        price: Web3.utils.fromWei(product.price, 'ether'),
                        rating: product.rating,
                    };

                    setProducts(prev => [...prev, existedProduct]);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }, [contract]);

    const buyProduct = async (id: string) => {
        if (contract) {
            try {
                const price = await contract.methods.products(id).call();
                await contract.methods.purchaseProduct(id).send({
                    from: userAddress,
                    gas: 3000000,
                    gasPrice: null,
                    value: price['price'],
                });
            } catch (error) {
                console.error(error);
            }
        }
    };


    useEffect(() => {
        if (address) {
            setUserAddress(address);
        }
        setContract(createContract);
    },[address]);
    

    useEffect(() => {
        getAllProducts();
    }, [contract, getAllProducts]);


    return (
        <AppContext.Provider value={{ createAndSellProduct, products, buyProduct, address}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error("useAppContext must be used within an AppProvider");
    return context;
};
