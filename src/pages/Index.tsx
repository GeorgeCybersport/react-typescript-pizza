import React from "react";
import Filters from "../IndexContent/components/Filters";
import Items from "../IndexContent/components/Items";

const Index: React.FC = () => {
  return (
    <div className="content">
      <div className="container">
        <Filters />
        <Items />
      </div>
    </div>
  );
};

export default Index;
