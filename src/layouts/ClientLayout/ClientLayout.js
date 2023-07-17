import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterClient from "../../components/FooterClient/FooterClient";
import "./ClientLayout.css";
import Menu from '../../components/MenuNav/Menu';

export const ClientLayout = (props) => {
  const { children } = props;

  return (
    <>
      <div className="header">
        <Menu />
      </div>
      <div className="my-4">
        {children}
      </div>
      <div className="footer">
        <FooterClient />
      </div>
    </>
    

  );
};