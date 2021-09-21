import { Fragment } from "react";

//package import

import { Route } from "react-router-dom";

//user import

import { routes } from "./root_routes";

export const Routes = () => {
  return (
    <Fragment>
      {routes?.map((el, index) => (
        <Route
          exact={el?.exact}
          path={el?.path}
          component={el?.page}
          key={`${index}-root-routes-${el?.id}`}
        />
      ))}
    </Fragment>
  );
};
