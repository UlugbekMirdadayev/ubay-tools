export const API = {
  baseURL: "https://api.ubaytools.com/onlinemarket/show/",
  baseURL_IMAGE: "https://api.ubaytools.com/Images/",
};

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'UZS',
  minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

export const currencyString = (string = "")=> formatter.format(string)?.replaceAll(","," ")
