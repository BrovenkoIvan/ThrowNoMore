import React from 'react';
import MainNavigator from './src/navigators/MainNavigator';
import { rootStore, StoreProvider } from './src/store';
import { CartProvider } from './src/context/Cart';

const App = () => (
  <CartProvider>
    {/*<StoreProvider value={rootStore}>*/}
    <MainNavigator />
    {/*</StoreProvider>*/}
  </CartProvider>
);

export default App;
