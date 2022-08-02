const hre = require('hardhat')

async function main() {
  const Modal = await hre.ethers.getContractFactory('Modal')
  const modal = await Modal.deploy()

  await modal.deployed()

  console.log('Modal deployed to:', modal.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })