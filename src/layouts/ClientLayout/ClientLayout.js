import React from "react";
import FooterClient from "../../components/FooterClient/FooterClient";
import "./ClientLayout.scss";
import Menu from '../../components/MenuNav/Menu';

export const ClientLayout = (props) => {
  const { children } = props;

  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        {children}
      </div>
      <div>
        <FooterClient></FooterClient>
      </div>
    </>
    

  );
};