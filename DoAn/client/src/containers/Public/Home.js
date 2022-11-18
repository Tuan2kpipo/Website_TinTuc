import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Banner from "./Banner";
function Home() {
  return (
    <div className="w-full flex flex-col items-center h-full border border-red-500">
      <Banner></Banner>
      <Header />
      <Navigation></Navigation>
      <div className="w-1100 flex flex-col items-center justify-start">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Home;
