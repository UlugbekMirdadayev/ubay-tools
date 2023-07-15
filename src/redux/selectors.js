import { useSelector } from "react-redux";

export const useUser = () => useSelector(({ user }) => user);
export const useLang = () => useSelector(({ lang }) => lang);
