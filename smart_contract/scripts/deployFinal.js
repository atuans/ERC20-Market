
const { ethers, run, network } = require("hardhat");
const {verify} = require('../utils/verify')

 
async function main(){
  const NFTMarketplace = await ethers.getContractFactory('NftMarketplace');
  const nftmarketplace = await NFTMarketplace.deploy();
  await nftmarketplace.deployed();
  console.log(`Contract deployed to ${nftmarketplace.address}`);
  console.log(network.config);

  // where the JSON-RPC link and where the private key

  // So, whenever we run a scripts or a deploy test in hardhat, it default we are using hardhat network
  //in this case, is hardhat fake network, similar to ganache, because in hardhat.config.js, we still not define the network we want to deploy
 
  if(network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY){
    await nftmarketplace.deployTransaction.wait(6);
    await verify(nftmarketplace.address,[]);
  }

  //interact with the contract 
  // till now, the contract get verified
}



main()  
  .then(() => process.exit(0))
  .catch((error) =>{
    console.log('====================================');
    console.log(error);
    console.log('====================================');
    process.exit(1);
  });