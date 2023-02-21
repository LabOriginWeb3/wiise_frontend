import "../styles/globals.css";
import { NextUIProvider } from '@nextui-org/react';

// import { Web3ReactProvider } from '@web3-react/core';
// import Web3 from 'web3';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { SSRProvider } from '@react-aria/ssr';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: "aucdFPXpLb2ETOq7p7Fgis9advUkPEnG" }),
    publicProvider()
  ]
);
const { connectors } = getDefaultWallets({
  appName: 'Wiise',
  chains
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


// function getLibrary(provider) {
//   return new Web3(provider)
// }

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <NextUIProvider>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            {/* <Web3ReactProvider getLibrary={getLibrary}> */}
            <Component {...pageProps} />
            {/* </Web3ReactProvider> */}
          </RainbowKitProvider>
        </WagmiConfig>
      </NextUIProvider>
    </SSRProvider>

  );
}

export default MyApp;
