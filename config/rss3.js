const WETH = "0xe27d019909738d98ab7f850c05ee07806c30c71d";

/**
 * @type import('./config').NetworkConfig
 */
module.exports = {
  network: "mainnet",
  wNativeAddress: WETH,
//   v3: {
//     // WETH-USDT 500
//     wNativeStablePoolAddress: "0x4a080d9488ce2c8258185d78852275d6d3c2820c",
//     stableIsToken0: true,
//     factoryAddress: "0x0bfbcf9fa4f9c56b0f40a671ad40e0805a091865",
//     startBlock: 750149,
//     stableCoins: [
//       "0x1e4a5963abfd975d8c9021ce480b42188849d41d", // USDT
//       "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035", // USDC
//     ],
//     whitelistAddresses: [
//       WETH,
//       "0x1e4a5963abfd975d8c9021ce480b42188849d41d", // USDT
//       "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035", // USDC
//     ],
//     nonfungiblePositionManagerAddress: "0xdead",
//     nonfungiblePositionManagerStartBlock: 750354,
//     minETHLocked: 0,
//   },
  v2: {
    factoryAddress: "0x2f6d9dac92e197be02ac2de8bbd7e02837e2db8d",
    startBlock: 6077,
    wNativeStablePair0: "0xe6afb511a8a2e7f2a35d9b3fac180fc0f22512db", // WETH-USDT
    wNativeStablePair1: "0x6ef455b9514d476448ee6841cdceb35be4817032", // WETH-USDC
    whitelistAddresses: [
      WETH,
      "0x05d032ac25d322df992303dca074ee7392c117b9", // USDT
      "0xb62f35b9546a908d11c5803ecbba735abc3e3eae", // USDC
    ],
    minETHLocked: 0,
  },
//   masterChefV3: {
//     masterChefAddress: "0xdead",
//     startBlock: 1731157,
//   },
};