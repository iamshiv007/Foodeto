import React, { Fragment } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const MetaData = ({ title }) => {
  return (
    <Fragment>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
    </Fragment>
  );
};

export default MetaData;
