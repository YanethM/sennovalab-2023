import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterClient from "../../components/FooterClient/FooterClient";
import "./ClientLayout.css";
import Menu from '../../components/MenuNav/Menu';

export const ClientLayout = (props) => {
  const { children } = props;

  return (
    <>
      <div>
        <Menu />
      </div>
      <div className="my-4">
        {children}
      </div>
      <div className="mt-5">
        <FooterClient />
      </div>
    </>
    

  );
};