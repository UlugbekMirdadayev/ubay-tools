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
import { useNavigate } from "react-router-dom";

const UserModal = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const lang = Selectors.useLang();
  const { login } = Selectors.useModalOpen();
  const [phoneID, fullName, passID, newPass] = [useId(), useId(), useId()];
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState(null);
  const [isSignUp, setIsSignUp] = useState(null);
  const [forgotPass, setForgotPass] = useState(null);
  const [step, setStep] = useState(0);
  const user = Selectors.useUser();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
    reset,
    watch,
  } = useForm();
  const phone = watch("phone");
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
          navigate("/profile/user");
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
      .catch(
        ({ response: { data } = { data: { message: "Network error" } } }) => {
          setLoading(false);
          toast.error(data?.message || JSON.stringify(data));
          setErrorText(data?.message || "Phone or Password incorrect");
          reset();
          setValue("phone", formData?.phone?.replace("998", ""));
        }
      );
  };
  const handleRegister = (formData) => {
    setLoading(true);
    api
      .reg_user(formData)
      .then(({ data }) => {
        setErrorText("");
        setLoading(false);
        toast.info(data?.data?.message);
        if (data?.code === 200) {
          setStep(1);
          setValue("password", "");
        }
      })
      .catch(
        ({ response: { data } = { data: { message: "Network error" } } }) => {
          setLoading(false);
          setErrorText(data?.message);
          toast.error(data?.message || JSON.stringify(data));
          console.log(data);
        }
      );
  };

  const handleVerify = (formData) => {
    const fData = {
      phone: formData?.phone,
      code: formData?.password,
    };
    api
      .verify_sms(fData)
      .then(({ data }) => {
        console.log(data, "200");
        if (data?.code === 200) {
          if (data?.user?.isActive) {
            dispatch(setLogin({ ...data?.user, token: data?.token }));
            toast.success(data?.message);
            reset();
            handleClose();
          } else toast.info("User is not Active");
        } else toast.error(data?.message);
      })
      .catch(
        ({ response: { data } = { data: { message: "Network error" } } }) => {
          console.log(data);
        }
      );
  };

  const handleResetPass = (formData) => {
    const fData = {
      code: formData?.password,
      password: formData?.new_password,
    };
    api
      .reset_pass(fData)
      .then(({ data }) => {
        console.log(data, "200");
        if (data?.code === 200) {
          if (data?.user?.isActive) {
            dispatch(setLogin({ ...data?.user, token: data?.token }));
            toast.success(data?.message);
            reset();
            handleClose();
            setIsSignUp(false);
            setErrorText(null);
            setForgotPass(false);
            setStep(0);
          } else toast.info("User is not Active");
        } else toast.error(data?.message);
      })
      .catch(
        ({ response: { data } = { data: { message: "Network error" } } }) => {
          console.log(data);
        }
      );
  };

  const handleSendResetPass = () => {
    if (phone?.length === 9) {
      setForgotPass(true);
      setLoading(true);
      const fData = {
        phone: "998" + phone,
      };
      api
        .reset_pass_send(fData)
        .then(({ data }) => {
          setLoading(false);
          console.log(data, "200");
          toast.info(data?.message);
        })
        .catch(
          ({ response: { data } = { data: { message: "Network error" } } }) => {
            console.log(data);
            setLoading(false);
          }
        );
    }else toast.info("Telefon raqamini to'gri kiriting")
  };

  const onSubmit = (formData) => {
    formData.phone = "998" + formData.phone;
    if (forgotPass) {
      return handleResetPass(formData);
    }
    if (isSignUp) {
      step ? handleVerify(formData) : handleRegister(formData);
    } else {
      handleLogin(formData);
    }
  };

  if (user?._id || !login) return <></>;

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
        {forgotPass ? null : (
          <>
            <label htmlFor={phoneID}>{langData.phone}</label>
            <div className={`input_row ${errors.phone ? "error" : ""}`}>
              <span>+998</span>
              <input
                type="tel"
                id={phoneID}
                readOnly={loading || step}
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
          </>
        )}
        {isSignUp ? (
          step ? null : (
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
          )
        ) : null}

        <label htmlFor={passID}>
          {forgotPass || step ? "SMS code" : langData.password}
        </label>
        <div className={`input_row ${errors.password ? "error" : ""}`}>
          <input
            className="span"
            readOnly={loading}
            type={forgotPass || step ? "text" : "password"}
            id={passID}
            {...register("password", { required: true, minLength: 3 })}
          />
        </div>
        {forgotPass ? (
          <>
            <label htmlFor={newPass}>{langData.password}</label>
            <div className={`input_row ${errors.new_password ? "error" : ""}`}>
              <input
                className="span"
                readOnly={loading}
                type={"text"}
                id={newPass}
                {...register("new_password", { required: true, minLength: 3 })}
              />
            </div>
          </>
        ) : null}

        {forgotPass ? (
          <div>
            <label
              onClick={() => {
                setForgotPass(false);
                setErrorText(null);
                setStep(0);
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
                setForgotPass(false);
                setStep(0);
              }}
            >
              {langData.goto_login}
            </label>
          </div>
        ) : (
          <div className="row-space-between">
            <label onClick={handleSendResetPass}>{langData.forgot}</label>
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
