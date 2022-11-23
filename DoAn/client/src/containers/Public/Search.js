import React, { useState } from "react";
import { Button } from "../../components";
import { SearchItem, Modal } from "../../components";
import icons from "../../untils/icons";
import { useSelector } from "react-redux";
const {
  BsChevronRight,
  HiOutlineLocationMarker,
  TbReportMoney,
  RiCrop2Line,
  MdOutlineHouseSiding,
  FiSearch,
} = icons;

function Search() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [content, setContent] = useState([]);
  const [name, setName] = useState("");
  const { provinces, areas, prices, categories } = useSelector(
    (state) => state.app
  );

  const handleShowModal = (content, name) => {
    setContent(content);
    setName(name);
    setIsShowModal(true);
  };
  return (
    <>
      <div className="w-3/5 my-3 h-[55px] p-[10px] bg-[#f3bb02] rounded-lg flex-col  lg:flex-row flex items-center justify-around gap-2">
        <span
          className="cursor-pointer flex-1"
          onClick={() => handleShowModal(categories, "category")}
        >
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

        <span
          className="cursor-pointer flex-1"
          onClick={() => handleShowModal(provinces, "province")}
        >
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

        <span
          className="cursor-pointer flex-1"
          onClick={() => handleShowModal(prices, "price")}
        >
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

        <span
          className="cursor-pointer flex-1"
          onClick={() => handleShowModal(areas, "area")}
        >
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
          className=" flex-1 outline-none py-2 px-4 bg-secondary1  rounded-md text-gray-400 text-[13.3px] flex items-center justify-between"
        >
          <FiSearch />
          Tìm kiếm
        </button>
      </div>

      {isShowModal && (
        <Modal
          content={content}
          name={name}
          setIsShowModal={setIsShowModal}
        ></Modal>
      )}
    </>
  );
}

export default Search;
