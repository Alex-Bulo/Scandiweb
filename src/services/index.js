import { getProductsByCategory, getProductById } from "./helpers/apiRequests";
import { addNavigationTo, calculatePrice, compareAttributes, getHTMLElements } from "./helpers/helpers";
import { validateNewCartItem } from "./helpers/validations";
import { CartContext } from "./context/cartContext";
import { CurrencyContext } from "./context/currencyContext";

export {
  getProductsByCategory,
  getProductById,
  addNavigationTo,
  calculatePrice,
  compareAttributes,
  validateNewCartItem,
  CartContext,
  CurrencyContext,
  getHTMLElements
};
