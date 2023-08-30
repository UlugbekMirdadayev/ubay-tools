import React, { useMemo } from "react";
import { setOpenPasswordModal } from "../../redux/modals-slice";
import { ModalStyled } from "./style";
import { setLoading } from "../../redux/loading-slice";
import { useDispatch } from "react-redux";
import Selectors from "../../redux/selectors";
import { useForm } from "react-hook-form";
import locale from "../../localization/locale.json";
import { PenIcon } from "../icon";
import { api } from "../../api";
import { toast } from "react-toastify";

const Password = () => {
  const dispatch = useDispatch();
  const user = Selectors.useUser();
  const lang = Selectors.useLang();
  const { password } = Selectors.useModalOpen();
  const langData = useMemo(
    () => ({
      ...locale[lang]["modal"]["address"],
      ...locale[lang]["modal"]["password"],
    }),
    [lang]
  );
  const {
    handleSubmit,
    formState: { errors },
    register,
    getValues,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const formData = {
      edit_password: { password: data?.password_new, id: user?._id },
    };
    dispatch(setLoading(true));
    api
      .update_pass(formData)
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data.res_id === 200) {
          handleClose();
          toast.success(langData.updated);
          reset();
        } else {
          toast.error(data.mess);
        }
      })
      .catch(({ message = "" }) => {
        dispatch(setLoading(false));
        toast.error(message);
        console.log(message);
      });
  };

  const handleClose = () => dispatch(setOpenPasswordModal(false));

  if (!user?._id || !password) return <></>;

  return (
    <ModalStyled className="w-80">
      <div className="overlay" onClick={handleClose} />
      <form onSubmit={handleSubmit(onSubmit)} className="modal-body">
        <div className="cont">
          <div className="top">
            <div className="title-top">
              <div className="circle">
                <PenIcon />
              </div>
              <h3>{langData.title}</h3>
            </div>
            <button type="button" className="closer-btn" onClick={handleClose}>
              {langData.closer}
            </button>
          </div>
          <label className={`input-row ${errors.password_new ? "error" : ""}`}>
            <p>
              {langData.new_pass}
              <span> * </span>
            </p>
            <input
              type="password"
              {...register("password_new", { required: true })}
            />
          </label>
          <label
            className={`input-row ${errors.password_repeat ? "error" : ""}`}
          >
            <p>
              {langData.repeat_pass}
              <span> * </span>
            </p>
            <input
              type="password"
              {...register("password_repeat", {
                required: true,
                validate: (value) => {
                  const { password_new } = getValues();
                  return password_new === value;
                },
              })}
            />
          </label>
          <div className="checkbox-row">
            <button type="submit">{langData.save}</button>
            <button type="button" onClick={handleClose}>
              {langData.cancel}
            </button>
          </div>
        </div>
      </form>
    </ModalStyled>
  );
};

export default Password;
