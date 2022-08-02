//SPDX-License-Identifier: MIT

pragma solidity ^0.8.8;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract NFT is ERC721URIStorage {
  // using ERC721 for unique attributes
  //Whenever one is to be awarded to a player, it will be minted and sent to them.
  //Players are free to keep their token or trade it with other people as they see fit
  using Counters for Counters.Counter;

  // we will use Counter to declare a variable is tokenId, counter allow
  //us to incrementing tokenId for each token we minted
  Counters.Counter private _tokenIds;
  address contractAddress; // ownership of the token ...

  constructor(address marketplaceAddress) ERC721("Marketplace Token", "MT") {
    contractAddress = marketplaceAddress;
  }

  // function for minting new token
  function createToken(string memory tokenURI) public returns (uint256) {
    _tokenIds.increment(); // start at 0
    uint256 newItemId = _tokenIds.current(); // get current value of tokenID
    _safeMint(msg.sender, newItemId);
    _setTokenURI(newItemId, tokenURI);

    //set approval
    setApprovalForAll(contractAddress, true);
    return newItemId;
  }
}
