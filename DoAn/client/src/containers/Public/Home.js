import React, { useEffect } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import Banner from "./Banner";
import { Intro, Contact } from "../../components";
import * as actions from "../../store/actions";
import { useDispatch } from "react-redux";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
    dispatch(actions.getProvinces());
  }, []);

  return (
    <div className="w-full flex gap-6 flex-col items-center h-full">
      <Banner></Banner>
      <Header />
      <Navigation></Navigation>
      <Search></Search>
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3">
        <Outlet></Outlet>
      </div>
      <Intro></Intro>
      <Contact></Contact>

      <div className="h-[500px]"> </div>
    </div>
  );
}

export default Home;
