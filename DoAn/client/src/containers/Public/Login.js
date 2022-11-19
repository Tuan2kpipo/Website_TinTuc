import React, { useState, useEffect } from "react";
import { InputForm, Button } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import * as actions from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function Login() {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: "",
    password: "",
    name: "",
  });

  // chuyen trang thai dang nhap, dang ki
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  // khi login thanh cong
  useEffect(() => {
    isLoggedIn && navigate("/");
  }, [isLoggedIn]);

  // thong baos loi khi dang nhap popup
  useEffect(() => {
    msg && Swal.fire("Oops !", msg, "error");
  }, [msg, update]);

  // ham dang ki hoac dang nhap
  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload);
    if (invalids === 0)
      isRegister
        ? dispatch(actions.register(payload))
        : dispatch(actions.login(payload));
  };

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === "") {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: "Bạn không được bỏ trống trường này.",
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case "password":
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Mật khẩu phải có tối thiểu 6 kí tự.",
              },
            ]);
            invalids++;
          }
          break;
        case "phone":
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: "Số điện thoại không hợp lệ.",
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
  };

  return (
    <div className="bg-white  w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm">
      <h3 className="font-semibold text-2xl mb-3">
        {isRegister ? "Dang ki tai khoan" : "Dang nhap"}
      </h3>
      <div className="w-full flex flex-col gap-5">
        {isRegister && (
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={"HỌ TÊN"}
            value={payload.name}
            setValue={setPayload}
            keyPayload={"name"}
          ></InputForm>
        )}

        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          label={"SỐ ĐIỆN THOẠI"}
          value={payload.phone}
          setValue={setPayload}
          keyPayload={"phone"}
        ></InputForm>
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          label={"MẬT KHÂU"}
          value={payload.password}
          setValue={setPayload}
          keyPayload={"password"}
          type="password"
        ></InputForm>

        <Button
          text={isRegister ? "Dang ki" : "Dang nhap"}
          bgColor="bg-secondary1"
          textColor="text-white"
          fullWidth
          onClick={handleSubmit}
        ></Button>
      </div>
      <div className="mt-7 flex items-center justify-between">
        {isRegister ? (
          <small>
            Ban da co tai khoan ?{" "}
            <span
              className="text-blue-500 hover:underline cursor-pointer"
              onClick={() => {
                setIsRegister(false);
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                });
              }}
            >
              Dang nhap ngay
            </span>
          </small>
        ) : (
          <>
            <small className="text-[blue] hover:text-[orange] cursor-pointer">
              Ban quen mat khau
            </small>
            <small
              className="text-[blue] hover:text-[orange] cursor-pointer"
              onClick={() => {
                setIsRegister(true);
                setPayload({
                  phone: "",
                  password: "",
                  name: "",
                });
              }}
            >
              Tai tai khoan
            </small>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
