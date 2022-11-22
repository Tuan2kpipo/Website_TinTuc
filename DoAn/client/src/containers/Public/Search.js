import React from "react";
import { Button } from "../../components";
import SearchItem from "../../components/SearchItem";
import icons from "../../untils/icons";
const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

function Search() {
  return (
    <>
      <div className="w-3/5 my-3 h-[55px] p-[10px] bg-[#f3bb02] rounded-lg flex-col  lg:flex-row flex items-center justify-around gap-2">
        <span>
          <SearchItem
            fontWeight
            text="phong tro , nha tro"
            IconBefore={
              <MdOutlineHouseSiding color="rgb(156, 163, 175)"></MdOutlineHouseSiding>
            }
            IconAfter={
              <BsChevronRight color="rgb(156, 163, 175)"></BsChevronRight>
            }
          ></SearchItem>
        </span>

        <span>
          <SearchItem
            IconBefore={
              <HiOutlineLocationMarker color="rgb(156, 163, 175)"></HiOutlineLocationMarker>
            }
            IconAfter={
              <BsChevronRight color="rgb(156, 163, 175)"></BsChevronRight>
            }
            text="toan quoc"
          ></SearchItem>
        </span>

        <span>
          <SearchItem
            text="gia"
            IconBefore={
              <TbReportMoney color="rgb(156, 163, 175)"></TbReportMoney>
            }
            IconAfter={
              <BsChevronRight color="rgb(156, 163, 175)"></BsChevronRight>
            }
          ></SearchItem>
        </span>

        <span>
          <SearchItem
            text="chon dien tich"
            IconBefore={<RiCrop2Line color="rgb(156, 163, 175)"></RiCrop2Line>}
            IconAfter={
              <BsChevronRight color="rgb(156, 163, 175)"></BsChevronRight>
            }
          ></SearchItem>
        </span>
        <button
          type="button"
          className=" outline-none py-2 px-4 bg-secondary1  rounded-md text-gray-400 text-[13.3px] flex items-center justify-between"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>
    </>
  );
}

export default Search;
