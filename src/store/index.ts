import { CartStore } from "./CartStore";
import { createContext, useContext } from "react";


export class RootStore {
  classes: CartStore;

  constructor() {
    this.classes = new CartStore();
  }
}

export const rootStore = new RootStore();
const StoreContext = createContext(rootStore)
export const StoreProvider = StoreContext.Provider
export const useStore = () => useContext(StoreContext)
