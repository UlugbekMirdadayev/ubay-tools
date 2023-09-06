import React, { useEffect, useMemo } from "react";
import { setOpenUpdateModal } from "../../redux/modals-slice";
import { ModalStyled } from "./style";
import { setLoading } from "../../redux/loading-slice";
import { useDispatch } from "react-redux";
import Selectors from "../../redux/selectors";
import { useForm } from "react-hook-form";
import locale from "../../localization/locale.json";
import { PenIcon } from "../icon";
import { api } from "../../api";
import { toast } from "react-toastify";
import { setLogin } from "../../redux/user-slice";

const Update = () => {
  const dispatch = useDispatch();
  const user = Selectors.useUser();
  const lang = Selectors.useLang();
  const { update } = Selectors.useModalOpen();
  const langData = useMemo(
    () => ({
      ...locale[lang]["modal"]["address"],
      ...locale[lang]["profile"],
      ...locale[lang]["modal"]["password"],
    }),
    [lang]
  );

  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm();
  const onSubmit = (data) => {
    if (
      // data.phone === user.phone &&
      // data.ism === user.ism &&
      data.fullName === user?.fullName
    ) {
      return toast.info(langData.nomodified);
    }
    const headers = {
      headers: {
        "x-access-token": JSON.parse(localStorage["ubay-user-data"] || "{}")
          ?.token,
      },
    };
    dispatch(setLoading(true));
    api
      .update_user(data, headers)
      .then(({ data }) => {
        dispatch(setLoading(false));
        toast.success(langData.updated);
        handleClose();
        dispatch(
          setLogin({ ...data, token: headers.headers["x-access-token"] })
        );
      })
      .catch(({ response: { data } = { data: { message: "Network error"} } }) => {
        dispatch(setLoading(false));
        toast.error(data?.message);
        console.log(data);
      });
  };

  useEffect(() => {
    setValue("fullName", user?.fullName);
    // setValue("phone", user?.phone);
  }, [user, update, setValue]);

  const handleClose = () => dispatch(setOpenUpdateModal(false));

  if (!user?._id || !update) return <></>;

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
          <label className={`input-row ${errors.fullName ? "error" : ""}`}>
            <p>
              {langData.surename} {langData.name}
              <span> * </span>
            </p>
            <input
              type="text"
              {...register("fullName", { required: true })}
              defaultValue={user?.fullName}
            />
          </label>
          {/* <label className={`input-row ${errors.fam ? "error" : ""}`}>
            <p>
              {langData.surename}
              <span> * </span>
            </p>
            <input
              type="text"
              {...register("fam", { required: true })}
              defaultValue={user?.fam}
            />
          </label>
          <label className={`input-row ${errors.phone ? "error" : ""}`}>
            <p>
              {langData.phone}
              <span> * </span>
            </p>
            <input
              type="tel"
              {...register("phone", {
                required: true,
                maxLength: {
                  value: 12,
                },
                minLength: {
                  value: 12,
                },
                pattern: {
                  value: /^(0|[1-9]\d*)(\.\d+)?$/,
                },
              })}
              defaultValue={user?.phone}
            />
          </label> */}
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

export default Update;
