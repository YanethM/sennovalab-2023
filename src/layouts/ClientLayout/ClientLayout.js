import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterClient from "../../components/FooterClient/FooterClient";
import "./ClientLayout.css";
import Menu from '../../components/MenuNav/Menu';

export const ClientLayout = (props) => {
  const { children } = props;

  return (
    <>
      <header className="header">
        <Menu />
      </header>
      <content className="main">
        {children}
      </content>
      <footer className="footer">
        <FooterClient />
      </footer>
    </>
  );
};