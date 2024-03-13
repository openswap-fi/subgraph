const WETH = "0xE27D019909738D98Ab7F850C05eE07806c30c71D";

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
    factoryAddress: "0x2F6d9dac92e197bE02aC2DE8BBD7E02837E2dB8d",
    startBlock: 176077,
    wNativeStablePair0: "0xE6AfB511A8a2E7f2A35D9B3FaC180fC0F22512Db", // WETH-USDT
    wNativeStablePair1: "0x6eF455B9514D476448EE6841cdCeB35Be4817032", // WETH-USDC
    whitelistAddresses: [
      WETH,
      "0x05D032ac25d322df992303dCa074EE7392C117b9", // USDT
      "0xb62f35b9546a908d11c5803ecbba735abc3e3eae", // USDC
    ],
    minETHLocked: 0,
  },
//   masterChefV3: {
//     masterChefAddress: "0xdead",
//     startBlock: 1731157,
//   },
};