import React from "react";
import { motion } from "framer-motion";
import cx from "classnames";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";

interface NFT {
  name: string;
  mintAddress: string;
  mintToken: string;
  owner: string;
  image: string;
  order: number;
}

interface CardProps {
  nft: NFT;
  index: number;
}

const Card: React.FC<CardProps> = ({ nft, index }) => {
  return (
    <motion.div
      className={cx(
        `h-max min-w-[14rem] bg-background p-3 flex flex-col gap-3 backdrop-blur-md rounded-xl`,
        {
          "order-1": nft.order === 1,
          "order-2": nft.order === 2,
          "order-3": nft.order === 3,
        }
      )}
      key={nft.name}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.2 * index,
          type: "spring",
          stiffness: 500,
        },
      }}
      layout
    >
      <CardHeader name={nft?.name} />

      <div className="h-max w-full">
        <img src={nft?.image} alt="nft" className="rounded-xl" />
      </div>
      <CardBody owner={nft?.owner} mintAddress={nft?.mintToken} />
    </motion.div>
  );
};

export default Card;
