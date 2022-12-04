// import React, { useEffect } from "react";
// import Header from "./Header";
// import { Outlet } from "react-router-dom";
// import { Navigation, Search } from "./index";
// import Banner from "./Banner";
// import { Intro, Contact } from "../../components";
// import * as actions from "../../store/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { apiGetCurrent } from "../../services";

// function Home() {
//   const dispatch = useDispatch();

//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const { currentData } = useSelector((state) => state.user);

//   useEffect(() => {
//     const fetchCurrent = async () => {
//       const response = await apiGetCurrent();
//       console.log(response);
//     };

//     isLoggedIn && fetchCurrent();
//   }, [isLoggedIn]);
//   useEffect(() => {
//     dispatch(actions.getPrices());
//     dispatch(actions.getAreas());
//     dispatch(actions.getProvinces());
//   }, []);

//   useEffect(() => {
//     isLoggedIn && dispatch(actions.getCurrent());
//   }, [isLoggedIn]);

//   console.log(currentData);

//   return (
//     <div className="w-full flex gap-6 flex-col items-center h-full">
//       <Banner></Banner>
//       <Header />
//       <Navigation></Navigation>
//       {isLoggedIn && <Search />}
//       <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3">
//         <Outlet />
//       </div>
//       <Intro />
//       <Contact />
//       <div className="h-[500px]"></div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import { Outlet } from "react-router-dom";
import { Navigation, Search } from "./index";
import { Intro, Contact } from "../../components";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <div className="w-full flex gap-6 flex-col items-center h-full">
      <Banner></Banner>
      <Header />
      <Navigation />
      {isLoggedIn && <Search />}
      <div className="w-4/5 lg:w-3/5 flex flex-col items-start justify-start mt-3">
        <Outlet />
      </div>
      <Intro />
      <Contact />
      <div className="h-[500px]"></div>
    </div>
  );
};

export default Home;
