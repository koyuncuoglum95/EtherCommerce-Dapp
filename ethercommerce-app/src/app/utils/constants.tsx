import Web3 from 'web3';
import { AbiItem } from 'web3-utils';
import ContractABI from './EtherCommerce.json';


export const address = process.env.NEXT_PUBLIC_ETHER_COMMERCE_ADDRESS;

console.log(address);

export const createContract = () => {
  const { ethereum } = window as any;

  if (ethereum) {
    const web3 = new Web3(ethereum);
    return new web3.eth.Contract(ContractABI.abi as AbiItem[], address);
  }
}