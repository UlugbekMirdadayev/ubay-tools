export const API = {
  baseURL: "https://api.ubaytools.com/onlinemarket/",
  baseURL_IMAGE: "https://api.ubaytools.com/Images/",
};

export const arrayCreator = (count = 1) =>
  Array.from({ length: count }, (_, i) => i);

export const skeletionData = {
  slider: arrayCreator(5),
  categories: arrayCreator(10),
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "UZS",
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const currencyString = (string = "") =>
  formatter.format(string).split("UZS")[1]?.trim()?.replaceAll(",", " ") +
  " " +
  formatter.resolvedOptions().currency;

export const isSelectedProduct = (product, arrayList) =>
  arrayList.find((ident) => {
    if (typeof ident === "object") {
      return ident?.ident === product?.ident;
    } else return ident === product?.ident;
  });
