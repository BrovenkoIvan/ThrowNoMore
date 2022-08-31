import { IProduct } from "../types";
import { makeAutoObservable } from "mobx";

export class CartStore {
  items: IProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }
  incrementQuantity(newItem: IProduct ) {
    const foundItem = this.items.find((item) => item.id === newItem.id);
    if(foundItem){
      if(foundItem.quantityLeft !== 1) {
        this.items = this.items.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity + 1, quantityLeft: item.quantityLeft - 1} : item)
      }
    }
    else {
      newItem.quantity = 1
      this.items.push(newItem)
    }
  }

  decrementQuantity(newItem: IProduct) {
    const foundItem = this.items.find((item) => item.id === newItem.id);
    if(foundItem?.quantity !== 1) {
      if (foundItem?.quantity){
        this.items = this.items.map((item) => item.id === newItem.id ? {...item, quantity: item.quantity -1, quantityLeft: item.quantityLeft + 1} : item)
      }
    } else {
      this.items = this.items.filter((item) => item.id !==newItem.id)
    }
  }
}
