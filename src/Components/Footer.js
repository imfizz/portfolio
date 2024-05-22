import React, { useContext } from "react";
import { DataContext } from "../data/DataContext";

const Footer = () => {
  const { data, loading, isError } = useContext(DataContext);

  if(loading){
    return <div>About section is loading..</div>
  }

  if(isError){
    return <div>{isError}</div>
  }

  if (data) {
    var networks = data.main.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">{networks}</ul>

          <ul className="copyright">
            <li>
              Made by{" "}
              <a title="FRANCIS" href="https://www.linkedin.com/in/francis-albert-ilacad-3a4111281/">
                FRANCIS
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
