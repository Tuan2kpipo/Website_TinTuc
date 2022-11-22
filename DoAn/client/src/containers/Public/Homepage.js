import React, { useEffect } from "react";
import { Province, ItemSidebar } from "../../components";
import { text } from "../../untils/constant";
import { List, Pagination } from "./index";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";

function Homepage() {
  const { categories, prices } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPrices());
    dispatch(actions.getAreas());
  }, []);

  return (
    <div className="border border-red-500 w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{text.HOME_TITLE}</h1>
        <p className="text-sm text-gray-700">{text.HOME_DESCRIPTION}</p>
      </div>

      <Province></Province>

      <div className="w-[100%] flex gap-4">
        <div className="w-[70%]">
          <List></List>
          <Pagination></Pagination>
          <div className="h-[500px]"></div>
        </div>
        <div className="w-[30%] border border-green-500 flex flex-col gap-4 justify-start items-center">
          <ItemSidebar
            content={categories}
            title="danh sach cho thue"
          ></ItemSidebar>
          <ItemSidebar
            isDouble={true}
            type="priceCode"
            content={prices}
            title="xem theo gia"
          ></ItemSidebar>
          {/* <ItemSidebar
            isDouble={true}
            content={areas}
            title="xem theo dien tich"
          ></ItemSidebar> */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
