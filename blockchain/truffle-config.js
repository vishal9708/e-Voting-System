const mnemonic = "verb judge knife flush empower ripple minor video search remain title yard";

var fs = require("fs");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
    networks: {
      rinkeby: {
        provider: function() {
          return new HDWalletProvider(mnemonic, "wss://eth-rinkeby.alchemyapi.io/v2/lx8Too0KB2skG8KXtz3Be6eG1ADnBv27");
        },
        network_id: 4,
        gas: 4500000,
        gasPrice: 10000000000,
      },
      development: {
        host: "127.0.0.1",
        port: 7545,
        network_id: "*" // Match any network id
      },
    },
    contracts_directory: './src/contracts/',
    contracts_build_directory: './src/build/',
    compilers: {
      solc: {
        optimizer: {
          enabled: true,
          runs: 200
        }
      }
    }
}
