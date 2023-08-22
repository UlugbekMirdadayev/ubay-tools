import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ModalStyled } from "./style";
import { useForm } from "react-hook-form";
import { LocationIcon } from "../icon";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import locale from "../../localization/locale.json";
import { setOpenAddressModal } from "../../redux/modals-slice";
import { setUserAddress } from "../../redux/userAddress-slice";
import { countries, regions } from "../../utils/constants";

const Address = () => {
  const dispatch = useDispatch();
  const user = Selectors.useUser();
  const lang = Selectors.useLang();
  const { address } = Selectors.useModalOpen();
  const langData = useMemo(() => locale[lang]["modal"]["address"], [lang]);
  const [regionsFiltered, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
    reset,
  } = useForm();
  const onSubmit = (data) => {
    data = {
      ...data,
      main_adress: +data.main_adress,
      id: user?.id,
      lat: "7",
      lng: "8",
    };
    setIsLoading(true);
    api
      .add_address({ insert_adress: data })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          setIsLoading(false);
          console.log(data);
          toast.success(langData.added_address);
          getUserAddresses();
          handleClose();
          reset();
        } else {
          toast.success(data.mess);
        }
      })
      .catch(({ message = "" }) => {
        setIsLoading(false);
        toast.error(message);
        console.log(message);
      });
  };

  const getUserAddresses = useCallback(() => {
    if (!user?.id) return;
    api
      .get_user_address({
        show_adress: { id: user?.id },
      })
      .then(({ data }) => {
        if (data.res_id === 200) {
          dispatch(
            setUserAddress(
              data?.result?.sort((a, b) => a?.ident - b?.ident)?.reverse()
            )
          );
        } else {
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, user?.id]);

  const c_ident = watch("c_ident");

  useEffect(() => {
    if (c_ident) {
      setRegions(regions.filter((region) => region.regionId === +c_ident));
      setValue("r_ident", "null");
    }
  }, [c_ident, setValue]);

  const handleClose = () => dispatch(setOpenAddressModal(false));

  if (!user?.id || !address) return <></>;

  return (
    <ModalStyled className="w-80 scroll-custome">
      <div className="overlay" onClick={handleClose} />
      <form onSubmit={handleSubmit(onSubmit)} className="modal-body">
        <div className="cont">
          <div className="top">
            <div className="title-top">
              <div className="circle">
                <LocationIcon />
              </div>
              <h3>{langData.title}</h3>
            </div>
            <button type="button" className="closer-btn" onClick={handleClose}>
              {langData.closer}
            </button>
          </div>
          <label className={`input-row ${errors.c_ident ? "error" : ""}`}>
            <p>
              {langData.city}
              <span> * </span>
            </p>
            <select
              disabled={isLoading}
              {...register("c_ident", {
                required: true,
                pattern: {
                  value: /^(0|[1-9]\d*)(\.\d+)?$/,
                },
              })}
            >
              <option value={"null"} hidden>
                {langData.choose}
              </option>
              {countries?.map((country) => (
                <option key={country?.regionId} value={country?.regionId}>
                  {country[`name${lang === "uz" ? "UzLatn" : "Ru"}`]}
                </option>
              ))}
            </select>
          </label>
          <label className={`input-row ${errors.r_ident ? "error" : ""}`}>
            <p>
              {langData.region}
              <span> * </span>
            </p>
            <select
              disabled={isLoading || c_ident === "null"}
              {...register("r_ident", {
                required: true,
                pattern: {
                  value: /^(0|[1-9]\d*)(\.\d+)?$/,
                },
              })}
            >
              <option value={"null"} hidden>
                {langData.choose}
              </option>
              {regionsFiltered.map((region) => (
                <option key={region?.code} value={region?.code}>
                  {region[`name${lang === "uz" ? "UzLatn" : "Ru"}`]}
                </option>
              ))}
            </select>
          </label>
          <label className={`input-row ${errors.adress ? "error" : ""}`}>
            <p>
              {langData.address}
              <span> * </span>
            </p>
            <input type="text" {...register("adress", { required: true })} />
          </label>
          <label className={`input-row ${errors.home ? "error" : ""}`}>
            <p>
              {langData.home}
              <span> * </span>
            </p>
            <input type="text" {...register("home", { required: true })} />
          </label>
          <label className={`input-row ${errors.flat ? "error" : ""}`}>
            <p>{langData.flat}</p>
            <input type="text" {...register("flat")} />
          </label>
          <label className="checkbox-row">
            <input type="checkbox" {...register("main_adress")} />
            <span>{langData.permanent_location}</span>
          </label>
          <div className="checkbox-row">
            <button type="submit" disabled={isLoading}>{langData.save}</button>
            <button type="button" onClick={handleClose}>
              {langData.cancel}
            </button>
          </div>
        </div>
      </form>
    </ModalStyled>
  );
};

export default Address;
