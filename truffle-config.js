const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*",
    },
  },
  mocha: {
    timeout: 2000000,
    reporter: "Spec",
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.6.11", // Fetch exact version from solc-bin (default: truffle's version)
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
