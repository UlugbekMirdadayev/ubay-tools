import { useSelector } from "react-redux";

const useUser = () => useSelector(({ user }) => user);
const useLang = () => useSelector(({ lang }) => lang);
const useCategories = () => useSelector(({ categories }) => categories);
const useLoading = () => useSelector(({ loading }) => loading);
const useProducts = () => useSelector(({ products }) => products);
const useFavorites = () => useSelector(({ favorites }) => favorites);
const useCart = () => useSelector(({ cart }) => cart);

const Selectors = {
  useUser,
  useLang,
  useCategories,
  useLoading,
  useProducts,
  useFavorites,
  useCart,
};

export default Selectors;
