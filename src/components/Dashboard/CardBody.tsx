import React from "react";
import Field from "./Field";

interface CardBodyProps {
  owner: string;
  mintToken: string;
}

const CardBody = ({ owner, mintAddress }) => {
  return (
    <div className="flex flex-col gap-2 bg-gray-3 h-max px-2 pt-2 pb-4 rounded-xl">
      <Field keyValue={"Owner"} value={owner} />
      <Field keyValue={"Mint address"} value={mintAddress} />
      <Field keyValue={"Mint token"} value={mintAddress} />
    </div>
  );
};

export default CardBody;
