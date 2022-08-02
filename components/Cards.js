import React from 'react'
import { useState, useContext } from 'react'  
import { MarketContext } from '../context/MarketContext'
import Card from './Card'


const Cards = () => {

    const {assets} = useContext(MarketContext)

    const item = {
        id: 0,
        attributes:{
            name:"NFT",
            price:2,
            src: 'https://media2.giphy.com/media/ho0xXatV7b3Fo1ZRXN/200w.webp?cid=ecf05e47c7kp6bvrao7ftvqttxb2xbuev6rl9oc4fx0mmnj4&rid=200w.webp&ct=g'
        }
    }

    const styles = {
    container: `h-full w-full flex flex-col ml-[20px] -mt-[50px]`,
    title: `text-xl font-bolder mb-[20px] mt-[30px]  ml-[30px]`,
    cards: `flex items-center  flex-wrap gap-[80px]`,
    }

    console.log(assets);

  return (
    <div className={styles.container}>
        <div className={styles.title}> Marketplace 
        <div className={styles.cards}>
            {/* individual cards */}
            {assets.map((item)=>{
               return <Card key={item.id} item={item.attributes}/>
            })}
        </div>

        
        </div>
        Cards
    
    </div>
  )
}

export default Cards