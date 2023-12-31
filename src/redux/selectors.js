import { useSelector } from "react-redux";

const useUser = () => useSelector(({ user }) => user);
const useLang = () => useSelector(({ lang }) => lang);
const useCategories = () => useSelector(({ categories }) => categories);
const useLoading = () => useSelector(({ loading }) => loading);
const useProducts = () => useSelector(({ products }) => products);
const useWishes = () => useSelector(({ wishes }) => wishes);
const useCart = () => useSelector(({ cart }) => cart);
const useCompare = () => useSelector(({ compare }) => compare);
const useNews = () => useSelector(({ news }) => news);
const useQuestions = () => useSelector(({ questions }) => questions);
const useSidebar = () => useSelector(({ sidebar }) => sidebar);
const useSlider = () => useSelector(({ slider }) => slider);
const useOrders = () => useSelector(({ orders }) => orders);
const useModalOpen = () => useSelector(({ modals }) => modals);

const Selectors = {
  useUser,
  useLang,
  useCategories,
  useLoading,
  useProducts,
  useWishes,
  useCart,
  useCompare,
  useNews,
  useQuestions,
  useSidebar,
  useSlider,
  useOrders,
  useModalOpen
};

export default Selectors;
