import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { getPosts, getPostsLimit } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

function List() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const { posts } = useSelector((state) => state.post);

  useEffect(() => {
    let params = [];
    for (let entry of searchParams.entries()) {
      params.push(entry);
    }

    let searchParamsObject = {};
    params?.map((i) => {
      searchParamsObject = { ...searchParamsObject, [i[0]]: i[1] };
    });

    // console.log(param);

    dispatch(getPostsLimit(searchParamsObject));
    // listRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams]);

  return (
    <div className="w-full bg-white  p-2 shadow-md rounded-md px-6">
      <div className="flex items-center justify-between my-3">
        <h4 className="flex text-xl font-semibold">Danh sach tin dang</h4>
        <span>Cap nhat: 12:05 25/08/2022</span>
      </div>

      <div className="flex items-center gap-1">
        <span>Sap xep</span>
        <Button bgColor="bg-gray-200" text="mac dinh"></Button>
        <Button bgColor="bg-gray-200" text="moi nhat"></Button>
        <Button bgColor="bg-gray-200" text="video"></Button>
      </div>

      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item.star}
                title={item?.title}
                user={item?.user}
                id={item?.id}
              ></Item>
            );
          })}
      </div>
    </div>
  );
}

export default List;
