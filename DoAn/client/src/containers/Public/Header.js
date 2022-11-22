import React, { useCallback, useEffect, useRef } from "react";
import bgthainguyen from "../../assets/thainguyen.png";

import { Button } from "../../components";
import icons from "../../untils/icons";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { path } from "../../untils/constant";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../store/actions";

const { AiOutlinePlusCircle } = icons;
// const { isLoggedIn } = useSelector((state) => state.auth);

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const headerRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);

  useEffect(() => {
    headerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams.get("page")]);

  return (
    <div ref={headerRef} className="w-3/5">
      <div className="w-full flex items-center justify-between ">
        <Link to={"/"}>
          <img
            src={bgthainguyen}
            alt="logo"
            className="w-[240px] h-[70px] object-contain"
          ></img>
        </Link>

        <div className="flex items-center gap-1">
          {!isLoggedIn && (
            <div className="flex items-center gap-1">
              <marquee className="w-[350px]">
                <small>
                  Tro giup phap ly tinh Thai Nguyen xin chao quy khach
                </small>
              </marquee>
              <Button
                text={"Dang nhap"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(false)}
              ></Button>

              <Button
                text={"Dang ky"}
                textColor="text-white"
                bgColor="bg-[#3961fb]"
                onClick={() => goLogin(true)}
              ></Button>
            </div>
          )}

          {isLoggedIn && (
            <div className="flex items-center gap-1">
              <small>Ten !</small>
              <Button
                text={"Dang xuat"}
                textColor="text-white"
                bgColor="bg-red-700"
                onClick={() => dispatch(actions.logout())}
              ></Button>
            </div>
          )}

          <Button
            text={"Dang tin moi"}
            textColor="text-white"
            bgColor="bg-secondary2"
            IcAfter={AiOutlinePlusCircle}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
