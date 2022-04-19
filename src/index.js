import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import store from "./redux/store";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistStore } from "redux-persist";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
let persistor = persistStore(store);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
