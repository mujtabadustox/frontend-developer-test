import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Card from "./Card";
import Slider from "./Slider";

interface NFT {
  name: string;
  mintAddress: string;
  mintToken: string;
  owner: string;
  image: string;
  order: number;
}

interface CardViewProps {
  nfts?: NFT[];
}
const CardView: React.FC<CardViewProps> = ({ nfts }) => {
  const [nftData, setNftData] = useState(nfts || []);

  const handleNext = () => {
    const newArray = nftData.map((nft) => {
      const newOrder = nft.order === 1 ? 3 : nft.order - 1;
      return { ...nft, order: newOrder };
    });

    setNftData(newArray);
  };

  const handleBack = () => {
    const newArray = nftData.map((nft) => {
      const newOrder = nft.order === 3 ? 1 : nft.order + 1;
      return { ...nft, order: newOrder };
    });

    setNftData(newArray);
  };

  return (
    <div className="flex flex-col w-full h-full gap-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <AnimatePresence>
          {nftData.map((nft, index) => (
            <Card nft={nft} index={index} key={index} />
          ))}
        </AnimatePresence>
      </div>

      <Slider handleBack={handleBack} handleNext={handleNext} />
    </div>
  );
};

export default CardView;
