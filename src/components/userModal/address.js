import React, { useEffect, useMemo, useState } from "react";
import { ModalStyled } from "./style";
import { useForm } from "react-hook-form";
import { LocationIcon } from "../icon";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import locale from "../../localization/locale.json";
import { setOpenAddressModal } from "../../redux/modals-slice";
import { countries, regions } from "../../utils/constants";
import { setLogin } from "../../redux/user-slice";

const Address = () => {
  const dispatch = useDispatch();
  const user = Selectors.useUser();
  const lang = Selectors.useLang();
  const { address } = Selectors.useModalOpen();
  const langData = useMemo(() => locale[lang]["modal"]["address"], [lang]);
  const [regionsFiltered, setRegions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const headers = {
    headers: {
      "x-access-token": JSON.parse(localStorage["ubay-user-data"] || "{}")
        ?.token,
    },
  };

  const {
    handleSubmit,
    formState: { errors },
    register,
    watch,
    setValue,
    reset,
  } = useForm();

  const handleActiveAddress = (address_id) => {
    api
      .update_address(address_id, {}, headers)
      .then(({ data }) => {
        dispatch(
          setLogin({ ...data, token: headers.headers["x-access-token"] })
        );
      })
      .catch(({ response: { data } = { data: { message: "Network error"} } }) => {
        console.log(data);
      });
  };

  const onSubmit = (fdata) => {
    const district = regions.find((region) => region.code === +fdata.district);
    const city = countries.find((city) => city.regionId === +fdata.city);
    fdata.district = district[`name${lang === "uz" ? "UzLatn" : "Ru"}`];
    fdata.city = city[`name${lang === "uz" ? "UzLatn" : "Ru"}`];
    setIsLoading(true);
    api
      .add_address(user?._id, fdata, headers)
      .then(({ data }) => {
        setIsLoading(false);
        dispatch(
          setLogin({ ...data, token: headers.headers["x-access-token"] })
        );
        if (fdata?.main_address) {
          handleActiveAddress(data?.address?.at(-1)?._id);
        }
        toast.success(langData.added_address);
        handleClose();
        reset();
      })
      .catch(({ response: { data } = { data: { message: "Network error"} } }) => {
        setIsLoading(false);
        toast.error(data?.message || JSON.stringify(data));
        console.log(data);
      });
  };

  const city = watch("city");

  useEffect(() => {
    if (city) {
      setRegions(regions.filter((region) => region.regionId === +city));
      setValue("district", "null");
    }
  }, [city, setValue]);

  const handleClose = () => dispatch(setOpenAddressModal(false));

  if (!user?._id || !address) return <></>;

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
          <label className={`input-row ${errors.city ? "error" : ""}`}>
            <p>
              {langData.city}
              <span> * </span>
            </p>
            <select
              disabled={isLoading}
              {...register("city", {
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
          <label className={`input-row ${errors.district ? "error" : ""}`}>
            <p>
              {langData.region}
              <span> * </span>
            </p>
            <select
              disabled={isLoading || city === "null"}
              {...register("district", {
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
          <label className={`input-row ${errors.street ? "error" : ""}`}>
            <p>
              {langData.address}
              <span> * </span>
            </p>
            <input type="text" {...register("street", { required: true })} />
          </label>
          <label className={`input-row ${errors.house ? "error" : ""}`}>
            <p>
              {langData.home}
              <span> * </span>
            </p>
            <input type="text" {...register("house", { required: true })} />
          </label>
          <label className={`input-row ${errors.floor ? "error" : ""}`}>
            <p>{langData.flat}</p>
            <input type="text" {...register("floor")} />
          </label>
          <label className="checkbox-row">
            <input type="checkbox" {...register("main_address")} />
            <span>{langData.permanent_location}</span>
          </label>
          <div className="checkbox-row">
            <button type="submit" disabled={isLoading}>
              {langData.save}
            </button>
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
