import { EHomeStack, EMainStack, ETabsStack } from "../constants/navigation";
import { IProduct } from "../types";

export type MainStackScreenList = {
  [EMainStack.Main]: undefined;
}

export type HomeStackScreenList = {
  [EHomeStack.List] : undefined,
  [EHomeStack.Product]: {product :IProduct}
}

export type TabsStackScreenList = {
  [ETabsStack.Home]: undefined;
  [ETabsStack.Notifications]: undefined;
  [ETabsStack.Cart]: undefined;
  [ETabsStack.Setting]: undefined;
};
