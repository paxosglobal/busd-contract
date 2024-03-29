var HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "";
const walletChildNum = 0;
const networkAddressMainnet = "https://mainnet.infura.io/v3/<your-api-key>";
const networkAddressTestnet = "https://sepolia.infura.io/v3/<your-api-key>";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  plugins: ["solidity-coverage"],
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // ganache-cli
      network_id: "*", // Match any network id
      gas: 6700000,
      gasPrice: 0x01,
      disableConfirmationListener: true
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8555,
      gas: 10000000000000,
      gasPrice: 0x01,
      disableConfirmationListener: true
    },
    mainnet: {
      network_id: 1,
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          networkAddressMainnet,
          walletChildNum
        );
      }
    },
    sepolia: {
      provider: function() {
        return new HDWalletProvider(
          mnemonic,
          networkAddressTestnet,
          walletChildNum
        );
      },
      network_id: 11155111,
      gas: 4000000
    }
  },
  compilers: {
    solc: {
      version: "v0.4.24+commit.e67f0147" // ex:  "0.4.20". (Default: Truffle's installed solc)
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
