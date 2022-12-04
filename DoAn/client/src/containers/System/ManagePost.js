import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../store/actions";
import { Button, UpdatePost } from "../../components";

function ManagePost() {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const { postOfCurrent, dataEdit } = useSelector((state) => state.post);

  console.log("postcurrent", postOfCurrent);
  useEffect(() => {
    dispatch(actions.getPostsLimitAdmin());
  }, []);

  useEffect(() => {
    !dataEdit && setIsEdit(false);
  }, [dataEdit]);

  const checkStatus = (dateString) => {
    return moment(dateString, process.env.REACT_APP_FORMAT_DATE).isSameOrAfter(
      new Date().toDateString()
    );
  };

  console.log(checkStatus("8/10/2022"));
  return (
    <div className="flex flex-col gap-6 ">
      <div className="py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-3xl font-medium ">Quan ly tin dang</h1>
        <select className="outline-none border  border-gray-200 rounded-md">
          <option value=""> Lọc theo tin đăng</option>
        </select>
      </div>
      <table className="w-full table-auto">
        <thead>
          <tr className="flex w-full bg-blue">
            <th className="border flex-1 p-2 ">Mã tin </th>
            <th className="border flex-1 p-2 ">Ảnh </th>
            <th className="border flex-1 p-2 ">Tiêu đề </th>
            <th className="border flex-1 p-2 ">Giá </th>
            <th className="border flex-1 p-2">Ngày bắt đầu </th>
            <th className="border flex-1 p-2">Ngày hết hạn </th>
            <th className="border flex-1 p-2 ">Trạng thái </th>
            <th className="border flex-1 p-2 ">Tùy chọn </th>
          </tr>
        </thead>
        <tbody>
          {!postOfCurrent ? (
            <tr>
              <td>Ban chua co tin dang</td>
            </tr>
          ) : (
            postOfCurrent?.map((item) => {
              return (
                <tr key={item.id} className="flex item-center h-16">
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.overviews?.code}
                  </td>

                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    <img
                      src={JSON.parse(item?.images?.image)[0] || ""}
                      alt="avate-post"
                      className="w-10 h-10 object-cover rounded-md"
                    ></img>
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {`${item?.title?.slice(0, 40)}...`}
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.attributes?.price}
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.overviews?.created}
                  </td>

                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {item?.overviews?.expired}
                  </td>
                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center ">
                    {checkStatus(item?.overviews?.expired?.split(" ")[3])
                      ? "Dang hoat dong "
                      : "Da het han"}
                  </td>

                  <td className="border px-2  flex-1 h-full  flex items-center  justify-center gap-4">
                    <Button
                      onClick={() => {
                        dispatch(actions.editData(item));
                        setIsEdit(true);
                      }}
                      text="Sửa"
                    ></Button>

                    <Button text="Xóa"></Button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>

      {isEdit && <UpdatePost setIsEdit={setIsEdit}></UpdatePost>}
    </div>
  );
}

export default ManagePost;
