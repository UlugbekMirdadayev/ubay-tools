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
    const formData = {
      edit_data: { ...data, id: user?.id },
    };
    if (
      data.phone === user.phone &&
      data.ism === user.ism &&
      data.fam === user.fam
    ) {
      return toast.info(langData.nomodified);
    }
    dispatch(setLoading(true));
    api
      .update_user(formData)
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data.res_id === 200) {
          console.log(formData);
          api
            .search_user({
              phone_search: { phone: formData?.edit_data?.phone },
            })
            .then(({ data }) => {
              if (data.res_id === 200) {
                dispatch(setLogin(data?.result));
              }
            })
            .catch((err) => {
              console.log(err);
            });
          toast.success(langData.updated);
          handleClose();
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

  useEffect(() => {
    setValue("ism", user?.ism);
    setValue("fam", user?.fam);
    setValue("phone", user?.phone);
  }, [user, update, setValue]);

  const handleClose = () => dispatch(setOpenUpdateModal(false));

  if (!user?.id || !update) return <></>;

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
          <label className={`input-row ${errors.ism ? "error" : ""}`}>
            <p>
              {langData.name}
              <span> * </span>
            </p>
            <input
              type="text"
              {...register("ism", { required: true })}
              defaultValue={user?.ism}
            />
          </label>
          <label className={`input-row ${errors.fam ? "error" : ""}`}>
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

export default Update;
