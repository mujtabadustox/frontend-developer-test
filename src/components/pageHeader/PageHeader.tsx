import React from "react";
import Header from "../header/Header";
import Title from "../title/Title";

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  return (
    <>
      <Header />
      <Title title={title} />
    </>
  );
};

export default PageHeader;
