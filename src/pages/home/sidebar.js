import React, { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { api } from "../../api";
import Selectors from "../../redux/selectors";
import { setCategories } from "../../redux/categories-slice";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loading-slice";

const Sidebar = ({ langData }) => {
  const dispatch = useDispatch();
  const categories = Selectors.useCategories();
  const lang = Selectors.useLang();

  const getCategories = useCallback(() => {
    if (categories?.length) return null;
    dispatch(setLoading(true));
    api
      .get_categories()
      .then(({ data }) => {
        dispatch(setLoading(false));
        if (data?.result?.length) {
          dispatch(
            setCategories(data?.result?.sort((a, b) => a?.ident - b?.ident))
          );
        }
      })
      .catch((err) => {
        dispatch(setLoading(false));
        console.error(err?.code);
      });
  }, [categories.length, dispatch]);

  useEffect(() => {
    const getResult = () => getCategories();
    return () => {
      getResult();
    };
  }, [getCategories]);

  return (
    <article>
      <h1 className="title-c">{langData.title}</h1>
      <ul>
        {categories?.map((category) => (
          <NavLink key={category?.ident} to={`/category/${category?.ident}`}>
            {category[lang === "uz" ? "iconfile" : "name"]}
          </NavLink>
        ))}
      </ul>
    </article>
  );
};

export default Sidebar;
