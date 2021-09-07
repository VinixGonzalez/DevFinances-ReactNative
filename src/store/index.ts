import { proxy } from "valtio";
import { Store } from "../models";

const state = proxy<Store>({
  currency: {
    amount: 1,
    from: "EUR",
    to: "BRL",
  },
});

export { state };
