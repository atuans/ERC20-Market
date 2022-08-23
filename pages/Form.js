import React, {useState, useEffect, useContext} from "react";
import { MarketABI, MarketAddress } from "../constant/constants";
import { useNewMoralisObject } from "react-moralis";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { ethers } from 'ethers'
 
const Form = () => {

  
  const {Moralis} = useMoralis()
  const { save } = useNewMoralisObject("Product");
  const [name,setName] = useState('')
  const [price, setPrice] = useState('')
  const [src, setSrc] = useState('')



  const saveObject = async () => {
 
    const data = {
        name: name,
        price: price,
        src : src

    };
    save(data, {
      onSuccess: () => {
        alert("New object created");
      },
      onError: (error) => {
        alert("Failed to create new object, with error code: " + error.message);
      },
    });
    
  };

  return (

     <div className="flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <h3> Upload Your Token</h3>
        <input 
          value={name}
          placeholder="Asset Name"
          className="mt-8 border rounded p-4"
          onChange={e => setName( e.target.value)}
        />
        <textarea
        value={src}
          placeholder="Asset SRC"
          className="mt-2 border rounded p-4"
          onChange={e => setSrc( e.target.value )}
        />
        <input
        value={price}
          placeholder="Asset Price in Eth"
          className="mt-2 border rounded p-4"
          onChange={e => setPrice( e.target.value)}
        />
      
        <button onClick={saveObject} className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          Create NFT
        </button>
      </div>
    </div>
  )
}

export default Form