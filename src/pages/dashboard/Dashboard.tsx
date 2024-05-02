import React from "react";
import { useGetNfts } from "../../hooks/hooks";
import CardView from "../../components/Dashboard/CardView";
import PageHeader from "../../components/pageHeader/PageHeader";

const Dashboard = () => {
  const { data, isLoading, error } = useGetNfts();

  console.log("AAAA:", data);

  return (
    <div className="p-8 text-white w-full">
      <div className="flex flex-col w-full h-full gap-8">
        <PageHeader title={"Dashboard"} />
        {isLoading ? (
          <div className="self-center flex flex-col justify-center items-center h-full w-full">
            <p className="text-white text-[10rem] animate-spin">?</p>
            <p className="text-sm animate-pulse font-SFP-R">Loading...</p>
          </div>
        ) : (
          <CardView nfts={data} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
