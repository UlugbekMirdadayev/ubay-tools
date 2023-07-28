import { useSelector } from "react-redux";

const useUser = () => useSelector(({ user }) => user);
const useLang = () => useSelector(({ lang }) => lang);
const useCategories = () => useSelector(({ categories }) => categories);
const useLoading = () => useSelector(({ loading }) => loading);
const useProducts = () => useSelector(({ products }) => products);

const Selectors = { useUser, useLang, useCategories, useLoading, useProducts };

export default Selectors;
