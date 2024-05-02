import { useQuery } from "@tanstack/react-query";
import { Connection } from "@solana/web3.js";
import { Metaplex, PublicKey } from "@metaplex-foundation/js";
import { clusterApiUrl } from "@solana/web3.js";

const imgURLS = [
  "/src/assets/images/nft1.png",
  "/src/assets/images/nft2.png",
  "/src/assets/images/nft3.png",
];

interface NFT {
  name: string;
  mintAddress: string;
  mintToken: string;
  owner: string;
  image: string;
  order: number;
}

const fetchNFT = async () => {
  const connection = new Connection(clusterApiUrl("devnet"));
  const metaplex = new Metaplex(connection);
  const ownerAddress = new PublicKey(
    "84RSSrVEpb8VhSgt58j7mBwwQA38copF4tgRdpn9griy"
  );
  const myNfts = await metaplex.nfts().findAllByOwner({
    owner: ownerAddress,
  });

  //Give CORS Error when i try to fetch URIs , to access the images and other information

  // const nftURIData = myNfts.map(async (nft, index) => {
  //   let fetchURI = await fetch(nft?.uri.toString());
  //   let json = await fetchURI.json();

  //   return json;
  // });

  const newArray: NFT[] = myNfts.slice(0, 3).map((nft, index) => {
    return {
      name: nft?.name,
      image: imgURLS[index],
      owner: ownerAddress.toString(),
      mintAddress: nft?.mintAddress.toString(),
      mintToken: nft?.mintAddress.toString(),
      order: index + 1,
    };
  });

  return newArray;
};

export const useGetNfts = () => {
  const myData = useQuery({
    queryFn: () => fetchNFT(),
    queryKey: ["nftsByMint"],
  });

  return myData;
};
