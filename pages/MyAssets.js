import React, { useEffect, useState, useContext } from "react";
import { MarketABI, MarketAddress } from "../constant/constants";
import Navbar from "../components/Navbar";
import { MarketContext } from "../context/MarketContext";
import { useMoralis, useMoralisQuery } from "react-moralis";
import moment from "moment";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";

const MyAssets = () => {

  const { ownedItems } = useContext(MarketContext);
  const { username } = useContext(MarketContext);

  const styles = {
    container: `h-full w-full flex bg-[#fff]`,
    main: `w-full h-full flex flex-col mt-[50px]`,
    tableContainer: `w-full h-full flex flex-col p-[100px] justify-center`,
    pageTitle: `text-2xl font-bold text-left mt-[50px] mb-[30px]`,
    transactions: `flex gap-[50px] flex-row flex-wrap`,
    etherscanBtn: `font-bold rounded-full h-[40px] w-[150px] cursor-pointer text-[#3a2802] text-center border-2 border-[#ffd713] flex justify-center items-center`,
    itemName: `text-mg font-bold flex ml-[10px]`,
    nameContainer: `flex flex-col justify-end`,
  };

  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.main}>
        <Header />
        <div className={styles.tableContainer}>
          {ownedItems ? (
            <div className={styles.pageTitle}>Your NFTs</div>
          ) : (
            <div className={styles.pageTitle}>No Purchase History</div>
          )}
          <div className={styles.transactions}>
            {ownedItems.map((item, index) => {
              return (
                <>
                  {item.map((asset, index) => {
                    return (
                      <div className={styles.container} key={index}>
                        <div className={styles.top}>
                          <div className="flex w-full gap-[50px]">
                             <div className={styles.topHeaderText}>
                              <br />
                              {moment(asset.purchaseDate).format(
                                "MMMM Do YYYY"
                              )}
                            </div> 
                            <div className={styles.topHeaderText}>
                              COST <br />
                              {asset.price} Coins
                            </div>
                            <div className={styles.topHeaderText}>
                              Owned <br />
                              {username}
                            </div>
                          </div>
                        </div>

                        <div className={styles.content}>
                          <div className={styles.date}>
                            Bought on{" "}
                            {moment(asset.purchaseDate).format("MMMM Do")}
                          </div>
                          <div className={styles.item}>
                            <Image
                              className="object-cover"
                              src={asset.src}
                              alt="item"
                              height={100}
                              width={100}
                            />
                            <div className={styles.nameContainer}>
                              <div className={styles.itemName}>
                                {asset.name}
                              </div>
                              <div className="flex flex-row items-center justify-center gap-4">
                                <Link href={`${asset.etherscanLink}`}>
                                  <a target="_blank" rel="noopener">
                                    <div className={styles.etherscanBtn}>
                                      Etherscan
                                    </div>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAssets;
