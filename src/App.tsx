import React, { Suspense, lazy } from "react";
import Layout from "./app/pages/layout/Layout";
import "./App.css";
import { RoutesEnum } from "./app/router/routes";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import LoadingPage from "./app/pages/LoadingPage/LoadingPage";

const ImagesView = lazy(() => import("./app/pages/ImagesView/ImagesView"));
function App() {


  return (
    <Layout>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <Switch>
            <Route exact path={RoutesEnum.IMAGES}>
              <ImagesView />
            </Route>
            <Redirect to={RoutesEnum.IMAGES} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </Layout>
  );
}

export default App;
