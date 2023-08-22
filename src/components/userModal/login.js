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
  const [phoneID, nameID, famID, passID] = [useId(), useId(), useId(), useId()];
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(null);
  const [forgotPass, setForgotPass] = useState(null);
  const user = Selectors.useUser();

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm();
  const langData = useMemo(() => locale[lang]["profile"], [lang]);

  const handleClose = () => dispatch(setOpenLoginModal(false));

  const handleSearchNumber = (number) => {
    setLoading(true);
    api
      .search_user({
        phone_search: {
          phone: "998" + number,
        },
      })
      .then(({ data }) => {
        setLoading(false);
        if (data.res_id === 200) {
          setStep(1);
          setIsSignUp(data.result.new_user);
        }
      })
      .catch(({ message = "" }) => {
        setLoading(false);
        toast.error(message);
        console.log(message);
      });
  };
  const handleLogin = ({ phone, password }) => {
    setLoading(true);
    api
      .login_user({
        phoneandpassword_search: { phone: "998" + phone, password },
      })
      .then(({ data }) => {
        setLoading(false);
        if (data.res_id === 200) {
          dispatch(setLogin(data?.result));
          toast.success("Success");
          handleClose();
        } else {
          toast.error(data.mess);
        }
      })
      .catch(({ message = "" }) => {
        setLoading(false);
        toast.error(message);
        console.log(message);
      });
  };

  const onSubmit = (formData) => {
    if (step) {
      handleLogin(formData);
    } else {
      handleSearchNumber(formData.phone);
    }
  };

  const editPhone = () => {
    setValue("phone", "");
    setStep(0);
    setForgotPass(false)
  };

  if (user?.id || !login) return <></>;

  return (
    <ModalStyled className="scroll-custome">
      <div className="overlay" onClick={handleClose} />
      <form onSubmit={handleSubmit(onSubmit)} className="modal-body">
        <button className="closer" onClick={handleClose}>
          <CloseArrow />
        </button>
        <h1 className="title">{langData.login}</h1>
        <label htmlFor={phoneID}>{langData.phone}</label>
        <div className={`input_row ${errors.phone ? "error" : ""}`}>
          <span onClick={step ? editPhone : null}>+998</span>
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
        {step ? (
          isSignUp ? (
            <>
              <label htmlFor={nameID}>{langData.name}</label>
              <div className={`input_row ${errors.ism ? "error" : ""}`}>
                <input
                  type="text"
                  className="span"
                  readOnly={loading}
                  id={nameID}
                  {...register("ism", { required: true, minLength: 3 })}
                />
              </div>

              <label htmlFor={famID}>{langData.surename}</label>
              <div className={`input_row ${errors.fam ? "error" : ""}`}>
                <input
                  className="span"
                  readOnly={loading}
                  type="text"
                  id={famID}
                  {...register("fam", { required: true, minLength: 3 })}
                />
              </div>
            </>
          ) : (
            <>
              <label htmlFor={passID}>{forgotPass ? "SMS code" : langData.password}</label>
              <div className={`input_row ${errors.password ? "error" : ""}`}>
                <input
                  className="span"
                  readOnly={loading}
                  type={forgotPass ? "text" : "password"}
                  id={passID}
                  {...register("password", { required: true, minLength: 3 })}
                />
              </div>
              {forgotPass ? null : (
                <div>
                  <label onClick={() => setForgotPass(true)}>
                    {langData.forgot}
                  </label>
                </div>
              )}
            </>
          )
        ) : null}
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
