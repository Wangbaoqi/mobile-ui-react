import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "@/store";
import { BrowserRouter } from "react-router-dom";
import RouterView from "@/routes/routeView";
import routeConfig from '@/routes/routeConfig'

ReactDOM.render(
  <BrowserRouter basename='/react.components/'>
    <Suspense fallback={<div>loading...</div>}>
      <Provider store={store}>
        <React.StrictMode>
          <RouterView children={routeConfig}/>
        </React.StrictMode>
      </Provider>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
