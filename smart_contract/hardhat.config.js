require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config()
/** @type import('hardhat/config').HardhatUserConfig */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const RINKEBY_RPC_URL =process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/fN9IEnzj-HuFsnfpG2PSpjJJC6a-MoO1"
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""
const MUMMBAI_RPC_URL = process.env.MUMMBAI_RPC_URL || "https://polygon-mumbai.infura.io/v3/3452161361f3427c9eec081067084c52" 
const MAINNET_RPC_URL = process.env.MAINNET_RPC_URL 

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 1337,
            // gasPrice: 130000000000,
            // on a test network, we dont need to define an accounts (20 fake accounts auto generated when you in a local hardhat network)
        },
        rinkeby: {
            url: RINKEBY_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
            blockConfirmations: 6,
        },
        // mumbai:{
        //     url :MUMMBAI_RPC_URL,
        //     accounts:[PRIVATE_KEY]
        // },
        // mainnet:{
        //     url: MAINNET_RPC_URL,
        //     accounts:[PRIVATE_KEY]
           
        // }
        
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },

}
