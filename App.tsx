import React from 'react';
import MainNavigator from "./src/navigators/MainNavigator";
import { rootStore, StoreProvider } from "./src/store";


const App = () => (
  <StoreProvider value={rootStore}>
    <MainNavigator/>
  </StoreProvider>
)

export default App;
