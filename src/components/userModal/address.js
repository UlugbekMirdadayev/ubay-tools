import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ModalStyled } from "./style";
import { useForm } from "react-hook-form";
import { LocationIcon } from "../icon";
import Selectors from "../../redux/selectors";
import { api } from "../../api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loading-slice";
import { toast } from "react-toastify";
import locale from "../../localization/locale.json";
import { setOpenAddressModal } from "../../redux/modals-slice";
import { setUserAddress } from "../../redux/userAddress-slice";

const Address = () => {
  const dispatch = useDispatch();
  const user = Selectors.useUser();
  const lang = Selectors.useLang();
  const { address } = Selectors.useModalOpen();
  const langData = useMemo(() => locale[lang]["modal"]["address"], [lang]);
  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);
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
    dispatch(setLoading(true));
    api
      .add_address({ insert_adress: data })
      .then(({ data }) => {
        if (data?.res_id === 200) {
          dispatch(setLoading(false));
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
        dispatch(setLoading(false));
        toast.error(message);
        console.log(message);
      });
  };

  const getCountries = useCallback(() => {
    setIsLoading(true);
    api
      .get_countries({ country_list: {} })
      .then(({ data }) => {
        setIsLoading(false);
        if (data?.res_id === 200) {
          setCountries(data?.result);
        } else {
          setCountries([]);
          console.log(data);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, []);

  const getRegions = useCallback(
    (coid) => {
      console.log(coid);
      setIsLoading(true);
      api
        .get_region({
          region_list_bycid: {
            c_ident: coid,
          },
        })
        .then(({ data }) => {
          setIsLoading(false);
          if (data?.res_id === 200) {
            setRegions(data?.result);
          } else {
            setRegions([]);
            console.log(data);
          }
          setValue("r_ident", "null");
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    },
    [setValue]
  );

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
      getRegions(c_ident);
    }
  }, [c_ident, getRegions]);

  useEffect(() => {
    getCountries();
  }, [getCountries]);

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
              {countries.map((country) => (
                <option key={country?.ident} value={country?.ident}>
                  {country?.name}
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
              disabled={isLoading}
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
              {regions.map((region) => (
                <option key={region?.ident} value={region?.ident}>
                  {region?.r_name}
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

export default Address;
