import { useId, useMemo, useState } from "react";
import { CloseArrow } from "../icon";
import { ModalStyled } from "./style";
import { api } from "../../api";
import locale from "../../localization/locale.json";
import Selectors from "../../redux/selectors";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setLogin } from "../../redux/user-slice";
import { setOpenLoginModal } from "../../redux/modals-slice";
import { toast } from "react-toastify";

const UserModal = () => {
  const dispatch = useDispatch();
  const lang = Selectors.useLang();
  const { login } = Selectors.useModalOpen();
  const [phoneID, fullName, passID] = [useId(), useId(), useId()];
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [isSignUp, setIsSignUp] = useState(null);
  const [forgotPass, setForgotPass] = useState(null);
  const user = Selectors.useUser();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    reset,
  } = useForm();
  const langData = useMemo(() => locale[lang]["profile"], [lang]);

  const handleClose = () =>
    loading ? null : dispatch(setOpenLoginModal(false));

  const getUserMe = (token) => {
    api
      .me(token)
      .then(({ data }) => {
        console.log(data);
        if (data?.isActive) {
          dispatch(setLogin({ ...data, token }));
          toast.success("Success");
          reset();
          handleClose();
        } else toast.info("User is not Active");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = (formData) => {
    delete formData.fullName;
    setLoading(true);
    api
      .login(formData)
      .then(({ data }) => {
        setLoading(false);
        if (data?.token) {
          getUserMe(data?.token);
        } else {
          console.log(data);
        }
        setErrorText(null);
      })
      .catch(({ response: { data } }) => {
        setLoading(false);
        toast.error(data?.message || JSON.stringify(data));
        setErrorText(data?.message || JSON.stringify(data));
        reset();
        setValue("phone", formData?.phone?.replace("998", ""));
      });
  };
  const handleRegister = (formData) => {
    setLoading(true);
    api
      .reg_user(formData)
      .then(({ data }) => {
        setErrorText("");
        setLoading(false);
        if (data.code === 200) {
          if (data?.data?.user?.isActive) {
            dispatch(
              setLogin({ ...data?.data?.user, token: data?.data?.token })
            );
            toast.success(data?.data);
            reset();
            handleClose();
          } else toast.info("User is not Active");
        } else {
          console.log(data);
        }
      })
      .catch(({ response: { data } }) => {
        setLoading(false);
        setErrorText(data?.message);
        toast.error(data?.message);
        console.log(data);
      });
  };

  const onSubmit = (formData) => {
    formData.phone = "998" + formData.phone;
    if (isSignUp) {
      handleRegister(formData);
    } else {
      handleLogin(formData);
    }
  };

  if (user?.id || !login) return <></>;

  return (
    <ModalStyled className="scroll-custome">
      <div className="overlay" onClick={handleClose} />
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="modal-body"
      >
        <button className="closer" type="button" onClick={handleClose}>
          <CloseArrow />
        </button>
        <h1 className="title">{langData.login}</h1>
        {errorText && (
          <label style={{ color: "#F50", display: "block" }}>{errorText}</label>
        )}
        <label htmlFor={phoneID}>{langData.phone}</label>
        <div className={`input_row ${errors.phone ? "error" : ""}`}>
          <span>+998</span>
          <input
            type="tel"
            id={phoneID}
            readOnly={loading}
            {...register("phone", {
              required: true,
              maxLength: {
                value: 9,
              },
              minLength: {
                value: 9,
              },
              pattern: {
                value: /^(0|[1-9]\d*)(\.\d+)?$/,
              },
            })}
          />
        </div>
        {isSignUp && (
          <>
            <label htmlFor={fullName}>
              {langData.surename} {langData.name}
            </label>
            <div className={`input_row ${errors.fullName ? "error" : ""}`}>
              <input
                className="span"
                readOnly={loading}
                type="text"
                id={fullName}
                {...register("fullName", { required: true, minLength: 3 })}
              />
            </div>
          </>
        )}

        <label htmlFor={passID}>
          {forgotPass ? "SMS code" : langData.password}
        </label>
        <div className={`input_row ${errors.password ? "error" : ""}`}>
          <input
            className="span"
            readOnly={loading}
            type={forgotPass ? "text" : "password"}
            id={passID}
            {...register("password", { required: true, minLength: 3 })}
          />
        </div>

        {forgotPass ? (
          <div>
            <label
              onClick={() => {
                setForgotPass(false);
                setErrorText(null);
              }}
            >
              {langData.goto_login}
            </label>
          </div>
        ) : isSignUp ? (
          <div>
            <label
              onClick={() => {
                setIsSignUp(false);
                setErrorText(null);
              }}
            >
              {langData.goto_login}
            </label>
          </div>
        ) : (
          <div className="row-space-between">
            <label
              onClick={() => {
                toast.info(
                  "Texnik ish olib borilmoqda, parolni tiklash bo'yicha"
                );
                setErrorText(
                  "Texnik ish olib borilmoqda, parolni tiklash bo'yicha"
                );
                // setForgotPass(true)
              }}
            >
              {langData.forgot}
            </label>
            <label onClick={() => setIsSignUp(true)}>
              {langData.go_register}
            </label>
          </div>
        )}

        <button
          disabled={loading}
          className={`submit ${loading ? "isLoading" : ""}`}
        >
          {langData.send}
        </button>
      </form>
    </ModalStyled>
  );
};

export default UserModal;
