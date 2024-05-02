import React from "react";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import PageHeader from "../../components/pageHeader/PageHeader";

const Home = () => {
  return (
    <div className="p-8 text-white w-full">
      <div className="flex flex-col w-full h-full gap-8">
        <PageHeader title={"Home"} />
        <div className="self-center flex justify-center items-center h-full w-full ">
          <p className="text-white text-[10rem]">?</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
