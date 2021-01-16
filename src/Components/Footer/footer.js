import React from "react";
import './Footer.css'
import {  MDBContainer, MDBFooter } from "mdbreact";

const Footer = () => {
      return (
            <MDBFooter color="rgb(.0,.0,.0,0.5)" className="font-small pt-4 mt-4">
            <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
            </div>
      </MDBFooter>
      );
}

export default Footer;