import React, { useContext } from "react";
import { DataContext } from "../data/DataContext";

const About = () => {
  const { data, loading, isError } = useContext(DataContext);

  if(loading){
    return <div>About section is loading..</div>
  }

  if(isError){
    return <div>{isError}</div>
  }

  if (data) {
    var name = data.main.name;
    var profilepic = "images/" + data.main.image;
    var bio = data.main.bio;
    var street = data.main.address.street;
    var city = data.main.address.city;
    var state = data.main.address.state;
    var zip = data.main.address.zip;
    var phone = data.main.phone;
    var email = data.main.email;
    var resumeDownload = data.main.resumedownload;
  }

  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profilepic}
            alt="Francis' Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>{bio}</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>{name}</span>
                <br />
                <span>
                  {street}
                  <br />
                  {city} {state}, {zip}
                </span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{email}</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href={resumeDownload} download="Ilacad, Francis Albert - Resume" className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
