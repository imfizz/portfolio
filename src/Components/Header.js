import React, { useContext } from "react";
import TypeWriter from "react-typewriter";
import { DataContext } from "../data/DataContext";
import useSmoothScroll from "./Header/useSmoothScroll";
import useHighlightNavigation from "./Header/useHighlightNavigation";

const Header = () => {
  const { data, loading, isError } = useContext(DataContext);
  useSmoothScroll();
  useHighlightNavigation();
  

  if(loading){
    return <div>Header section is loading..</div>
  }

  if(isError){
    return <div>{isError}</div>
  }

  if (data) {
    var name = data.main.name;
    var occupation = data.main.occupation;
    var description = data.main.description;
    var state = data.main.address.state;
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
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className="nav">
          <li className="current">
            <a className="smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            <TypeWriter typing={1} mindelay="100" maxdelay="20">{name ? `${name}` : null}</TypeWriter>
          </h1>
          <h3>
            Based in {state}. <span>{occupation}</span>. {description}.
          </h3>
          <hr />
          <ul className="social">{networks}</ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
};

export default Header;
