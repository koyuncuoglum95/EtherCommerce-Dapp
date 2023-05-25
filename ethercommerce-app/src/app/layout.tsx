"use client"; // This is a client component 👈🏽


import './globals.css'
import { AppProvider } from './context/context';


import '@rainbow-me/rainbowkit/styles.css';

import { getDefaultWallets, RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';


require('dotenv').config(); 

const infuraApiKey = process.env.NEXT_PUBLIC_INFURA_API_KEY;

if (!infuraApiKey) {
  throw new Error("Please define the Infura API key");
}

console.log(infuraApiKey)

const { chains, publicClient } = configureChains(
  [sepolia],
  [
    infuraProvider({ apiKey: infuraApiKey }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'EtherCommerce',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})


export const metadata = {
  title: 'EtherCommerce',
  description: 'Dapp E-Commerce',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <WagmiConfig config={wagmiConfig}>
          <AppProvider>
            <RainbowKitProvider theme={darkTheme()} chains={chains} coolMode>
              {children}
              </RainbowKitProvider>
          </AppProvider>
        </WagmiConfig>
      </body>
    </html>
  )
}
