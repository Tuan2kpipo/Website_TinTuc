import React, { useEffect, useState } from "react";
import icons from "../untils/icons";

const { GrLinkPrevious } = icons;

function Modal({ setIsShowModal, content, name }) {
  const [persent1, setPersent1] = useState(0);
  const [persent2, setPersent2] = useState(100);

  // thay doi vi tri cua thanh persen

  useEffect(() => {
    const activedTrackEl = document.getElementById("track-active");

    if (persent2 <= persent1) {
      activedTrackEl.style.left = `${persent2}%`;
      activedTrackEl.style.right = `${100 - persent1}%`;
    } else {
      activedTrackEl.style.left = `${persent1}%`;
      activedTrackEl.style.right = `${100 - persent2}%`;
    }
  }, [persent1, persent2]);

  // su kien click vao thank persion
  const handleClickStack = (e, value) => {
    const stackEl = document.getElementById("track");
    const stackRect = stackEl.getBoundingClientRect();
    let percent = value
      ? value
      : Math.round(((e.clientX - stackRect.left) * 100) / stackRect.width, 0);
    if (Math.abs(percent - persent1) <= Math.abs(percent - persent2)) {
      setPersent1(percent);
    } else {
      setPersent2(percent);
    }
  };
  return (
    <div
      onClick={() => {
        // su kien bam the nao thi no chi an the do
        setIsShowModal(false);
      }}
      className="fixed top-0 left-0 bottom-0 right-0 z-20 bg-overlay-70 justify-center flex items-center"
    >
      <div
        onClick={(e) => {
          // su kien bam the nao thi no chi an the do
          e.stopPropagation();
          setIsShowModal(true);
        }}
        className="w-1/3 bg-white"
      >
        <div className="h-[45px] px-4 flex items-center border-b border-gray-200">
          <span
            className=" cursor-pointer"
            onClick={(e) => {
              // su kien bam the nao thi no chi an the do
              e.stopPropagation();
              setIsShowModal(false);
            }}
          >
            <GrLinkPrevious size={24}></GrLinkPrevious>
          </span>
        </div>

        {(name === "category" || name === "province") && (
          <div className="p-4 flex flex-col">
            {content?.map((item) => {
              return (
                <span
                  key={item.code}
                  className="py-2 flex gap-2 items-center border-b border-gray-200"
                >
                  <input type="radio" name={name} value={item.code}></input>
                  <label htmlFor={item.code}>{item.value}</label>
                </span>
              );
            })}
          </div>
        )}

        {(name === "price" || name === "area") && (
          <div className="p-12">
            <div className="flex flex-col items-center justify-center relative">
              <div
                id="track"
                onClick={handleClickStack}
                className="slider-track h-[5px] bg-gray-300 absolute top-0 bottom-0 w-full rounded-full"
              ></div>
              <div
                onClick={handleClickStack}
                id="track-active"
                className="slider-track-active h-[5px] bg-orange-600 absolute top-0 bottom-0  rounded-full"
              ></div>

              <input
                max="100"
                min="0"
                step="5"
                type="range"
                className="w-full appearance-none pointer-events-none absolute top-0 bottom-0"
                value={persent1}
                onChange={(e) => setPersent1(+e.target.value)}
              ></input>
              <input
                max="100"
                min="0"
                step="5"
                type="range"
                className="w-full appearance-none pointer-events-none  absolute top-0 bottom-0"
                value={persent2}
                onChange={(e) => setPersent2(+e.target.value)}
              ></input>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
