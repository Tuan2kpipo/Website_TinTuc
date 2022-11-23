import React, { useEffect, useState } from "react";
import { Province, ItemSidebar, RelatedPost } from "../../components";
import { text } from "../../untils/constant";
import { List, Pagination } from "./index";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { formatVietnameseToString } from "../../untils/Common/formatVietnameseToString";

function Rental() {
  const { prices, areas, categories } = useSelector((state) => state.app);
  const [categoryCurrent, setCategoryCurrent] = useState({});
  const [categoryCode, setCategoryCode] = useState("none");
  const location = useLocation();
  const dispatch = useDispatch();

  // console.log(location);
  useEffect(() => {
    const category = categories?.find(
      (item) => `/${formatVietnameseToString(item.value)}` === location.pathname
    );

    setCategoryCurrent(category);
    if (category) {
      setCategoryCode(category.code);
    }
  }, [location]);

  // console.log(categoryCode);
  return (
    <div className=" w-full flex flex-col gap-3">
      <div>
        <h1 className="text-[28px] font-bold">{categoryCurrent?.heaser}</h1>
        <p className="text-sm text-gray-700">{categoryCurrent?.subheader}</p>
      </div>

      <Province></Province>

      <div className="w-[100%] flex gap-4">
        <div className="w-[70%]">
          <List categoryCode={categoryCode}></List>
          <Pagination></Pagination>
        </div>
        <div className="w-[30%]  flex flex-col gap-4 justify-start items-center">
          <ItemSidebar
            isDouble={true}
            type="priceCode"
            content={prices}
            title="xem theo gia"
          ></ItemSidebar>
          <ItemSidebar
            isDouble={true}
            type="areaCode"
            content={areas}
            title="xem theo dien tich"
          ></ItemSidebar>
          <RelatedPost></RelatedPost>
        </div>
      </div>
    </div>
  );
}

export default Rental;
